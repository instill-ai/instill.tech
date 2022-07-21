import { FC, ReactElement, Fragment, useEffect } from "react";
import { PageBase, PageHead } from "@/components/layouts";
import { GetStaticProps } from "next";
import {
  GetCampaignContentResponse,
  ListCampaignsResponse,
} from "../types/mailchimp";
import matter from "gray-matter";
const mailchimp = require("@mailchimp/mailchimp_marketing");
import { parse } from "node-html-parser";
import { NewsletterArchiveHeader } from "../components/ui/NewsletterArchiveHeader";
import { useRouter } from "next/router";
import { sendAmplitudeData } from "../lib/amplitude";
import { removePlaceholderAndFooterWords } from "../lib/mailchimp";
import { useAmplitudeCtx } from "../contexts/AmplitudeContext";

type TPublicCampaign =
  | {
      title: string;
      id: string;
      sendTime: string;
      plainText: string;
      html: string;
    }
  | undefined;

interface Props {
  campaigns: TPublicCampaign[];
}

interface GetLayOutProps {
  page: ReactElement;
}

const NewsletterArchivePage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ campaigns }) => {
  const router = useRouter();
  const { amplitudeIsInit } = useAmplitudeCtx();

  useEffect(() => {
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_newsletter_archive", { type: "navigation" });
    }
  }, [router.isReady, amplitudeIsInit]);

  return (
    <>
      <PageHead
        pageTitle="Newsletter Archive | Instill AI"
        pageDescription="Instill AI newsletter archive"
      />
      <div className="flex w-full flex-col bg-instillGrey95 lg:pt-20">
        <NewsletterArchiveHeader />
        <div className="flex max-w-[1440px] flex-col px-5 md:px-0 max:mx-auto max:w-10/12">
          {campaigns.map((campaign) => (
            <Fragment key={campaign.id}>
              <div className="mx-auto mb-[60px] w-full max-w-[800px] border-t border-b border-instillGray70 py-2.5 text-instillGray15">
                {`Issued on ${new Date(campaign.sendTime)
                  .toDateString()
                  .split(" ")
                  .slice(1)
                  .join(" ")}`}
              </div>
              <div
                className="mailchimp-archive mx-auto mb-[120px]"
                dangerouslySetInnerHTML={{ __html: campaign.html }}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

NewsletterArchivePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default NewsletterArchivePage;

export const getStaticProps: GetStaticProps = async () => {
  // Init mailchimp client
  mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER, // e.g. us1
  });

  let publicCampaigns: TPublicCampaign[] = [];

  try {
    // Get campaigns, we only want to display public campaigns in this archive
    const getCampaignTotalCounts: ListCampaignsResponse =
      await mailchimp.campaigns.list({
        count: 1,
      });

    const totalCounts = getCampaignTotalCounts.total_items;

    const fullCampaigns: ListCampaignsResponse = await mailchimp.campaigns.list(
      {
        count: totalCounts,
      }
    );

    // Check campaign folder_id to find public campaign
    for (const campaign of fullCampaigns.campaigns) {
      if (
        campaign.settings.folder_id ===
        process.env.NEXT_PUBLIC_PUBLIC_CAMPAIGN_FOLDER_ID
      ) {
        // Get public campaign content
        const response: GetCampaignContentResponse =
          await mailchimp.campaigns.getContent(campaign.id);

        // Parse plain text to markdown using grey-matter
        const { content } = matter(response.plain_text.trim());

        // Parse html string to Dom using node-html-parser
        const root = parse(response.html);

        // Mailchimp has meta, title and style tag, we need to remove it to avoid polluting our
        // website
        root.querySelectorAll("meta").forEach((e) => e.remove());
        root.querySelectorAll("title").forEach((e) => e.remove());
        root.querySelectorAll("link").forEach((e) => e.remove());
        root.querySelectorAll("style").forEach((e) => e.remove());

        // Remove mailchimp Footer
        root.querySelectorAll("#templateFooter").forEach((e) => e.remove());

        // Remove mailchimp h3 inline color style
        root.querySelectorAll("h3").forEach((e) => {
          let styleList = e.attributes.style.split(";");
          styleList = styleList.filter((style) => {
            return !style.includes("color:");
          });
          e.setAttribute("style", styleList.join(";"));
        });

        // Remove mailchimp h4 inline color style
        root.querySelectorAll("h4").forEach((e) => {
          let styleList = e.attributes.style.split(";");
          styleList = styleList.filter((style) => {
            return !style.includes("color:");
          });
          e.setAttribute("style", styleList.join(";"));
        });

        // Remove mailchimp p inline color style
        root.querySelectorAll("p").forEach((e) => {
          let styleList = e.attributes.style.split(";");
          styleList = styleList.filter((style) => {
            return !style.includes("color:");
          });
          e.setAttribute("style", styleList.join(";"));
        });

        // Remove mailchimp content divider
        root.querySelectorAll(".mcnDividerContent").forEach((e) => {
          let styleList = e.attributes.style.split(";");
          styleList = styleList.filter((style) => {
            return !style.includes("border-top:");
          });
          e.setAttribute("style", styleList.join(";"));
        });

        // Remove mailchimp content image fixed width
        root.querySelectorAll(".mcnImage").forEach((e) => {
          e.removeAttribute("width");
          let styleList = e.attributes.style.split(";");
          styleList = styleList.filter((style) => {
            return !style.includes("max-width:");
          });
          e.setAttribute("style", styleList.join(";"));

          e.classList.add("mx-auto");
          e.classList.add("md:max-w-full");
        });

        // Remove mailchimp Header logo image
        root.querySelectorAll("#templateHeader").forEach((e) => e.remove());

        publicCampaigns.push({
          id: campaign.id,
          title: campaign.settings.title,
          sendTime: campaign.send_time,
          plainText: removePlaceholderAndFooterWords(content),
          html: removePlaceholderAndFooterWords(root.toString()),
        });
      }
    }
  } catch (err) {
    console.error(
      "Something went wrong when try to get mailchimp campaign list",
      err
    );
  }

  return {
    props: {
      campaigns: publicCampaigns,
    },
    revalidate: 10,
  };
};
