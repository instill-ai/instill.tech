import { FC, ReactElement } from "react";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
import { GetStaticProps } from "next";
import {
  GetCampaignContentResponse,
  ListCampaignsResponse,
} from "../types/mailchimp";
import matter from "gray-matter";
import { ReactMDWrapper } from "../components/ReactMDWrapper";
const mailchimp = require("@mailchimp/mailchimp_marketing");

type TPublicCampaign =
  | {
      title: string;
      id: string;
      sendTime: string;
      content: string;
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
  console.log(campaigns);

  return (
    <PageHead pageTitle="Newsletter Archive | Instill Ai" pageDescription="">
      <div className="flex py-[60px] lg:pt-[244px] lg:pb-[60px] px-4 md:px-0 max:mx-auto max:w-10/12 max-w-[1440px]">
        {campaigns.map((campaign) => (
          <ReactMDWrapper
            styleName="mx-auto"
            key={campaign.id}
            content={campaign.content}
          />
        ))}
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

        const { content } = matter(response.plain_text.trim());

        publicCampaigns.push({
          id: campaign.id,
          title: campaign.settings.title,
          sendTime: campaign.send_time,
          content: removePlaceholderAndFooterWords(content),
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
  };
};

const removePlaceholderAndFooterWords = (content: string): string => {
  let removeWords = [
    "\\*\\|FNAME\\|\\*",
    "\\*\\|MC_PREVIEW_TEXT\\|\\*",
    "============================================================",
    "\\*\\* GitHub \\(https://github.com/instill-ai\\)",
    "\\*\\* Blog \\(https://blog.instill.tech/\\)",
    "\\*\\* Facebook \\(https://www.facebook.com/instilltech\\)",
    "\\*\\* Twitter \\(https://twitter.com/instill_tech\\)",
    "Copyright © \\*\\|CURRENT_YEAR\\|\\* \\*\\|LIST:COMPANY\\|\\*, All rights reserved.",
    "\\*\\|IFNOT:ARCHIVE_PAGE\\|\\* \\*\\|LIST:DESCRIPTION\\|\\*",
    "Our mailing address is:",
    "\\*\\|LIST_ADDRESS\\|\\* \\*\\|END:IF\\|\\*",
    "Want to change how you receive these emails\\?",
    "You can \\*\\* update your preferences \\(\\*\\|UPDATE_PROFILE\\|\\*\\)",
    "or \\*\\* unsubscribe from this list \\(\\*\\|UNSUB\\|\\*\\)",
    "\\*\\|IF:REWARDS\\|\\* \\*\\|REWARDS_TEXT\\|\\* \\*\\|END:IF\\|\\*",
    "\\*\\*",
  ];

  let re = new RegExp(removeWords.join("|"), "gi");
  console.log(re);
  return content.replace(re, () => {
    return "";
  });
};
