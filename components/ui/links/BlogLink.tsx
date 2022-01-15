import { FC } from "react";
import { LinkBase } from "./LinkBase";

interface Props {
  styleName?: string;
  href: string;
}

export const BlogLink: FC<Props> = ({ styleName, href }) => {
  const style = styleName ? styleName : "flex instill-text-body text-white";
  return (
    <LinkBase href={href} styleName={style}>
      <p className="my-auto">Blog</p>
    </LinkBase>
  );
};
