import cn from "clsx";

export type SubHeadlineProps = {
  marginBottom?: string;
};

export const SubHeadline = ({ marginBottom }: SubHeadlineProps) => {
  return (
    <div
      className={cn(
        "mb-10 text-left font-sans text-lg font-light text-instillGrey90",
        marginBottom
      )}
    >
      Instill Cloud empowers your team to spend less time building, debugging,
      deploying and managing infrastructure, and focus on your AI use cases.
    </div>
  );
};
