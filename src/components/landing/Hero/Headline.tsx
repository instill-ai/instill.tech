import cn from "clsx";

export type HeadlineProps = {
  marginBottom?: string;
};

export const Headline = ({ marginBottom }: HeadlineProps) => {
  return (
    <h1
      className={cn(
        "font-['IBM Plex Mono'] text-[64px] font-semibold uppercase leading-[72px] text-gray-800",
        marginBottom
      )}
    >
      Open source based backbone for all your ai needs
    </h1>
  );
};
