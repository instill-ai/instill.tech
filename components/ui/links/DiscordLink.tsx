import { FC } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { LinkBase } from "./LinkBase";

interface Props {
  styleName?: string;
  href: string;
}

export const DiscordLink: FC<Props> = ({ href, styleName }) => {
  const style = styleName ? styleName : "flex w-4 text-instillGray30";
  return (
    <LinkBase styleName={style} href={href}>
      <DiscordIcon />
    </LinkBase>
  );
};
