import { FC } from "react";
import { MediumIcon } from "../icons/MediumIcon";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** Color and width - tailwindCSS based, default: w-4 text-instillGray30 */
  styleName?: string;
}

export const MediumLink: FC<Props> = ({ styleName }) => {
  const style = styleName ? styleName : "w-4 text-instillGray30";
  return (
    <LinkBase
      styleName={classNames.default("flex", style)}
      href="https://medium.com/instill-ai"
    >
      <MediumIcon />
    </LinkBase>
  );
};
