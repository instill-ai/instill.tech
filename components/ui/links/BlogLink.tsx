import { FC } from "react";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** textSize and width - tailwindCSS based, default: instill-text-body text-white */
  styleName?: string;
}

export const BlogLink: FC<Props> = ({ styleName }) => {
  const style = styleName ? styleName : "instill-text-body text-white";
  return (
    <LinkBase
      href="https://blog.instill.tech"
      styleName={classNames.default("flex", style)}
    >
      <p className="my-auto">Blog</p>
    </LinkBase>
  );
};
