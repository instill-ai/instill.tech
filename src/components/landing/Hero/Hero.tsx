import {
  ExploreMoreScrollButton,
  ExploreMoreScrollButtonProps,
} from "@/components/ui";
import { HeroAnimation } from "./HeroAnimation";
import { Headline } from "./Headline";
import { SubHeadline } from "./SubHeadline";
import { GitHubCtaButton } from "./GitHubCtaButton";
import { DiscordCtaButton } from "./DiscordCtaButton";

export type HeroProps = {
  scrollHandler: ExploreMoreScrollButtonProps["scrollHandler"];
};

export const Hero = ({ scrollHandler }: HeroProps) => {
  return (
    <div className="flex min-h-[90vh] flex-col justify-center px-4 xl:px-0">
      <div className="flex flex-col-reverse md:mb-[120px] xl:flex-row xl:gap-y-0 xl:gap-x-12">
        <div className="flex flex-col md:my-auto xl:w-[57%]">
          <Headline marginBottom="mb-5" />
          <SubHeadline marginBottom="mb-10" />
          <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 sm:gap-y-0">
            <GitHubCtaButton />
            <DiscordCtaButton />
          </div>
        </div>
        <div className="mb-20 xl:my-auto xl:mb-0 xl:w-[43%]">
          <HeroAnimation />
        </div>
      </div>
      <div className="hidden xl:flex">
        <ExploreMoreScrollButton scrollHandler={scrollHandler} />
      </div>
    </div>
  );
};
