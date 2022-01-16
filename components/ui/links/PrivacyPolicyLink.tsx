import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** textSize and width - tailwindCSS based, default: instill-text-body text-instillGray30 */
  styleName?: string;
}

export const PrivacyPolicyLink: FC<Props> = ({ styleName }) => {
  const style = styleName ? styleName : "instill-text-body text-instillGray30";
  return (
    <LinkBase href="/privacy" styleName={classNames.default("flex", style)}>
      Privacy policy
    </LinkBase>
  );
};
