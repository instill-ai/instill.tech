import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** textSize and width - tailwindCSS based, default: instill-text-body text-instillGray30 */
  styleName?: string;
}

export const CookiePolicyLink: FC<Props> = ({ styleName }) => {
  const style = styleName
    ? styleName
    : "instill-text-body text-instillGray30 hover:text-instillGray05";
  return (
    <LinkBase href="/cookie" styleName={classNames.default("flex", style)}>
      Cookie policy
    </LinkBase>
  );
};
