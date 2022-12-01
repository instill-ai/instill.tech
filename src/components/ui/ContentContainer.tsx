import cn from "clsx";
import { ReactNode } from "react";

export type ContentContainerProps = {
  contentMaxWidth: string;
  children?: ReactNode;
  margin: string;
};

export const ContentContainer = ({
  children,
  contentMaxWidth,
  margin,
}: ContentContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col px-4 xl:px-0",
        contentMaxWidth,
        margin
      )}
    >
      {children}
    </div>
  );
};
