import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";
import { TwitterIcon } from "../icons/TwitterIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

interface Props {
  /** Page;s url you want to share */
  url: string;

  /** <Tailwind config> */
  styleName?: string;
}

export const ShareToLinkedInLink: FC<Props> = ({ url, styleName }) => {
  return (
    <LinkBase
      styleName={classNames.default("flex", styleName)}
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
    >
      <LinkedInIcon styleName="w-[15px] h-[15px] text-instillGray30" />
    </LinkBase>
  );
};
