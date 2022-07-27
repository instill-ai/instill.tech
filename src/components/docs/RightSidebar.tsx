import { docsBaseStyles } from "@/style/docsBaseStyle";
import cn from "clsx";

import TableOfContent, { TableOfContentProps } from "./TableOfContent";

export type RightSidebarProps = {
  headers: TableOfContentProps["headers"];
};

const RightSidebar = ({ headers }: RightSidebarProps) => {
  return (
    <nav
      className={cn("sticky w-full", docsBaseStyles.sidebar.topOffset)}
      aria-labelledby="grid-right"
    >
      <div className="h-full overflow-auto">
        <TableOfContent headers={headers} />
      </div>
    </nav>
  );
};

export default RightSidebar;
