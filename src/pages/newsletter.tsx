import { FC, Fragment, ReactElement } from "react";
import { GetStaticProps } from "next";
import matter from "gray-matter";
const mailchimp = require("@mailchimp/mailchimp_marketing");
import { parse } from "node-html-parser";

import {
  ContentContainer,
  PageBase,
  PageHead,
  SubscribeNewsletterForm,
} from "@/components/ui";
import {
  GetCampaignContentResponse,
  ListCampaignsResponse,
  NewsletterPublicCampaign,
} from "@/types/mailchimp";
import {
  removeMailchimpStyleAndMeta,
  removePlaceholderAndFooterWords,
} from "@/lib/mailchimp";

type NewsletterArchivePageProps = {
  campaigns: NewsletterPublicCampaign[];
};

type GetLayOutProps = {
  page: ReactElement;
};

export const getStaticProps: GetStaticProps = async () => {
  // Init mailchimp client
  mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER, // e.g. us1
  });

  let publicCampaigns: NewsletterPublicCampaign[] = [];

  try {
    // Get campaigns, we only want to display public campaigns in this archive
    // Here is the workaround to get the full length of the campaigns list.
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

    for (const campaign of fullCampaigns.campaigns) {
      // Check campaign folder_id to find public campaign
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

        // Remove mailchimp style and meta
        const cleanRoot = removeMailchimpStyleAndMeta(root);

        publicCampaigns.push({
          id: campaign.id,
          title: campaign.settings.title,
          sendTime: campaign.send_time,
          plainText: removePlaceholderAndFooterWords(content),
          html: removePlaceholderAndFooterWords(cleanRoot.toString()),
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

const NewsletterArchivePage: FC<NewsletterArchivePageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ campaigns }) => {
  return (
    <>
      <PageHead
        pageTitle="Newsletter Archive | Instill AI"
        pageDescription="Instill AI newsletter archive"
      />
      <ContentContainer>
        <div className="mb-20 flex max-w-[800px] flex-col px-5 pt-[100px] pb-[60px] md:mx-auto md:px-0">
          <h1 className="instill-text-h1 mb-5 text-center text-instillGrey05">
            Newsletter
          </h1>
          <h3 className="instill-text-h3-light mb-[60px] text-center text-instillGrey05">
            Get the latest news from Instill AI: open source updates, community
            highlights, blog posts, useful tutorials and more!
          </h3>
          <SubscribeNewsletterForm
            width="w-full max-w-[552px]"
            position="mx-auto"
          />
        </div>
        <div className="flex flex-col">
          {campaigns.map((campaign) => (
            <Fragment key={campaign.id}>
              <div className="mx-auto mb-[60px] w-full max-w-[800px] border-t border-b border-instillGrey70 py-2.5 text-instillGrey15">
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
      </ContentContainer>
    </>
  );
};

NewsletterArchivePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default NewsletterArchivePage;
