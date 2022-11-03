import { ContributeLinks, ContributeLinksProps } from "./ContributeLinks";
import { TableOfContent, TableOfContentProps } from "./TableOfContent";

export type RightSidebarProps = {
  headers: TableOfContentProps["headers"];
  githubEditUrl: ContributeLinksProps["githubEditUrl"];
};

export const RightSidebar = ({ headers, githubEditUrl }: RightSidebarProps) => {
  return (
    <>
      <style jsx>
        {`
          .right-sidebar {
            max-width: var(--docs-right-sidebar-max-width);
            top: calc(var(--docs-nav-height) + var(--docs-nav-margin-bottom));
          }
        `}
      </style>
      <div className="right-sidebar sticky w-full pr-4">
        <div className="flex h-full flex-col overflow-auto">
          <TableOfContent headers={headers} />
          <ContributeLinks githubEditUrl={githubEditUrl} />
        </div>
      </div>
    </>
  );
};
