import cn from "clsx";

export type HeadlineProps = {
  marginBottom?: string;
};

export const Headline = ({ marginBottom }: HeadlineProps) => {
  return (
    <h1
      className={cn(
        "w-full text-left font-mono text-[32px] font-semibold uppercase text-instillNeonBlue xl:text-instill-h1",
        marginBottom
      )}
    >
      Open-source Visual Data ETL Infrastructure
    </h1>
  );
};
