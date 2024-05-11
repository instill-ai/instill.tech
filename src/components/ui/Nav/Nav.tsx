import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "clsx";
import Link from "next/link";
import {
  CrossIcon,
  Logo,
  MenuIcon,
  SolidButton,
} from "@instill-ai/design-system";
import { AnnouncementBar } from "@/components/ui";
import { useInstillAICtx } from "@/contexts/InstillAIContext";
import { GithubTextLink } from "./GithubTextLink";
import { DocsPageLink } from "./DocsPageLink";
import { BlogPageLink } from "./BlogPageLink";
import { AboutPageLink } from "./AboutPageLink";
import { ChangelogLink } from "./ChangelogLink";
import { LoginPageLink } from "./LoginPageLink";
import { HubPageLink } from "./HubPageLink";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { enableAnnouncementBar } = useInstillAICtx();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    setOpen(false);
  }, [router]);

  const announcementBar = (
    <AnnouncementBar>
      <div className="flex flex-row gap-x-1">
        <p className="text-base text-instillGrey95">
          🚀 Build unstructured data pipelines 10x faster with
        </p>
        <a
          className="text-base text-instillGrey95 underline hover:text-instillBlue50"
          target="_blank"
          rel="noreferrer noopener"
          href="https://instill.tech"
        >
          Instill Cloud
        </a>
      </div>
    </AnnouncementBar>
  );

  const navbarLinkGroup = (
    <React.Fragment>
      <HubPageLink />
      <AboutPageLink />
      <BlogPageLink />
      <ChangelogLink />
      <DocsPageLink />
      <GithubTextLink />
      <LoginPageLink />

      <div className="relative my-auto">
        <SolidButton
          type="button"
          color={"primary"}
          padding="px-[17px] py-[7px] transition duration-700 ease-in-out xl:hover-animation"
          itemGapX="gap-x-5"
          onClickHandler={() =>
            router.push("https://instill.tech", undefined, { scroll: false })
          }
        >
          <p className={cn("z-10 text-[16px] font-normal leading-7")}>
            Sign Up
          </p>
        </SolidButton>
      </div>
    </React.Fragment>
  );

  const desktopView = (
    <React.Fragment>
      {enableAnnouncementBar && announcementBar}
      <div className="mx-auto flex w-full flex-row px-[30px] py-2.5">
        <Link href="/" className="my-auto mr-auto flex">
          <Logo variant="ColourLogomarkBlackType" width={158} />
        </Link>

        <div className="flex flex-row justify-end gap-x-[60px] lg:ml-auto">
          {navbarLinkGroup}
        </div>
      </div>
    </React.Fragment>
  );

  const mobileView = (
    <React.Fragment>
      {enableAnnouncementBar && announcementBar}
      <div className="flex w-full flex-row p-4 lg:mb-[60px]">
        <Link href="/" className="flex">
          <Logo variant="ColourLogomarkBlackType" width={159} />
        </Link>
        <button
          className="ml-auto flex h-[30px] w-[30px] rounded-[3px] hover:bg-instillGrey30 hover:bg-opacity-10"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <CrossIcon
              width="w-6"
              height="h-6"
              color="fill-instillGrey90"
              position="m-auto"
            />
          ) : (
            <MenuIcon
              width="w-6"
              height="h-6"
              color="fill-instillGrey90"
              position="m-auto"
            />
          )}
        </button>
      </div>
      <div className="relative w-full">
        {open && (
          <div className="absolute left-0 top-0 flex w-full flex-col gap-y-[50px] bg-white px-4 py-[50px]">
            {navbarLinkGroup}
          </div>
        )}
      </div>
    </React.Fragment>
  );

  return (
    <div
      id="navbar-test"
      className="sticky z-50 flex w-full flex-col bg-white bg-opacity-80 backdrop-blur-sm lg:top-0"
    >
      <div className="flex w-full flex-col">
        <div className="hidden w-full lg:flex lg:flex-col">{desktopView}</div>
        <div
          className={cn(
            "flex h-full w-full flex-col lg:hidden",
            open ? "fixed left-0 top-0 z-50 bg-white" : ""
          )}
        >
          {mobileView}
        </div>
      </div>
    </div>
  );
};
