import { FC, ReactElement } from "react";
import { GetStaticProps } from "next";
import matter from "gray-matter";
const mailchimp = require("@mailchimp/mailchimp_marketing");
import { parse } from "node-html-parser";

import { PageHead } from "@/components/layouts";
import { ContentContainer, PageBase } from "@/components/ui";
import {
  GetCampaignContentResponse,
  ListCampaignsResponse,
  NewsletterPublicCampaign,
} from "@/types/mailchimp";
import { NewsletterArchiveSection } from "@/components/sections";
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
        <NewsletterArchiveSection campaigns={campaigns} />
      </ContentContainer>
    </>
  );
};

NewsletterArchivePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default NewsletterArchivePage;
