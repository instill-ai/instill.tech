import cn from "clsx";
import FaqText from "./FaqText";

export type FaqHeaderProps = {
  marginBottom?: string;
};

const FaqHeader = ({ marginBottom }: FaqHeaderProps) => {
  return (
    <div className={cn("relative w-full", marginBottom)}>
      <FaqText width="sm:w-10/12 md:w-8/12 xl:w-6/12" />
      <div className="absolute top-0 left-0 right-0 h-12 bg-instillGrey90 xs:h-16" />
    </div>
  );
};

export default FaqHeader;
