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
      variant="outlined"
      color="white"
      startIcon={<DiscordIcon styleName="w-5 mr-3" />}
      onClick={() => {
        ga.eventHelpers.engagement("join_discord");
        router.push(process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK);
      }}
    >
      <p className="my-auto">Join our Community</p>
    </ButtonBase>
  );
};
