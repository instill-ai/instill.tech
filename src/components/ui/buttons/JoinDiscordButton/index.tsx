import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import * as ga from "../../../../lib/google-analytic";
import { sendAmplitudeData } from "../../../../lib/amplitude";
import { DiscordIcon, OutlineButton } from "@instill-ai/design-system";

const JoinDiscordButton: FC = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    sendAmplitudeData("join_discord", { type: "navigation" });
    ga.eventHelpers.engagement("join_discord");
    router.push(process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK);
  }, [router]);

  return (
    <OutlineButton
      type="button"
      color="primary"
      startIcon={
        <DiscordIcon
          width="w-6"
          height="h-6"
          color="fill-instillBlue50 group-hover:fill-instillBlue10"
          position="my-auto"
        />
      }
      onClickHandler={handleClick}
      itemGapX="gap-x-3"
    >
      <p className="my-auto">Join Our Community</p>
    </OutlineButton>
  );
};

export default JoinDiscordButton;
