import cn from "clsx";

export type HorizontalLineProps = {
  marginBottom?: string;
  bgColor: string;
};

export const HorizontalLine = ({
  marginBottom,
  bgColor,
}: HorizontalLineProps) => {
  return <hr className={cn("h-px w-full border-0", marginBottom, bgColor)} />;
};
