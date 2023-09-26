import cn from "clsx";

export type HeadlineProps = {
  marginBottom?: string;
};

export const Headline = ({ marginBottom }: HeadlineProps) => {
  return (
    <h1
      className={cn(
        "text-base-text+icon-primary-white web-desk-headings-h1 w-full text-center font-mono text-[32px] font-semibold uppercase word-spacing-tight xl:text-instill-h1 xl:word-spacing-super-tight",
        marginBottom
      )}
    >
      The Backbone for All Your AI Needs
    </h1>
  );
};
