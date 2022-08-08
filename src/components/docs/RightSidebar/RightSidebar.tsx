import ContributeLinks, { ContributeLinksProps } from "./ContributeLinks";
import TableOfContent, { TableOfContentProps } from "./TableOfContent";

export type RightSidebarProps = {
  headers: TableOfContentProps["headers"];
  githubEditUrl: ContributeLinksProps["githubEditUrl"];
};

const RightSidebar = ({ headers, githubEditUrl }: RightSidebarProps) => {
  return (
    <div
      className="w-full sticky top-[148px] pr-4"
      aria-labelledby="grid-right"
    >
      <div className="flex flex-col h-full overflow-auto">
        <TableOfContent headers={headers} />
        <ContributeLinks githubEditUrl={githubEditUrl} />
      </div>
    </div>
  );
};

export default RightSidebar;
