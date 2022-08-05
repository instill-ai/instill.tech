import TableOfContent, { TableOfContentProps } from "./TableOfContent";

export type RightSidebarProps = {
  headers: TableOfContentProps["headers"];
};

const RightSidebar = ({ headers }: RightSidebarProps) => {
  return (
    <div className="sticky top-[148px] pr-4" aria-labelledby="grid-right">
      <div className="h-full overflow-auto">
        <TableOfContent headers={headers} />
      </div>
    </div>
  );
};

export default RightSidebar;
