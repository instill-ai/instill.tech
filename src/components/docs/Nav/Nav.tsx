import { Dispatch, SetStateAction, useMemo } from "react";

import Item from "./Item";
import cn from "clsx";
import { NavBar, NavbarItem } from "@/types/docs";
import Image from "next/future/image";
import Link from "next/link";
import SubNav from "./SubNav";

export type NavProps = {
  navbar: NavBar;
  setLeftSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Nav = ({ navbar, setLeftSidebarIsOpen }: NavProps) => {
  const items = useMemo(() => {
    let left: NavbarItem[] = [];
    let right: NavbarItem[] = [];

    navbar.items.forEach((item) => {
      if (item.position === "right") {
        right.push(item);
      } else {
        left.push(item);
      }
    });

    return { left, right };
  }, [navbar]);

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
          "nav sticky top-0 z-10 mx-auto flex flex-row w-full bg-white py-4 px-8 border-b border-b-instillGrey30"
        )}
      >
        {!navbar.logo && !navbar.title ? null : (
          <div className="logo mr-4 flex md:hidden">
            <Link href="/docs/start-here/getting-started">
              <a className="flex flex-row gap-x-3">
                {navbar.logo ? (
                  <Image
                    src={navbar.logo.src}
                    alt={navbar.logo.alt}
                    width={navbar.logo.width}
                    height={navbar.logo.height}
                    sizes={`${navbar.logo.width}px`}
                  />
                ) : null}
                {navbar.title ? (
                  <h1 className="my-auto text-xl font-bold">{navbar.title}</h1>
                ) : null}
              </a>
            </Link>
          </div>
        )}

        <div className="flex flex-row flex-1">
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

export default Nav;
