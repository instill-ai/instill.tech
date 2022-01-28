import { FC, useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { BlogLink } from "../links/BlogLink";
import { GithubTextLink } from "../links/GithubTextLink";
import { LinkBase } from "../links/LinkBase";
import { InstillAiLogo } from "./InstillAiLogo";
import { CrossIcon } from "../icons/CrossIcon";
import { AboutPageLink } from "../links/AboutPageLink";
import { GetEarlyAccessButton } from "../buttons/GetEarlyAccessButton";

interface Props {}

export const NavBar: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full lg:absolute lg:top-0 lg:z-50">
      <div className="flex w-full max-w-[1440px] mx-auto">
        <div className="hidden lg:grid w-full lg:grid-cols-2 p-5 content-center">
          <LinkBase styleName="my-auto mr-auto" href="/">
            <InstillAiLogo type="ColourLogoWhiteType" width={159} />
          </LinkBase>

          <div className="flex flex-row gap-x-[60px] justify-end">
            <AboutPageLink />
            <BlogLink />
            <GithubTextLink />
            <GetEarlyAccessButton />
          </div>
        </div>
        <div className="flex flex-col w-full lg:hidden">
          <div className="flex flex-row w-full lg:mb-[60px] p-5">
            <LinkBase styleName="flex" href="/">
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
          <div className="relative w-full">
            {open && (
              <div className="absolute top-0 left-0 b w-full flex flex-col gap-y-10 z-50 bg-instillGray95">
                <AboutPageLink />
                <BlogLink />
                <GithubTextLink />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
