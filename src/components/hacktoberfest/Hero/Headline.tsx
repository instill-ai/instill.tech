import cn from "clsx";

export type HeadlineProps = {
  marginBottom?: string;
};

export const Headline = ({ marginBottom }: HeadlineProps) => {
  return (
    <h1
      className={cn(
        "font-['IBM Plex Sans'] w-full text-center text-[74px] font-bold leading-[78px] text-semantic-fg-primary-on-bg-secondary",
        marginBottom
      )}
    >
      The Backbone for All Your AI Needs
    </h1>
  );
};
