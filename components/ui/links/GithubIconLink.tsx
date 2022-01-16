import { FC } from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** Color and width - tailwindCSS based, default: w-4 text-instillGray30 */
  styleName?: string;
}

export const GithubIconLink: FC<Props> = ({ styleName }) => {
  const style = styleName ? styleName : "w-4 text-instillGray30";

  return (
    <LinkBase
      styleName={classNames.default("flex", style)}
      href="https://github.com/instill-ai"
    >
      <GithubIcon />
    </LinkBase>
  );
};
