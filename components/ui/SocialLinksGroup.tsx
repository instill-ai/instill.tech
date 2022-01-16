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
      <GithubIconLink iconStyle="w-6 h-6 sm:w-4 sm:h-6 text-instillGray30 hover:text-instillGray05" />
      <DiscordLink iconStyle="w-6 h-6 sm:w-4 sm:h-6 text-instillGray30 hover:text-instillGray05" />
      <MediumLink iconStyle="w-6 h-6 sm:w-4 sm:h-6 text-instillGray30 hover:text-instillGray05" />
    </div>
  );
};
