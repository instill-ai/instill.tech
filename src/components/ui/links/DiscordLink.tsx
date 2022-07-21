import { FC, useCallback } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { LinkBase } from "./LinkBase";
import * as classNames from "classnames";
import { sendAmplitudeData } from "../../../lib/amplitude";

interface Props {
  /** Color and width - tailwindCSS based, default: w-4 text-instillGrey30 */
  iconStyle?: string;
}

export const DiscordLink: FC<Props> = ({ iconStyle }) => {
  const style = iconStyle ? iconStyle : "w-4 text-instillGrey30";

  const handleClick = useCallback(() => {
    sendAmplitudeData("join_discord", { type: "navigation" });
  }, []);

  return (
    <LinkBase
      styleName={classNames.default("flex")}
      href={process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK}
      onClick={handleClick}
    >
      <DiscordIcon styleName={style} />
    </LinkBase>
  );
};
