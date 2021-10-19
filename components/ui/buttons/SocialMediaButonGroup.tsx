import * as classNames from "classnames";
import { FC, useState } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { SlackIcon } from "../icons/SlackIcon";
import { StackOverflowIcon } from "../icons/StackOverflowIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

interface Props {
  styleName: string;
}

export const SocialMediaButtonGroup: FC<Props> = ({ styleName }) => {
  const [socialMedias, setSocialMedias] = useState([
    "github",
    "stackOverflow",
    "linkedIn",
    "facebook",
    "instagram",
    "twitter",
    "slack",
    "discord",
  ]);

  const getSocialIcon = (name: string, styleName: string) => {
    switch (name) {
      case "github": {
        return <GithubIcon styleName={styleName} />;
      }
      case "twitter": {
        return <TwitterIcon styleName={styleName} />;
      }
      case "facebook": {
        return <FacebookIcon styleName={styleName} />;
      }
      case "discord": {
        return <DiscordIcon styleName={styleName} />;
      }
      case "instagram": {
        return <InstagramIcon styleName={styleName} />;
      }
      case "linkedIn": {
        return <LinkedInIcon styleName={styleName} />;
      }
      case "slack": {
        return <SlackIcon styleName={styleName} />;
      }
      case "stackOverflow": {
        return <StackOverflowIcon styleName={styleName} />;
      }
    }
  };

  return (
    <div className={classNames.default("flex flex-row", styleName)}>
      {socialMedias.map((media) => (
        <button key={media} className="p-2 hover:bg-gray-300 rounded">
          {getSocialIcon(media, "w-6 h-6")}
        </button>
      ))}
    </div>
  );
};
