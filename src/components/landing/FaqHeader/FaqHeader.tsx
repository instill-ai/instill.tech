import cn from "clsx";
import { FaqText } from "./FaqText";

export type FaqHeaderProps = {
  marginBottom?: string;
};

export const FaqHeader = ({ marginBottom }: FaqHeaderProps) => {
  return (
    <div className={cn("relative w-full", marginBottom)}>
      <FaqText width="w-10/12 w-6/12" />
    </div>
  );
};
