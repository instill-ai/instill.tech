import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "clsx";
import Link from "next/link";
import { CrossIcon, Logo, MenuIcon } from "@instill-ai/design-system";

import { AnnouncementBar, CommonCtaButton } from "@/components/ui";
import { useAnnouncementBarCtx } from "@/contexts/AnnouncementBarContext";
import { GithubTextLink } from "./GithubTextLink";
import { DocsPageLink } from "./DocsPageLink";
import { GetAccessButton } from "./GetAccessButton";
import { CareerPageLink } from "./CareerPageLink";
import { TutorialPageLink } from "./TutorialPageLink";

export const Nav = () => {
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
      <DocsPageLink />
      <TutorialPageLink />
      <CareerPageLink hiring={true} />
      <GithubTextLink />
      <GetAccessButton />
    </>
  );

  const desktopView = (
    <>
      {enableAnnouncementBar && (
        <AnnouncementBar>
          <div className="flex flex-row gap-x-1">
            <p className="text-base text-instillGrey95">
              🚀 We&apos;re growing! Check out our
            </p>
            <a
              className="mr-1.5 italic underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instill.tech/career?utm_source=product&utm_medium=banner"
            >
              open roles
            </a>
          </div>
        </AnnouncementBar>
      )}
      <div className="mx-auto flex w-full max-w-[1440px] flex-row py-5 px-[30px]">
        <Link href="/">
          <a className="my-auto mr-auto flex">
            <Logo type="ColourLogomarkBlackType" width={158} />
          </a>
        </Link>

        <div className="flex flex-row justify-end gap-x-[60px] lg:ml-auto">
          {navbarLinkGroup}
        </div>
      </div>
    </>
  );

  const mobileView = (
    <>
      {enableAnnouncementBar && (
        <AnnouncementBar>
          <p className="text-instillGrey95">
            Check out our new article &nbsp;
            <a
              className="mr-1.5 italic underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://blog.instill.tech/introducing-vdp/?utm_source=product&utm_medium=banner"
            >
              Introducing VDP: open-source visual data ETL
            </a>
          </p>
        </AnnouncementBar>
      )}
      <div className="flex w-full flex-row p-4 lg:mb-[60px]">
        <Link href="/">
          <a className="flex">
            <Logo type="ColourLogomarkBlackType" width={159} />
          </a>
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
          <div className="absolute top-0 left-0 flex w-full flex-col gap-y-[50px] bg-white py-[50px] px-4">
            {navbarLinkGroup}
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      id="navbar-test"
      className="flex w-full flex-col bg-white lg:sticky lg:top-0 lg:z-50"
    >
      <div className="flex w-full flex-col">
        <div className="hidden w-full lg:flex lg:flex-col">{desktopView}</div>
        <div
          className={cn(
            "flex h-full w-full flex-col lg:hidden",
            open ? "fixed top-0 left-0 z-50 bg-white" : ""
          )}
        >
          {mobileView}
        </div>
      </div>
    </div>
  );
};
