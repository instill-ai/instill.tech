import cn from "clsx";

import { ReactElement } from "react";

export type TutorialLabellProps = {
  labelTextStyle: string;
  labelBgColor: string;
  labelPadding: string;
  label: string;
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
        "flex flex-row gap-x-[5px]",
        position,
        marginBottom,
        labelBgColor,
        labelPadding
      )}
    >
      <div className="my-auto">{icon}</div>
      <p className={cn("inline-flex items-center", labelTextStyle)}>{label}</p>
    </div>
  );
};
