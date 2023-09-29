import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "clsx";
import Link from "next/link";
import { Button, CrossIcon, Logo, MenuIcon } from "@instill-ai/design-system";
import { AnnouncementBar } from "@/components/ui";
import { useInstillAICtx } from "@/contexts/InstillAIContext";
import { GithubTextLink } from "./GithubTextLink";
import { DocsPageLink } from "./DocsPageLink";

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
    <AnnouncementBar className="bg-instill_green">
      <div className="flex flex-row gap-x-1">
        <p className="text-base text-instillGrey95">👉 Check out</p>
        <a
          className="text-base text-instillGrey95 underline hover:text-instillBlue50"
          target="_blank"
          rel="noreferrer noopener"
          href="https://hacktoberfest.com"
        >
          Instill Hacktoberfest 2023
        </a>
      </div>
    </AnnouncementBar>
  );

  const navbarLinkGroup = (
    <>
      <DocsPageLink />
      <GithubTextLink />
      <Button variant="primary" size="lg">
        Try Instill Cloud Free
      </Button>
    </>
  );

  const desktopView = (
    <>
      {enableAnnouncementBar && announcementBar}
      <div className="mx-auto flex w-full flex-row px-[30px] py-2.5">
        <Link href="/" className="my-auto mr-auto flex">
          <Logo variant="ColourLogomarkWhiteType" width={158} />
        </Link>

        <div className="flex flex-row justify-end gap-x-10 lg:ml-auto">
          {navbarLinkGroup}
        </div>
      </div>
    </>
  );

  const mobileView = (
    <>
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
    </>
  );

  return (
    <div
      id="navbar-test"
      className="flex w-full flex-col bg-instillGrey90 lg:sticky lg:top-0 lg:z-50"
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