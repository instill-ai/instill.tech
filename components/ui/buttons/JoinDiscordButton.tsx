import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { ButtonBase } from "./ButtonBase";
import * as ga from "../../../lib/google-analytic";
import { sendAmplitudeData } from "../../../lib/amplitude";

interface Props {}

/**
 *
 * @param styleName - tailwind format style
 * @returns react function component
 * - The style of button and text are fixed.
 * - Use styleName to change position only.
 */

export const JoinDiscordButton: FC<Props> = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    sendAmplitudeData("join_discord", { type: "navigation" });
    ga.eventHelpers.engagement("join_discord");
    router.push(process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK);
  }, [router]);

  return (
    <ButtonBase
      variant="outlined"
      color="white"
      startIcon={<DiscordIcon styleName="w-5 mr-3" />}
      onClick={handleClick}
      itemDirection="horizontal"
    >
      <p className="my-auto">Join Our Community</p>
    </ButtonBase>
  );
};
