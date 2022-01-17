import { FC } from "react";
import { ReactMDWrapper } from "../ReactMDWrapper";

interface Props {
  content: string;
}

export const PolicyPageLayout: FC<Props> = ({ content }) => {
  return (
    <div className="md:grid md:grid-cols-3">
      <ReactMDWrapper
        styleName="mx-5 md:mx-0 mt-[180px] mb-[60px] col-span-2"
        content={content}
      />
      <div className="col-span-1 mt-[180px]">
        <div className="sticky flex flex-col top-0 py-20 px-16 gap-y-2">
          <p className="text-instillGray05">
            We&apos;re happy to hear from you. Get in touch at
          </p>
          <a className="text-instillBlue30" href="mailto:hello@instill.tech">
            hello@instill.tech
          </a>
        </div>
      </div>
    </div>
  );
};
