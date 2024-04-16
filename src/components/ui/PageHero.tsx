import cn from "clsx";
import { ReactNode } from "react";

export type PageHeroProps = {
  headline: string;
  headerUppercase: boolean;
  marginBottom?: string;
  subHeadline?: ReactNode;
  ctaButton?: ReactNode;
  width?: string;
  position?: string;
  headerColor?: string;
  gapY?: string;
  headerFontFamily?: string;
};

export const PageHero = ({
  marginBottom,
  headline,
  subHeadline,
  ctaButton,
  width,
  position,
  headerColor,
  headerUppercase,
  gapY,
  headerFontFamily,
}: PageHeroProps) => {
  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "flex flex-col",
          marginBottom,
          width ? width : "w-full xl:w-8/12",
          position ? position : "mx-auto",
          gapY ? gapY : "gap-y-2.5"
        )}
      >
        <h1
          className={cn(
            "w-full text-center text-[24px] font-semibold leading-[28px]",
            headerColor ? headerColor : "text-instillSkyBlue",
            headerUppercase ? "uppercase" : "",
            headerFontFamily ? headerFontFamily : "font-sans"
          )}
        >
          {headline}
        </h1>
        <div className="text-center font-sans text-[16px] text-lg font-light text-instillGrey70">
          {subHeadline}
        </div>
        {ctaButton}
      </div>
    </div>
  );
};
