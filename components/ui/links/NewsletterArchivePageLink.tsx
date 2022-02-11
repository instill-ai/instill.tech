import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** textSize and color - tailwindCSS based, default: instill-text-body text-instillGray30 hover:text-instillGray05*/
  styleName?: string;
}

export const NewsletterArchivePageLink: FC<Props> = ({ styleName }) => {
  const style = styleName
    ? styleName
    : "instill-text-body text-instillGray30 hover:text-instillGray05";
  return (
    <LinkBase href="/newsletter" styleName={classNames.default("flex", style)}>
      <p className="my-auto">Newsletter</p>
    </LinkBase>
  );
};
