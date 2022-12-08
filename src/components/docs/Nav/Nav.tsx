import { Dispatch, SetStateAction, useMemo, useState } from "react";
import cn from "clsx";
import Image from "next/future/image";
import Link from "next/link";
import { DocSearch } from "@docsearch/react";

import { Item } from "./Item";
import { NavConfig, NavbarItem } from "@/types/docs";
import { SubNav } from "./SubNav";
import { CrossIcon, MenuIcon } from "@instill-ai/design-system";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export type NavProps = {
  nav: NavConfig;
  setLeftSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Nav = ({ nav, setLeftSidebarIsOpen }: NavProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const items = useMemo(() => {
    let left: NavbarItem[] = [];
    let right: NavbarItem[] = [];

    nav.items.forEach((item) => {
      if (item.position === "right") {
        right.push(item);
      } else {
        left.push(item);
      }
    });

    return { left, right };
  }, [nav]);

  const mobileView = useMemo(() => {
    return (
      <>
        <style jsx>
          {`
            .docs-mobile-nav-list {
              top: calc(var(--docs-nav-height) + var(--docs-sub-nav-height));
            }
          `}
        </style>
        <div className="flex md:hidden">
          <button
            className="my-auto flex h-[36px] w-[36px] rounded-[3px] bg-instillGrey05 hover:bg-instillGrey20"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {mobileNavOpen ? (
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
          {mobileNavOpen && (
            <div className="docs-mobile-nav-list fixed left-0 z-40 flex h-screen w-full flex-col gap-y-4 bg-white px-4 py-10">
              {items.left.map((item) => (
                <div key={item.key}>
                  <Item item={item} />
                </div>
              ))}
              {items.right.map((item) => (
                <div key={item.key}>
                  <Item item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }, [mobileNavOpen, items.left, items.right]);

  const desktopView = useMemo(() => {
    return (
      <>
        <div className="hidden flex-grow flex-row md:flex">
          <div
            className={cn(
              "flex flex-row",
              items.left.length === 0 ? "flex-shrink" : "grow"
            )}
          >
            {items.left.map((item) => (
              <Item key={item.key} item={item} />
            ))}
          </div>
          <div
            className={cn(
              "flex flex-row justify-end gap-x-5",
              items.right.length === 0 ? "flex-shrink" : "grow"
            )}
          >
            {items.right.map((item) => (
              <Item key={item.key} item={item} />
            ))}
          </div>
          <div className="my-auto ml-4">
            <ThemeToggle />
          </div>
        </div>
      </>
    );
  }, [items]);

  return (
    <>
      <style jsx>
        {`
          .nav {
            min-height: var(--docs-nav-height);
          }

          @media screen and (min-width: 768px) {
            .nav {
              margin-bottom: var(--docs-nav-margin-bottom);
            }
          }
        `}
      </style>
      <nav
        className={cn(
          "nav sticky top-0 z-10 mx-auto flex w-full flex-row border-b border-b-instillGrey30 bg-white py-4 px-8 dark:bg-instillGrey90"
        )}
      >
        {!nav.logo && !nav.title ? null : (
          <div className="logo mr-4 flex md:hidden">
            <Link href="/docs/start-here/getting-started">
              <a className="flex flex-row gap-x-3">
                {nav.logo ? (
                  <Image
                    src={nav.logo.src}
                    alt={nav.logo.alt}
                    width={nav.logo.width}
                    height={nav.logo.height}
                    sizes={`${nav.logo.width}px`}
                  />
                ) : null}
                {nav.title ? (
                  <h1 className="my-auto text-xl font-bold text-black dark:text-instillGrey05">
                    {nav.title}
                  </h1>
                ) : null}
              </a>
            </Link>
          </div>
        )}

        <div className="flex flex-1 flex-row">
          <div className="flex flex-grow flex-row justify-end xl:mr-5">
            <div className="mr-5">
              <DocSearch
                appId={process.env.NEXT_PUBLIC_ALGOLIA_DOCSEARCH_APP_ID || ""}
                apiKey={process.env.NEXT_PUBLIC_ALGOLIA_DOCSEARCH_APP_KEY || ""}
                indexName="instill"
              />
            </div>
            {desktopView}
            {mobileView}
          </div>
        </div>
      </nav>
      <SubNav marginBottom="mb-5" setLeftSidebarIsOpen={setLeftSidebarIsOpen} />
    </>
  );
};
