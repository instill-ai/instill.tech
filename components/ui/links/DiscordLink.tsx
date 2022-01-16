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
      href="https://discord.gg/jqmkb42FUK"
    >
      <DiscordIcon styleName={style} />
    </LinkBase>
  );
};
