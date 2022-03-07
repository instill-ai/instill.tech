import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";
import { TwitterIcon } from "../icons/TwitterIcon";

interface Props {
  /** Page;s url you want to share */
  url: string;

  /** Text you want to add into sharing post */
  text?: string;

  /** <Tailwind config> */
  styleName?: string;
}

export const ShareToTwitterLink: FC<Props> = ({ url, styleName, text }) => {
  return (
    <LinkBase
      styleName={classNames.default("flex", styleName)}
      href={
        text
          ? `https://twitter.com/share?text=${text}&url=${url}`
          : `https://twitter.com/share?url=${url}`
      }
    >
      <TwitterIcon styleName="w-[15px] h-[15px] text-instillGray30 hover:text-instillGray05" />
    </LinkBase>
  );
};
