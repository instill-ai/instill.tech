import cn from "clsx";

export type HeadlineProps = {
  marginBottom?: string;
};

export const Headline = ({ marginBottom }: HeadlineProps) => {
  return (
    <h1
      className={cn(
        "instill-text-h1 text-left font-mono text-instillNeonBlue",
        marginBottom
      )}
    >
      Open-source Visual Data ETL Infrastructure
    </h1>
  );
};
