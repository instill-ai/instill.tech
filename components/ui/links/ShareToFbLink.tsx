import { FC } from "react";
import { FacebookIcon } from "../icons/FacebookIcon";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** Page;s url you want to share */
  url: string;

  /** <Tailwind config> */
  styleName?: string;
}

export const ShareToFbLink: FC<Props> = ({ url, styleName }) => {
  return (
    <LinkBase
      styleName={classNames.default("flex", styleName)}
      href={`https://www.facebook.com/sharer/sharer.php?u=#${url}`}
    >
      <FacebookIcon styleName="w-[15px] h-[15px] text-instillGray30" />
    </LinkBase>
  );
};
