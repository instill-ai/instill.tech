import { FC, Fragment, ReactElement } from "react";
import { GetStaticProps } from "next";
import matter from "gray-matter";
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
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

  publicCampaigns = publicCampaigns.sort((a, b) => {
    return new Date(b.sendTime).getTime() - new Date(a.sendTime).getTime();
  });

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
        pageType="main"
        pageTitle="Newsletter Archive | Instill AI"
        pageDescription="Instill AI newsletter archive"
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[800px]"
      >
        <div className="mb-[120px] flex w-full flex-col xl:mb-40 xl:px-0">
          <h1 className="mb-10 w-full text-left font-mono text-5xl font-semibold uppercase text-instillSkyBlue xl:text-instill-h1">
            Newsletter
          </h1>
          <h3 className="mb-10 font-sans text-lg font-light text-instillGrey70 xl:text-2xl">
            Get the latest news from Instill AI: open source updates, community
            highlights, blog posts, useful tutorials and more!
          </h3>
          <SubscribeNewsletterForm width="w-full" position="mx-auto" />
        </div>
        <div className="flex w-full flex-col">
          {campaigns.map((campaign) => (
            <Fragment key={campaign.id}>
              <div className="mr-auto mb-5 bg-instillNatureGreen py-[5px] px-2.5">
                {`${new Date(campaign.sendTime)
                  .toDateString()
                  .split(" ")
                  .slice(1)
                  .join(" ")}`}
              </div>
              <div
                className="mb-[120px] w-full bg-instillGrey05 py-10 px-4 shadow-instill-solid-10 xl:px-10 xl:shadow-instill-solid-20"
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
