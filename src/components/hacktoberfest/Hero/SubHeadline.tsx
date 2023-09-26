import cn from "clsx";

export type SubHeadlineProps = {
  marginBottom?: string;
};

export const SubHeadline = ({ marginBottom }: SubHeadlineProps) => {
  return (
    <div
      className={cn(
        "text-center font-sans text-lg font-light text-instillGrey90",
        marginBottom
      )}
    >
      Meet Instill Cloud, a no-code/low-code platform to build AI workflows for
      unstructured data 10x faster.
    </div>
  );
};
