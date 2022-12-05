import cn from "clsx";
import { ReactNode } from "react";

export type PageHeroProps = {
  headline: string;
  marginBottom?: string;
  subHeadline?: ReactNode;
  ctaButton?: ReactNode;
  width?: string;
  position?: string;
  headerColor?: string;
  headerUppercase: boolean;
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
}: PageHeroProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-10",
        marginBottom,
        width ? width : "w-full xl:w-8/12",
        position ? position : "mx-auto"
      )}
    >
      <h1
        className={cn(
          "w-full text-left font-mono text-5xl font-semibold xl:text-instill-h1",
          headerColor ? headerColor : "text-instillSkyBlue",
          headerUppercase ? "uppercase" : ""
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
