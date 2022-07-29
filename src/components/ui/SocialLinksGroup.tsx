import { DiscordIcon, GitHubIcon, MediumIcon } from "@instill-ai/design-system";
import cn from "clsx";

export type SocialLinksGroupProps = {
  styleName?: string;
};

const SocialLinksGroup = ({ styleName }: SocialLinksGroupProps) => {
  return (
    <div className={cn("flex flex-row gap-x-5", styleName)}>
      <a
        href="https://github.com/instill-ai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex"
      >
        <GitHubIcon
          width="w-6"
          height="h-6"
          color="fill-instillGrey30 hover:fill-instillGrey05"
          position="m-auto"
        />
      </a>
      <a
        href={process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex"
      >
        <DiscordIcon
          width="w-5"
          height="h-5"
          color="fill-instillGrey30 hover:fill-instillGrey05"
          position="m-auto"
        />
      </a>
      <a
        href="https://medium.com/instill-ai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex"
      >
        <MediumIcon
          width="w-5"
          height="h-5"
          color="fill-instillGrey30 hover:fill-instillGrey05"
          position="m-auto"
        />
      </a>
    </div>
  );
};

export default SocialLinksGroup;
