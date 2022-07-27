import { useMemo } from "react";

import cn from "clsx";
import Section from "./Section";
import { Sidebar, SidebarSection } from "@/types/docs";
import { docsBaseStyles } from "@/style/docsBaseStyle";

export type LeftSidebarProps = {
  leftSidebar: Sidebar["leftSidebar"];
  currentPagePath: string;
};

const LeftSidebar = ({ leftSidebar, currentPagePath }: LeftSidebarProps) => {
  const sidebarSections = useMemo<SidebarSection[]>(() => {
    let sections: SidebarSection[] = [];

    leftSidebar.items.map((item, i) => {
      if (i === 0 && !item.header) {
        const pesudoSection = { text: "" };
        sections.push({
          ...pesudoSection,
          children: [],
          collapsible: true,
        });
      }

      if (item.header) {
        sections.push({
          ...item,
          children: [],
          collapsible: item.collapsible ?? false,
        });
      } else {
        sections[sections.length - 1].children.push(item);
      }
    });

    return sections;
  }, [leftSidebar.items]);

  return (
    <nav
      className={cn(
        "sticky ml-auto flex w-full max-w-[200px] flex-col",
        docsBaseStyles.sidebar.topOffset
      )}
      aria-labelledby="grid-right"
    >
      {sidebarSections.map((section) => (
        <div key={section.text} className="w-full">
          <Section
            items={section.children}
            text={section.text}
            collapsible={section.collapsible}
            currentPagePath={currentPagePath}
          />
        </div>
      ))}
    </nav>
  );
};

export default LeftSidebar;
