import { FC } from "react";
import { ReactMDWrapper } from "../ReactMDWrapper";

interface Props {
  content: string;
}

export const PolicyPageLayout: FC<Props> = ({ content }) => {
  return (
    <div className="flex w-full bg-instillGray95">
      <div className="max-w-[1440px] md:mx-auto md:grid md:w-10/12 md:grid-cols-3">
        <ReactMDWrapper
          styleName="prose-white mx-5 md:mx-0 mt-[180px] mb-[60px] md:col-span-2"
          content={content}
        />
        <div className="relative md:col-span-1 md:mt-[180px]">
          <div className="mb-40 flex flex-col gap-y-2 px-4 pt-40 md:sticky md:top-0 md:mb-0 md:px-16">
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
