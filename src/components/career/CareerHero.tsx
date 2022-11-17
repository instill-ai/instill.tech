import cn from "clsx";
import { PageHero } from "../ui";
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
  return (
    <PageHero
      headline="Come together"
      subHeadline={
        <>
          <p>We can&#39;t build our vision alone.</p>
          <p>Take a look below for your new favorite job.</p>
        </>
      }
      ctaButton={
        <ViewJobsScrollButton
          scrollHandler={viewJobsScrollHandler}
          position="mr-auto"
        />
      }
      marginBottom={marginBottom}
    />
  );
};
