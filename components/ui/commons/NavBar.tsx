import { FC, useEffect, useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { BlogLink } from "../links/BlogLink";
import { GithubTextLink } from "../links/GithubTextLink";
import { LinkBase } from "../links/LinkBase";
import { InstillAiLogo } from "./InstillAiLogo";
import { CrossIcon } from "../icons/CrossIcon";
import { AboutPageLink } from "../links/AboutPageLink";
import { GetEarlyAccessButton } from "../buttons/GetEarlyAccessButton";
import * as classNames from "classnames";
import { useRouter } from "next/router";
import { NewsletterArchivePageLink } from "../links/NewsletterArchivePageLink";
import { CareerPageLink } from "../links/CareerPageLink";

interface Props {}

export const NavBar: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    setOpen(false);
  }, [router]);

  const navbarLinkGroup = (
    <>
      <AboutPageLink />
      <BlogLink />
      <CareerPageLink hiring={true} />
      <NewsletterArchivePageLink />
      <GithubTextLink />
      <GetEarlyAccessButton />
    </>
  );

  return (
    <div className="flex w-full bg-instillGray95 lg:sticky lg:top-0 lg:z-50">
      <div className="mx-auto flex w-full max-w-[1440px]">
        <div className="hidden w-full content-center p-4 lg:flex lg:flex-row">
          <LinkBase styleName="my-auto mr-auto" href="/">
            <InstillAiLogo type="ColourLogoWhiteType" width={159} />
          </LinkBase>

          <div className="flex flex-row justify-end gap-x-[60px] lg:ml-auto">
            {navbarLinkGroup}
          </div>
        </div>
        <div
          className={classNames.default(
            "flex h-full w-full flex-col lg:hidden",
            open ? "fixed top-0 left-0 z-50 bg-instillGray95" : ""
          )}
        >
          <div className="flex w-full flex-row p-5 lg:mb-[60px]">
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
              <div className="absolute top-0 left-0 flex w-full flex-col gap-y-[50px] bg-instillGray95 py-[50px] px-4">
                {navbarLinkGroup}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
