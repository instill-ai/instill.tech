import cn from "clsx";

export type HeadlineProps = {
  marginBottom?: string;
};

export const Headline = ({ marginBottom }: HeadlineProps) => {
  return (
    <h1
      className={cn(
        "font-['IBM Plex Sans'] w-full text-center text-[32px] font-bold leading-9 text-semantic-fg-primary-on-bg-secondary xl:text-[74px] xl:leading-[78px]",
        marginBottom
      )}
    >
      The Backbone for All Your AI Needs
    </h1>
  );
};
