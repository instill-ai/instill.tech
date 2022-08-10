import Section from "./Section";
import { Sidebar } from "@/types/docs";
import Link from "next/link";
import Image from "next/future/image";

export type LeftSidebarProps = {
  leftSidebar: Sidebar["leftSidebar"];
  currentPagePath: string;
};

const LeftSidebar = ({ leftSidebar, currentPagePath }: LeftSidebarProps) => {
  return (
    <>
      <style>{`
        .leftsidebar-logo {
          min-height: var(--docs-left-sidebar-logo-height);
          margin-bottom: var(--docs-left-sidebar-logo-margin-bottom)
        }

        .left-sidebar {
          max-width: var(--docs-left-sidebar-max-width)
        }
      `}
      </style>
      <div className="left-sidebar flex w-full md:ml-auto flex-col md:sticky md:top-0 pb-10 h-screen overflow-auto px-5">
        {leftSidebar.logo ? (
          <Link href="/docs/start-here/getting-started">
            <a className="leftsidebar-logo hidden w-full md:flex-row gap-x-3 my-auto md:flex py-4">
              <Image
                src={leftSidebar.logo.src}
                alt={leftSidebar.logo.alt}
                width={leftSidebar.logo.width}
                height={leftSidebar.logo.height}
                sizes={`${leftSidebar.logo.width}px`}
                className="mr-auto"
              />
            </a>
          </Link>
        ) : null}
        {leftSidebar.sections.map((section) => (
          <div key={section.text} className="w-full">
            <Section
              items={section.items}
              text={section.text}
              collapsible={section.collapsible}
              currentPagePath={currentPagePath}
              link={section.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftSidebar;
