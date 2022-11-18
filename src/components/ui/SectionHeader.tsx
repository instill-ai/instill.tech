import cn from "clsx";
import { ReactElement } from "react";

export type SectionHeaderProps = {
  header: string;
  headerTextColor: string;
  headerWidth: string;
  marginBottom?: string;
  subElement?: ReactElement;
};

export const SectionHeader = ({
  header,
  headerWidth,
  headerTextColor,
  subElement,
  marginBottom,
}: SectionHeaderProps) => {
  return (
    <div className={cn("flex w-full flex-col xl:flex-row", marginBottom)}>
      <h2
        className={cn(
          "font-mono text-3xl font-medium word-spacing-tighter xl:leading-[48px] xl:text-instill-h2",
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
