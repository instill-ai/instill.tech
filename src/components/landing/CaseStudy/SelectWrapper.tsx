import { ReactElement, ReactNode } from "react";
import cn from "clsx";

export type SelectWrapperProps = {
  children: ReactNode;
  isActive: boolean;
};

const SelectWrapper = ({ children, isActive }: SelectWrapperProps) => {
  return (
    <div className="relative">
      {children}
      <div
        className={cn(
          "absolute top-0 bottom-0 right-0 left-0 border-2",
          isActive ? "border-instillLightGreen" : "border-instillGrey20"
        )}
      />
    </div>
  );
};

export default SelectWrapper;
