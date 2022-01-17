import { useRouter } from "next/router";
import { FC } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { ButtonBase } from "./ButtonBase";
import * as ga from "../../../lib/google-analytic";

interface Props {}

export const JoinDiscordButton: FC<Props> = () => {
  const router = useRouter();
  return (
    <ButtonBase
      variant="contained"
      color="white"
      startIcon={<DiscordIcon styleName="w-5" />}
      onClick={() => {
        ga.eventHelpers.engagement("join_discord");
        router.push("https://discord.gg/Juas75UP7p");
      }}
    >
      Join our Community
    </ButtonBase>
  );
};
