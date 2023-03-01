import {
  TableOfContent,
  TableOfContentProps,
  ContributeLinks,
  ContributeLinksProps,
} from "@/components/ui";

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
          {headers.length > 0 ? <TableOfContent headers={headers} /> : null}
          <ContributeLinks githubEditUrl={githubEditUrl} />
        </div>
      </div>
    </>
  );
};
