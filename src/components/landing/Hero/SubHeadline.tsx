import cn from "clsx";

export type SubHeadlineProps = {
  marginBottom?: string;
};

export const SubHeadline = ({ marginBottom }: SubHeadlineProps) => {
  return (
    <div
      className={cn(
        "text-left font-sans text-lg font-light text-instillGrey90",
        marginBottom
      )}
    >
      Meet Versatile Data Pipeline (VDP), the future for unstructured data ETL,
      where developers won’t need to build their own data connectors,
      high-maintenance model serving platform or ELT pipeline automation tool.
    </div>
  );
};
