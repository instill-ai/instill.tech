import cn from "clsx";
import { ReactElement } from "react";

export type SectionHeaderProps = {
  header: string;
  headerFontSize?: string;
  headerTextColor: string;
  headerWidth: string;
  marginBottom?: string;
  subElement?: ReactElement;
};

export const SectionHeader = ({
  header,
  headerWidth,
  headerFontSize,
  headerTextColor,
  subElement,
  marginBottom,
}: SectionHeaderProps) => {
  return (
    <div className={cn("flex w-full flex-col xl:flex-row", marginBottom)}>
      <h2
        className={cn(
          "leading-15 font-sans text-[56px] font-bold",
          headerFontSize ? headerFontSize : "text-3xl leading-[64px]",
          headerWidth,
          headerTextColor,
          subElement ? "mb-4 xl:mb-0" : ""
        )}
      >
        {header}
      </h2>
      <div className="flex flex-1">{subElement}</div>
    </div>
  );
};
