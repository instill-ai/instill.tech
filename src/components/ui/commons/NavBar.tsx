import { FC, useEffect, useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { BlogLink } from "../links/BlogLink";
import { GithubTextLink } from "../links/GithubTextLink";
import { LinkBase } from "../links/LinkBase";
import { CrossIcon } from "../icons/CrossIcon";
import { AboutPageLink } from "../links/AboutPageLink";
import * as classNames from "classnames";
import { useRouter } from "next/router";
import { NewsletterArchivePageLink } from "../links/NewsletterArchivePageLink";
import { CareerPageLink } from "../links/CareerPageLink";
import { AnnouncementBar } from "./AnnouncementBar";
import { useAnnouncementBarCtx } from "../../../contexts/AnnouncementBarContext";
import { sendAmplitudeData } from "../../../lib/amplitude";
import { Logo } from "@instill-ai/design-system";
import { GetEarlyAccessButton } from "../buttons";

interface Props {}

export const NavBar: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { enableAnnouncementBar } = useAnnouncementBarCtx();

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
    <div
      id="navbar-test"
      className="flex w-full flex-col bg-instillGrey95 lg:sticky lg:top-0 lg:z-50"
    >
      {enableAnnouncementBar && (
        <AnnouncementBar>
          <p className="text-instillGrey95">
            Got five minutes? Participate our Data + Vision AI survey
            2022.&nbsp;
            <a
              onClick={() => {
                sendAmplitudeData("to_survey2022", {
                  type: "navigation",
                });
              }}
              className="mr-1.5 underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://dkuwzh3w0h3.typeform.com/to/wQcfIXal?utm_source=product_website&utm_medium=banner&utm_campaign=survey2022"
            >
              Learn more
            </a>
          </p>
        </AnnouncementBar>
      )}
      <div className="mx-auto flex w-full max-w-[1440px]">
        <div className="hidden w-full content-center p-2 lg:flex lg:flex-row">
          <LinkBase styleName="my-auto mr-auto" href="/">
            <Logo type="ColourLogomarkWhiteType" width={159} />
          </LinkBase>

          <div className="flex flex-row justify-end gap-x-[60px] lg:ml-auto">
            {navbarLinkGroup}
          </div>
        </div>
        <div
          className={classNames.default(
            "flex h-full w-full flex-col lg:hidden",
            open ? "fixed top-0 left-0 z-50 bg-instillGrey95" : ""
          )}
        >
          <div className="flex w-full flex-row p-4 lg:mb-[60px]">
            <LinkBase styleName="flex" href="/">
              <Logo type="ColourLogomarkWhiteType" width={159} />
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
              <div className="absolute top-0 left-0 flex w-full flex-col gap-y-[50px] bg-instillGrey95 py-[50px] px-4">
                {navbarLinkGroup}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
