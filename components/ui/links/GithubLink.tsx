import { FC } from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkBase } from "./LinkBase";

interface Props {
  styleName?: string;
  href: string;
}

export const GithubLink: FC<Props> = ({ styleName, href }) => {
  const style = styleName ? styleName : "flex w-4 text-instillGray30";

  return (
    <LinkBase styleName={style} href={href}>
      <GithubIcon />
    </LinkBase>
  );
};
