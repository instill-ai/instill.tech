import cn from "clsx";
import { MdxComponentPosition } from "@/lib/markdown";
import { ReactNode } from "react";

export type MdxComponentBaseProps = {
  position?: MdxComponentPosition;
  children?: ReactNode;
};

export const MdxComponentBase = ({
  position,
  children,
}: MdxComponentBaseProps) => {
  return (
    <div
      className={cn(
        "flex py-5",
        position === "left"
          ? "justify-start"
          : position === "right"
          ? "justify-end"
          : "justify-center"
      )}
    >
      {children}
    </div>
  );
};
