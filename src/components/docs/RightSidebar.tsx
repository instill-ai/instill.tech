import { docsBaseStyles } from "@/style/docsBaseStyle";
import { Sidebar } from "@/types/docs";
import cn from "clsx";

import TableOfContent from "./TableOfContent";

export type RightSidebarProps = {
  headers: any[];
  rightSidebar: Sidebar["rightSidebar"];
};

const RightSidebar = ({ headers, rightSidebar }: RightSidebarProps) => {
  return (
    <nav
      className={cn("sticky w-full", docsBaseStyles.sidebar.topOffset)}
      aria-labelledby="grid-right"
    >
      <div className="h-full overflow-auto">
        <TableOfContent
          headers={headers}
          headerMinDepth={rightSidebar.headerMinDepth}
          headerMaxDepth={rightSidebar.headerMaxDepth}
        />
      </div>
    </nav>
  );
};

export default RightSidebar;
