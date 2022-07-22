import { NewsletterPublicCampaign } from "@/types/mailchimp";
import { FC, Fragment } from "react";
import NewsletterArchiveHeader from "./NewsletterArchiveHeader";

export type NewsletterArchiveSectionProps = {
  campaigns: NewsletterPublicCampaign[];
};

const NewsletterArchiveSection: FC<NewsletterArchiveSectionProps> = ({
  campaigns,
}) => {
  return (
    <>
      <NewsletterArchiveHeader />
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
    </>
  );
};

export default NewsletterArchiveSection;
