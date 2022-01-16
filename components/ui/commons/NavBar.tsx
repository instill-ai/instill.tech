import { FC, useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { BlogLink } from "../links/BlogLink";
import { GithubTextLink } from "../links/GithubTextLink";
import { LinkBase } from "../links/LinkBase";
import { InstillAiLogo } from "./InstillAiLogo";
import { CrossIcon } from "../icons/CrossIcon";

interface Props {}

export const NavBar: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full mb-[120px] md:mb-[320px]">
      <div className="hidden sm:grid w-full sm:grid-cols-2 px-5 md:px-10 py-5 content-center">
        <LinkBase href="/">
          <InstillAiLogo type="ColourLogoWhiteType" width={159} />
        </LinkBase>

        <div className="flex flex-row gap-x-[60px] justify-end">
          <BlogLink />
          <GithubTextLink />
        </div>
      </div>
      <div className="flex flex-col w-full p-5 sm:hidden">
        <div className="flex flex-row w-full mb-[60px]">
          <LinkBase href="/">
            <InstillAiLogo type="ColourLogoWhiteType" width={159} />
          </LinkBase>
          <button
            className="ml-auto rounded-[3px] hover:bg-instillGray30 hover:bg-opacity-10"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <CrossIcon styleName="w-10 text-instillGray05" />
            ) : (
              <MenuIcon styleName="w-10 text-instillGray05" />
            )}
          </button>
        </div>
        {open && (
          <div className="flex flex-col gap-y-10">
            <BlogLink />
            <GithubTextLink />
          </div>
        )}
      </div>
    </div>
  );
};
