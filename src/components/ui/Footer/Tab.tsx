import Link from "next/link";
import cn from "clsx";
import { ReactNode } from "react";

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
};

export const Tab = ({ header, links, type }: TabProps) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="uppercase font-semibold text-lg text-instillGrey05">
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
                className="flex m-auto"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-3">
          {links.map((link) => {
            const linkStyle = "font-normal text-lg text-instillGrey05";

            return link.href.startsWith("/") ? (
              <Link href={link.href}>
                <a className={cn("flex", linkStyle)}>{link.text}</a>
              </Link>
            ) : (
              <a
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