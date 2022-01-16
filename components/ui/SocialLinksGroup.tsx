import { FC } from "react";
import { DiscordLink } from "./links/DiscordLink";
import { GithubLink } from "./links/GithubLink";
import { MediumLink } from "./links/MediumLink";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const SocialLinksGroup: FC<Props> = ({ styleName }) => {
  return (
    <div className={classNames.default("flex flex-row gap-x-5", styleName)}>
      <GithubLink
        styleName="w-6 sm:w-4 text-instillGray30"
        href="https://github.com/instill-ai"
      />
      <DiscordLink styleName="w-6 sm:w-4 text-instillGray30" />
      <MediumLink styleName="w-6 sm:w-4 text-instillGray30" />
    </div>
  );
};
