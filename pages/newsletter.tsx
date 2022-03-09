import { FC, ReactElement, Fragment, useEffect } from "react";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
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

  useEffect(() => {
    if (router.isReady) {
      sendAmplitudeData("hit_newsletter_archive", { type: "navigation" });
    }
  }, [router.isReady]);

  return (
    <PageHead
      pageTitle="Newsletter Archive | Instill AI"
      pageDescription="Instill AI newsletter archive"
    >
      <div className="flex flex-col w-full lg:mt-20">
        <NewsletterArchiveHeader />
        <div className="flex flex-col px-5 md:px-0 max:mx-auto max:w-10/12 max-w-[1440px]">
          {campaigns.map((campaign) => (
            <Fragment key={campaign.id}>
              <div className="border-t border-b border-instillGray70 py-2.5 text-instillGray15 max-w-[800px] w-full mx-auto mb-[60px]">
                {`Issued on ${new Date(campaigns[0].sendTime)
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
    </PageHead>
  );
};

NewsletterArchivePage.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
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
    const response: ListCampaignsResponse = await mailchimp.campaigns.list();

    // Check campaign folder_id to find public campaign
    for (const campaign of response.campaigns) {
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
          e.classList.add("md:max-w-[600px]");
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
