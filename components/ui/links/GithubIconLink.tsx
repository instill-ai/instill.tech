import { FC } from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** Color and width - tailwindCSS based, default: w-4 text-instillGray30 */
  iconStyle?: string;
}

export const GithubIconLink: FC<Props> = ({ iconStyle }) => {
  const style = iconStyle ? iconStyle : "w-4 text-instillGray30";

  return (
    <LinkBase
      styleName={classNames.default("flex")}
      href="https://github.com/instill-ai"
    >
      <GithubIcon styleName={style} />
    </LinkBase>
  );
};
