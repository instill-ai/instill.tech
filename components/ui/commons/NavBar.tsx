import { FC } from "react";
import { GetEarlyAccessButton } from "../buttons/GetEarlyAccessButton";
import { BlogLink } from "../links/BlogLink";
import { DiscordLink } from "../links/DiscordLink";
import { GithubLink } from "../links/GithubLink";
import { InstillAiLogo } from "./InstillAiLogo";

interface Props {}

export const NavBar: FC<Props> = () => {
  return (
    <div className="flex w-full mb-[160px]">
      <div className="w-full grid grid-cols-2 px-5 md:px-10 py-5 content-center">
        <InstillAiLogo type="fullWhite" width={159} />
        <div className="flex flex-row justify-end gap-x-[60px]">
          <BlogLink href="https://blog.instill.tech" />
          <GithubLink
            styleName="w-5 text-instillGray05"
            href="https://github.com/instill-ai"
          />
        </div>
      </div>
    </div>
  );
};
