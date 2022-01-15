import { FC } from "react";
import { DiscordLink } from "./links/DiscordLink";
import { GithubLink } from "./links/GithubLink";
import { MediumLink } from "./links/MediumLink";

interface Props {}

export const SocialLinksGroup: FC<Props> = () => {
  return (
    <div className="flex flex-row justify-center gap-x-5">
      <GithubLink href="https://github.com/instill-ai" />
      <DiscordLink href="https://discord.gg/Rnn58CebTK" />
      <MediumLink href="" />
    </div>
  );
};
