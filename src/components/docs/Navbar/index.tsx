import { useMemo } from "react";

import Item from "./Item";
import cn from "clsx";
import { NavBar, NavbarItem } from "@/types/docs";
import Image from "next/future/image";
import Link from "next/link";

export type NavbarProps = {
  navbar: NavBar;
  marginBottom: string;
};

const Navbar = ({ navbar, marginBottom }: NavbarProps) => {
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
    <nav
      className={cn(
        "sticky top-0 z-10 mx-auto flex flex-col w-full bg-white py-4 pr-10 h-[132px]",
        marginBottom
      )}
      title="Top Navigation"
    >
      {!navbar.logo && !navbar.title ? null : (
        <div className="logo mr-4 flex">
          <Link href="/docs">
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

      <div className="grid flex-1 grid-cols-2">
        <div className="flex w-full flex-row">
          {items.left.map((item) => (
            <Item key={item.label} item={item} />
          ))}
        </div>
        <div className="flex w-full flex-row justify-end gap-x-5">
          {items.right.map((item) => (
            <Item key={item.label} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
