import { Section } from "./Section";
import { Sidebar } from "@/types/docs";
import Link from "next/link";
import Image from "next/image";

export type LeftSidebarProps = {
  leftSidebar: Sidebar["leftSidebar"];
};

export const LeftSidebar = ({ leftSidebar }: LeftSidebarProps) => {
  return (
    <>
      <style>
        {`
        .leftsidebar-logo {
          min-height: var(--docs-left-sidebar-logo-height);
          margin-bottom: var(--docs-left-sidebar-logo-margin-bottom)
        }

        .left-sidebar {
          max-width: var(--docs-left-sidebar-max-width)
        }
      `}
      </style>
      <div className="left-sidebar flex h-screen w-full flex-col overflow-auto px-8 pb-10 md:sticky md:top-0 md:ml-auto">
        {leftSidebar.logo ? (
          <Link
            href="/docs/welcome"
            className="leftsidebar-logo hidden w-full gap-x-3 py-4 md:flex md:flex-row"
          >
            <Image
              src={leftSidebar.logo.src}
              alt={leftSidebar.logo.alt}
              width={leftSidebar.logo.width}
              height={leftSidebar.logo.height}
              sizes={`${leftSidebar.logo.width}px`}
              className="mr-auto"
            />
          </Link>
        ) : null}
        {leftSidebar.sections.map((section) => (
          <div key={section.text} className="w-full">
            <Section
              items={section.items}
              text={section.text}
              collapsible={section.collapsible}
              link={section.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};
