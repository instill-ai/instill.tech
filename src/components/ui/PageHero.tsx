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
            "w-full text-center text-[18px] font-semibold leading-5 xl:text-[24px] xl:leading-[28px]",
            headerColor ? headerColor : "text-semantic-accent-on-bg",
            headerUppercase ? "uppercase" : "",
            headerFontFamily ? headerFontFamily : "font-sans"
          )}
        >
          {headline}
        </h1>
        <div className="text-center font-sans text-[14px] font-light text-instillGrey70 xl:text-[16px]">
          {subHeadline}
        </div>
        {ctaButton}
      </div>
    </div>
  );
};
