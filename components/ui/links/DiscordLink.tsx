import { FC } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";

interface Props {
  /** Color and width - tailwindCSS based, default: w-4 text-instillGray30 */
  iconStyle?: string;
}

export const DiscordLink: FC<Props> = ({ iconStyle }) => {
  const style = iconStyle ? iconStyle : "w-4 text-instillGray30";
  return (
    <LinkBase
      styleName={classNames.default("flex")}
      href={process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK}
    >
      <DiscordIcon styleName={style} />
    </LinkBase>
  );
};
