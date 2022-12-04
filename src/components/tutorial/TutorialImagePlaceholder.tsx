import cn from "clsx";
import { useMemo } from "react";

export type TutorialImagePlaceholderProps = {
  width: string;
  height: string;
  color: string;
};

export const TutorialImagePlaceholder = ({
  width,
  height,
  color,
}: TutorialImagePlaceholderProps) => {
  return <div className={cn("block", width, height, color)} />;
};
