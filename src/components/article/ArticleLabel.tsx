import cn from "clsx";

import { ReactElement } from "react";

export type ArticleLabellProps = {
  label: string;
  labelTextStyle?: string;
  labelBgColor?: string;
  labelPadding?: string;
  icon?: ReactElement;
  position?: string;
  marginBottom?: string;
};

export const ArticleLabel = ({
  icon,
  label,
  position,
  marginBottom,
  labelTextStyle,
  labelBgColor,
  labelPadding,
}: ArticleLabellProps) => {
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
