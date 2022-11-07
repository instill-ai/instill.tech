import cn from "clsx";

export type SubHeadlineProps = {
  marginBottom?: string;
};

const SubHeadline = ({ marginBottom }: SubHeadlineProps) => {
  return (
    <div
      className={cn(
        "text-left font-sans text-lg font-light text-instillGrey90",
        marginBottom
      )}
    >
      Meet VDP, the future for unstructured data ETL, where developers won’t
      need to build their own data connectors, high-mantenance model serving
      platform or ELT pipeline automation tool.
    </div>
  );
};

export default SubHeadline;
