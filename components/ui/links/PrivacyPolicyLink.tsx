import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** textSize and width - tailwindCSS based, default: instill-text-body text-instillGray30 */
  styleName?: string;
  href: string;
}

export const PrivacyPolicyLink: FC<Props> = ({ styleName, href }) => {
  const style = styleName ? styleName : "instill-text-body text-instillGray30";
  return (
    <LinkBase href={href} styleName={classNames.default("flex", style)}>
      Privacy policy
    </LinkBase>
  );
};
