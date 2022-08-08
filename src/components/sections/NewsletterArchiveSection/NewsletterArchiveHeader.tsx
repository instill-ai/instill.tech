import { SubscribeNewsletterForm } from "@/components/ui";
import { FC } from "react";

const NewsletterArchiveHeader: FC = () => {
  return (
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
  );
};

export default NewsletterArchiveHeader;
