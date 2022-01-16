import { FC } from "react";
import { BlogLink } from "../links/BlogLink";
import { GithubTextLink } from "../links/GithubTextLink";
import { LinkBase } from "../links/LinkBase";
import { InstillAiLogo } from "./InstillAiLogo";

interface Props {}

export const NavBar: FC<Props> = () => {
  return (
    <div className="flex w-full mb-[160px]">
      <div className="w-full grid grid-cols-2 px-5 md:px-10 py-5 content-center">
        <LinkBase href="/">
          <InstillAiLogo type="fullWhite" width={159} />
        </LinkBase>

        <div className="flex flex-row justify-end gap-x-[60px]">
          <BlogLink href="https://blog.instill.tech" />
          <GithubTextLink styleName="w-5 text-instillGray05" />
        </div>
      </div>
    </div>
  );
};
