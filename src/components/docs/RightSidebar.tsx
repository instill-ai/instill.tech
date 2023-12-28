import {
  TableOfContent,
  TableOfContentProps,
  ContributeLinks,
  ContributeLinksProps,
} from "@/components/ui";
import * as React from "react";

export type RightSidebarProps = {
  headers: TableOfContentProps["headers"];
  githubEditUrl: ContributeLinksProps["githubEditUrl"];
  feedbackUrl: ContributeLinksProps["feedbackUrl"];
};

export const RightSidebar = ({
  headers,
  githubEditUrl,
  feedbackUrl,
}: RightSidebarProps) => {
  return (
    <React.Fragment>
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
          <ContributeLinks
            githubEditUrl={githubEditUrl}
            feedbackUrl={feedbackUrl}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
