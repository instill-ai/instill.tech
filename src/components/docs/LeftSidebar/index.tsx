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
    <nav
      className={cn(
        "flex w-full ml-auto flex-col sticky top-0 py-10 h-screen overflow-auto px-5",
        maxWidth
      )}
      aria-labelledby="grid-right"
    >
      {leftSidebar.logo ? (
        <Link href="/docs">
          <a className="flex flex-row gap-x-3 mx-auto mb-10">
            <Image
              src={leftSidebar.logo.src}
              alt={leftSidebar.logo.alt}
              width={leftSidebar.logo.width}
              height={leftSidebar.logo.height}
              sizes={`${leftSidebar.logo.width}px`}
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
    </nav>
  );
};

export default LeftSidebar;
