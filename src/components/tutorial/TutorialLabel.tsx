import cn from "clsx";

import { ReactElement } from "react";

export type TutorialLabellProps = {
  label: string;
  labelTextStyle?: string;
  labelBgColor?: string;
  labelPadding?: string;
  icon?: ReactElement;
  position?: string;
  marginBottom?: string;
};

export const TutorialLabel = ({
  icon,
  label,
  position,
  marginBottom,
  labelTextStyle,
  labelBgColor,
  labelPadding,
}: TutorialLabellProps) => {
  return (
    <div
      className={cn(
        "flex flex-row",
        position,
        marginBottom,
        labelBgColor,
        labelPadding,
        icon ? "gap-x-[5px]" : ""
      )}
    >
      <div className="my-auto">{icon}</div>
      <p className={cn("inline-flex items-center", labelTextStyle)}>{label}</p>
    </div>
  );
};
