import cn from "clsx";
import { ReactNode } from "react";

export type PageHeroProps = {
  headline: string;
  marginBottom?: string;
  subHeadline?: ReactNode;
  ctaButton?: ReactNode;
};

export const PageHero = ({
  marginBottom,
  headline,
  subHeadline,
  ctaButton,
}: PageHeroProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col gap-y-10 xl:w-8/12",
        marginBottom
      )}
    >
      <h1 className="w-full text-left font-mono text-5xl font-semibold uppercase text-instillSkyBlue xl:text-instill-h1">
        {headline}
      </h1>
      <div className="font-sans text-lg font-light text-instillGrey70 xl:text-2xl">
        {subHeadline}
      </div>
      {ctaButton}
    </div>
  );
};
