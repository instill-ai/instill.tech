import { useMemo } from "react";

import cn from "clsx";
import Section from "./Section";
import { Sidebar } from "@/types/docs";
import { docsBaseStyles } from "@/style/docsBaseStyle";

export type LeftSidebarProps = {
  leftSidebar: Sidebar["leftSidebar"];
  currentPagePath: string;
};

const LeftSidebar = ({ leftSidebar, currentPagePath }: LeftSidebarProps) => {
  return (
    <nav
      className={cn(
        "sticky flex w-full flex-col",
        docsBaseStyles.sidebar.topOffset
      )}
      aria-labelledby="grid-right"
    >
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
