import { ReactNode } from "react";
import Link from "next/link";
import cn from "clsx";

export type TabProps = {
  header: string;
  links: TabLink[];
  type: "social" | "others";
};

export type TabLink = {
  icon?: ReactNode;
  text?: string;
  href: string;
};

export type TabLinks = {
  socialLinks: TabLink[];
  products: TabLink[];
  resources: TabLink[];
  company: TabLink[];
  support: TabLink[];
};

export const Tab = ({ header, links, type }: TabProps) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="text-lg font-semibold uppercase text-instillGrey05">
        {header}
      </div>
      {type === "social" ? (
        <div className="flex">
          <div className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="m-auto flex"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-3">
          {links.map((link) => {
            const linkStyle =
              "font-normal text-base text-instillGrey30 hover:text-instillGrey05";

            return link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className={cn("flex", linkStyle)}
              >
                {link.text}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("flex", linkStyle)}
              >
                {link.text}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
