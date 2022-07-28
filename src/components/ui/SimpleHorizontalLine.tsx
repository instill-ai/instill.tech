import cn from "clsx";

export type SimpleHorizontalLineProps = {
  marginBottom?: string;
  borderColor: string;
};

const SimpleHorizontalLine = ({
  marginBottom,
  borderColor,
}: SimpleHorizontalLineProps) => {
  return (
    <div className={cn("block w-full border-b", marginBottom, borderColor)} />
  );
};

export default SimpleHorizontalLine;
