import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "clsx";
import Link from "next/link";
import {
  Button,
  CrossIcon,
  Icons,
  Logo,
  MenuIcon,
  Menubar,
  Separator,
} from "@instill-ai/design-system";
import { AnnouncementBar } from "@/components/ui";
import { useInstillAICtx } from "@/contexts/InstillAIContext";

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
      <div className="relative my-auto">
        <Link
          href="/pricing"
          className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary"
        >
          <p className="my-auto">Products</p>
          <Icons.ChevronDown className="my-auto h-4 w-4 stroke-semantic-fg-secondary" />
        </Link>
      </div>
      <div className="relative my-auto">
        <Link
          href="/pricing"
          className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary"
        >
          <p className="my-auto">For Business</p>
          <Icons.ChevronDown className="my-auto h-4 w-4 stroke-semantic-fg-secondary" />
        </Link>
      </div>
      <div className="relative my-auto">
        <Link
          href="/pricing"
          className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary"
        >
          <p className="my-auto">For Developers</p>
          <Icons.ChevronDown className="my-auto h-4 w-4 stroke-semantic-fg-secondary" />
        </Link>
      </div>
      <div className="relative my-auto">
        <Link
          href="/pricing"
          className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary"
        >
          <p className="my-auto">Company</p>
          <Icons.ChevronDown className="my-auto h-4 w-4 stroke-semantic-fg-secondary" />
        </Link>
      </div>
      <div className="relative my-auto">
        <Link
          href="/pricing"
          className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary"
        >
          <p className="my-auto">Pricing</p>
        </Link>
      </div>

      <div className="relative my-auto ml-3">
        <Button
          variant="primary"
          size="lg"
          onClick={() =>
            router.push("https://instill.tech", undefined, { scroll: false })
          }
        >
          Sign Up
        </Button>
      </div>
    </React.Fragment>
  );

  const desktopView = (
    <React.Fragment>
      {enableAnnouncementBar && announcementBar}
      <div className="mx-auto flex w-full flex-row px-[30px]">
        <Menubar.Root className="w-full !rounded-none border-0 bg-transparent bg-opacity-80 !shadow-none backdrop-blur-md">
          <Menubar.Menu>
            <Link href="/" className="my-auto mr-auto flex">
              <Logo variant="ColourLogomarkBlackType" width={158} />
            </Link>
          </Menubar.Menu>
          <div className="flex w-full flex-row justify-end gap-x-4">
            <Menubar.Menu>
              <Menubar.Trigger>
                <div className="relative my-auto">
                  <div className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary">
                    <p className="my-auto">Products</p>
                    <Icons.ChevronDown className="my-auto h-4 w-4 stroke-semantic-fg-secondary" />
                  </div>
                </div>
              </Menubar.Trigger>
              <Menubar.Content className="!rounded-sm" align="center">
                <div className="flex h-[346px] w-[608px] flex-row">
                  <div className="w-1/2 py-8 pl-8 pr-4">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase text-[#97A3B7]">
                      Meet Instill
                    </p>
                    <p className="font-sans text-[16px] font-semibold text-[#111B29]">
                      How it works
                    </p>
                  </div>
                  <div className="py-3">
                    <Separator orientation="vertical" className="mx-1" />
                  </div>
                  <div className="w-1/2 py-8 pl-4 pr-8">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase text-[#97A3B7]">
                      Explore
                    </p>
                    <p className="mb-5 font-sans text-[16px] font-semibold text-[#111B29]">
                      Instill Hub
                    </p>
                    <p className="mb-0 font-sans text-[16px] font-semibold text-[#111B29]">
                      Pipeline Components
                    </p>
                    <p className="font-sans text-[14px] font-medium text-[#00000080]">
                      Check the latest pipeline components
                    </p>
                  </div>
                </div>
              </Menubar.Content>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>
                <div className="relative my-auto">
                  <div className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary">
                    <p className="my-auto">For Business</p>
                    <Icons.ChevronDown className="my-auto h-4 w-4 stroke-semantic-fg-secondary" />
                  </div>
                </div>
              </Menubar.Trigger>
              <Menubar.Content className="!rounded-sm" align="center">
                <div className="flex h-[346px] w-[608px] flex-row">
                  <div className="w-1/2 py-8 pl-8 pr-4">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase text-[#97A3B7]">
                      Resources
                    </p>
                    <p className="mb-4 font-sans text-[16px] font-semibold text-[#111B29]">
                      Why Instill?
                    </p>
                    <p className="font-sans text-[16px] font-semibold text-[#111B29]">
                      Deployment Options
                    </p>
                  </div>
                  <div className="py-3">
                    <Separator orientation="vertical" className="mx-1" />
                  </div>
                  <div className="w-1/2 py-8 pl-4 pr-8">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase text-[#97A3B7]">
                      Explore
                    </p>
                    <p className="mb-5 font-sans text-[16px] font-semibold text-[#111B29]">
                      Instill Hub
                    </p>
                    <p className="mb-0 font-sans text-[16px] font-semibold text-[#111B29]">
                      Pipeline Components
                    </p>
                    <p className="font-sans text-[14px] font-medium text-[#00000080]">
                      Check the latest pipeline components
                    </p>
                  </div>
                </div>
              </Menubar.Content>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>
                <div className="relative my-auto">
                  <div className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary">
                    <p className="my-auto">For Developers</p>
                    <Icons.ChevronDown className="my-auto h-4 w-4 stroke-semantic-fg-secondary" />
                  </div>
                </div>
              </Menubar.Trigger>
              <Menubar.Content className="!rounded-sm" align="center">
                <div className="flex h-[346px] w-[608px] flex-row">
                  <div className="w-1/2 py-8 pl-8 pr-4">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase text-[#97A3B7]">
                      Resources
                    </p>
                    <p className="mb-4 font-sans text-[16px] font-semibold text-[#111B29]">
                      Documentation
                    </p>
                    <p className="mb-4 font-sans text-[16px] font-semibold text-[#111B29]">
                      Changelog
                    </p>
                    <p className="mb-4 font-sans text-[16px] font-semibold text-[#111B29]">
                      Tutorials
                    </p>
                    <p className="mb-4 font-sans text-[16px] font-semibold text-[#111B29]">
                      API Reference
                    </p>
                  </div>
                  <div className="py-3">
                    <Separator orientation="vertical" className="mx-1" />
                  </div>
                  <div className="w-1/2 py-8 pl-4 pr-8">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase text-[#97A3B7]">
                      Community
                    </p>
                    <p className="mb-5 font-sans text-[16px] font-semibold text-[#111B29]">
                      Open Source
                    </p>
                    <p className="mb-0 font-sans text-[16px] font-semibold text-[#111B29]">
                      Discord
                    </p>
                    <p className="font-sans text-[14px] font-medium text-[#00000080]">
                      Join our community
                    </p>
                  </div>
                </div>
              </Menubar.Content>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>
                <div className="relative my-auto">
                  <div className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary">
                    <p className="my-auto">Company</p>
                    <Icons.ChevronDown className="my-auto h-4 w-4 stroke-semantic-fg-secondary" />
                  </div>
                </div>
              </Menubar.Trigger>
              <Menubar.Content className="!rounded-sm" align="center">
                <div className="flex h-[346px] w-[256px] flex-row">
                  <div className="w-1/2 py-8 pl-8 pr-4">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase text-[#97A3B7]">
                      Company
                    </p>
                    <p className="mb-4 font-sans text-[16px] font-semibold text-[#111B29]">
                      About
                    </p>
                    <p className="mb-4 font-sans text-[16px] font-semibold text-[#111B29]">
                      Career
                    </p>
                    <p className="mb-4 font-sans text-[16px] font-semibold text-[#111B29]">
                      Blog
                    </p>
                  </div>
                </div>
              </Menubar.Content>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>
                <div className="relative my-auto">
                  <Link
                    href="/pricing"
                    className="flex gap-x-2 text-[16px] font-semibold text-semantic-fg-secondary"
                  >
                    <p className="my-auto">Pricing</p>
                  </Link>
                </div>
              </Menubar.Trigger>
              <Menubar.Content className="!rounded-sm">
                <div className="flex h-[346px] w-[608px] flex-row">
                  <div className="w-1/2 py-8 pl-8 pr-4">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase text-[#97A3B7]">
                      Meet Instill
                    </p>
                    <p className="font-sans text-[16px] font-semibold text-[#111B29]">
                      How it works
                    </p>
                  </div>
                  <div className="py-3">
                    <Separator orientation="vertical" className="mx-1" />
                  </div>
                  <div className="w-1/2 py-8 pl-4 pr-8">
                    <p className="mb-4 font-sans text-[12px] font-semibold uppercase text-[#97A3B7]">
                      Explore
                    </p>
                    <p className="mb-5 font-sans text-[16px] font-semibold text-[#111B29]">
                      Instill Hub
                    </p>
                    <p className="mb-0 font-sans text-[16px] font-semibold text-[#111B29]">
                      Pipeline Components
                    </p>
                    <p className="font-sans text-[14px] font-medium text-[#00000080]">
                      Check the latest pipeline components
                    </p>
                  </div>
                </div>
              </Menubar.Content>
            </Menubar.Menu>
          </div>
        </Menubar.Root>
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
          <div className="absolute left-0 top-0 flex w-full flex-col gap-y-[50px] bg-[#F7F6F8] px-4 py-[50px]">
            {navbarLinkGroup}
          </div>
        )}
      </div>
    </React.Fragment>
  );

  return (
    <div
      id="navbar-test"
      className="flex w-full flex-col bg-transparent bg-opacity-80 backdrop-blur-md lg:sticky lg:top-4 lg:z-50"
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
