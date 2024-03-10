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
      Empower your team with Instill Cloud to spend less time on Generative AI
      infrastructure and more on iterating your AI use cases.
    </div>
  );
};
