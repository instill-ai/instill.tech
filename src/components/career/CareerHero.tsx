import cn from "clsx";
import {
  ViewJobsScrollButton,
  ViewJobsScrollButtonProps,
} from "./ViewJobsScrollButton";

export type CareerHeroProps = {
  viewJobsScrollHandler: ViewJobsScrollButtonProps["scrollHandler"];
  marginBottom?: string;
};

export const CareerHero = ({
  marginBottom,
  viewJobsScrollHandler,
}: CareerHeroProps) => {
  const subHeaderStyle =
    "text-lg text-instillGrey70 font-sans font-light md:text-2xl";
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col gap-y-10 md:w-8/12",
        marginBottom
      )}
    >
      <h1 className="w-full text-left font-mono text-5xl font-semibold uppercase text-instillSkyBlue md:text-instill-h1">
        Come together
      </h1>
      <div className="flex flex-col">
        <p className={subHeaderStyle}>We can&#39;t build our vision alone.</p>
        <p className={subHeaderStyle}>
          Take a look below for your new favorite job.
        </p>
      </div>
      <ViewJobsScrollButton
        scrollHandler={viewJobsScrollHandler}
        position="mr-auto"
      />
    </div>
  );
};
