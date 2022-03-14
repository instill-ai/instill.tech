import { FC } from "react";
import { ReactMDWrapper } from "../ReactMDWrapper";

interface Props {
  content: string;
}

export const PolicyPageLayout: FC<Props> = ({ content }) => {
  return (
    <div className="flex w-full bg-instillGray95">
      <div className="md:grid md:grid-cols-3 md:w-10/12 max-w-[1440px] md:mx-auto">
        <ReactMDWrapper
          styleName="prose-white mx-5 md:mx-0 mt-[180px] mb-[60px] md:col-span-2"
          content={content}
        />
        <div className="md:col-span-1 md:mt-[180px]">
          <div className="md:sticky flex flex-col mb-40 md:mb-0 md:top-0 py-4 md:py-20 px-4 md:px-16 gap-y-2">
            <p className="text-instillGray05">
              We&apos;re happy to hear from you. Get in touch at
            </p>
            <a
              className="flex text-instillBlue30"
              href="mailto:hello@instill.tech"
            >
              hello@instill.tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
