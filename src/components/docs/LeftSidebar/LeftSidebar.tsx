import cn from "clsx";
import Section from "./Section";
import { Sidebar } from "@/types/docs";
import Link from "next/link";
import Image from "next/future/image";

export type LeftSidebarProps = {
  leftSidebar: Sidebar["leftSidebar"];
  currentPagePath: string;
  maxWidth: string;
};

const LeftSidebar = ({
  leftSidebar,
  currentPagePath,
  maxWidth,
}: LeftSidebarProps) => {
  return (
    <div
      className={cn(
        "flex w-full md:ml-auto flex-col md:sticky md:top-0 pb-10 h-screen overflow-auto px-5",
        maxWidth
      )}
    >
      {leftSidebar.logo ? (
        <Link href="/docs/start-here/getting-started">
          <a className="hidden w-full md:flex-row gap-x-3 my-auto md:flex py-4 min-h-[100px] mb-4">
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
  );
};

export default LeftSidebar;
