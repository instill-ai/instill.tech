import { FC } from "react";
import { DiscordLink } from "./links/DiscordLink";
import { GithubIconLink } from "./links/GithubIconLink";
import { MediumLink } from "./links/MediumLink";
import * as classNames from "classnames";

interface Props {
  styleName?: string;
}

export const SocialLinksGroup: FC<Props> = ({ styleName }) => {
  return (
    <div className={classNames.default("flex flex-row gap-x-5", styleName)}>
      <GithubIconLink styleName="w-6 sm:w-4 text-instillGray30 hover:text-instillGray05" />
      <DiscordLink styleName="w-6 sm:w-4 text-instillGray30 hover:text-instillGray05" />
      <MediumLink styleName="w-6 sm:w-4 text-instillGray30 hover:text-instillGray05" />
    </div>
  );
};
