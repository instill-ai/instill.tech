import {
  ExploreMoreScrollButton,
  ExploreMoreScrollButtonProps,
} from "./ExploreMoreScrollButton";
import { HeroAnimation } from "./HeroAnimation";
import { Headline } from "./Headline";
import { SubHeadline } from "./SubHeadline";
import { GitHubCtaButton } from "./GitHubCtaButton";
import { ConsoleCtaButton } from "./ConsoleCtaButton";

export type HeroProps = {
  scrollHandler: ExploreMoreScrollButtonProps["scrollHandler"];
};

export const Hero = ({ scrollHandler }: HeroProps) => {
  return (
    <div className="flex min-h-[90vh] flex-col justify-center px-4 xl:px-0">
      <div className="flex flex-col-reverse xl:mb-[120px] xl:flex-row xl:gap-y-0 xl:gap-x-12">
        <div className="flex flex-col xl:my-auto xl:w-[64%]">
          <Headline marginBottom="mb-5" />
          <SubHeadline marginBottom="mb-10" />
          <div className="flex flex-col gap-y-5 xl:flex-row xl:gap-x-5 xl:gap-y-0">
            <ConsoleCtaButton />
            <GitHubCtaButton />
          </div>
        </div>
        <div className="mb-20 xl:my-auto xl:w-[36%]">
          <HeroAnimation />
        </div>
      </div>
      <div className="hidden xl:flex">
        <ExploreMoreScrollButton scrollHandler={scrollHandler} />
      </div>
    </div>
  );
};
