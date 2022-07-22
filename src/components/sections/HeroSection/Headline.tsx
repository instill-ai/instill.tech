import { FC } from "react";
import cn from "clsx";

export type HeadlineProps = {
  marginBottom?: string;
};

const Headline: FC<HeadlineProps> = ({ marginBottom }) => {
  return (
    <h1
      className={cn(
        "instill-text-h1 text-left font-mono text-instillGrey05",
        marginBottom
      )}
    >
      Visual Data Preparation Made for All
    </h1>
  );
};

export default Headline;
