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
    <div
      className={cn(
        "flex flex-col",
        marginBottom,
        width ? width : "w-full xl:w-8/12",
        position ? position : "mx-auto",
        gapY ? gapY : "gap-y-10"
      )}
    >
      <h1
        className={cn(
          "w-full text-left text-[42px] font-semibold leading-[42px] xl:text-[64px] xl:leading-[64px]",
          headerColor ? headerColor : "text-instillSkyBlue",
          headerUppercase ? "uppercase" : "",
          headerFontFamily ? headerFontFamily : "font-mono"
        )}
      >
        {headline}
      </h1>
      <div className="font-sans text-lg font-light text-instillGrey70 xl:text-2xl">
        {subHeadline}
      </div>
      {ctaButton}
    </div>
  );
};
