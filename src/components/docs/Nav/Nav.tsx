import { Dispatch, SetStateAction, useMemo } from "react";
import cn from "clsx";
import Image from "next/future/image";
import Link from "next/link";

import { Item } from "./Item";
import { NavConfig, NavbarItem } from "@/types/docs";
import { SubNav } from "./SubNav";

export type NavProps = {
  nav: NavConfig;
  setLeftSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Nav = ({ nav, setLeftSidebarIsOpen }: NavProps) => {
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

  return (
    <>
      <style jsx>
        {`
          .nav {
            min-height: var(--docs-nav-height);
          }
          .sub-nav {
            top: var(--docs-nav-height);
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
          "nav sticky top-0 z-10 mx-auto flex w-full flex-row border-b border-b-instillGrey30 bg-white py-4 px-8"
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
                  <h1 className="my-auto text-xl font-bold">{nav.title}</h1>
                ) : null}
              </a>
            </Link>
          </div>
        )}

        <div className="flex flex-1 flex-row">
          <div
            className={cn(
              "flex flex-row",
              items.left.length === 0 ? "flex-shrink" : "grow"
            )}
          >
            {items.left.map((item) => (
              <Item key={item.label} item={item} />
            ))}
          </div>
          <div
            className={cn(
              "flex flex-row justify-end gap-x-5",
              items.right.length === 0 ? "flex-shrink" : "grow"
            )}
          >
            {items.right.map((item) => (
              <Item key={item.label} item={item} />
            ))}
          </div>
        </div>
      </nav>
      <SubNav marginBottom="mb-5" setLeftSidebarIsOpen={setLeftSidebarIsOpen} />
    </>
  );
};
