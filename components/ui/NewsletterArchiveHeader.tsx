import { FC } from "react";
import { SubscribeNewsletterForm } from "../forms/SubscribeNewsletterForm";

interface Props {}

export const NewsletterArchiveHeader: FC<Props> = () => {
  return (
    <div className="flex flex-col pt-[100px] pb-[60px] px-5 mb-20 max-w-[800px] md:mx-auto md:px-0">
      <h1 className="instill-text-h1 text-instillGray05 mb-5 text-center">
        Newsletter
      </h1>
      <h3 className="instill-text-h3-light text-instillGray05 mb-[60px] text-center">
        Get the latest news from Instill AI: open source updates, community
        highlights, blog posts, useful tutorials and more!
      </h3>
      <SubscribeNewsletterForm styleName="max-w-[552px] w-full mx-auto" />
    </div>
  );
};
