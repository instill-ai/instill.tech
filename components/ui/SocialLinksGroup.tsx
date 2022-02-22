import { FC } from "react";
import { DiscordLink } from "./links/DiscordLink";
import { GithubIconLink } from "./links/GithubIconLink";
import { MediumLink } from "./links/MediumLink";
import * as classNames from "classnames";
import { ToMediumButton } from "./buttons/ToMediumButton";

interface Props {
  styleName?: string;
}

/**
 *
 * @param styleName - tailwind format style
 * @returns
 * - Use styleName to control this component's position and width
 * - All link elements have fixed style
 * - Currently links: Github | Discord | Medium
 */

export const SocialLinksGroup: FC<Props> = ({ styleName }) => {
  const style =
    "w-6 h-6 sm:w-4 sm:h-6 text-instillGray30 hover:text-instillGray05";
  return (
    <div className={classNames.default("flex flex-row gap-x-5", styleName)}>
      <GithubIconLink iconStyle={style} />
      <DiscordLink iconStyle={style} />
      <ToMediumButton />
    </div>
  );
};
