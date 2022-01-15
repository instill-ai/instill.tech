import { FC } from "react";
import { LinkBase } from "./LinkBase";

interface Props {
  styleName?: string;
  href: string;
}

export const PrivacyPolicyLink: FC<Props> = ({ styleName, href }) => {
  const style = styleName ? styleName : "instill-text-body text-instillGray30";
  return (
    <LinkBase href={href} styleName={style}>
      Privacy policy
    </LinkBase>
  );
};
