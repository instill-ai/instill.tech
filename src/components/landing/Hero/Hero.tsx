import {
  ExploreMoreScrollButton,
  ExploreMoreScrollButtonProps,
} from "@/components/ui";
import HeroAnimation from "./HeroAnimation";
import Headline from "./Headline";
import SubHeadline from "./SubHeadline";
import GitHubCta from "./GitHubCta";
import DiscordCta from "./DiscordCta";

export type HeroProps = {
  scrollHandler: ExploreMoreScrollButtonProps["scrollHandler"];
};

const Hero = ({ scrollHandler }: HeroProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-10 px-4 md:min-h-[90vh] lg:px-0">
      <div className="mb-20 flex flex-col-reverse lg:flex-row lg:gap-y-0">
        <div className="flex flex-col md:my-auto lg:w-[57%]">
          <Headline marginBottom="mb-5" />
          <SubHeadline marginBottom="mb-10" />
          <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 sm:gap-y-0">
            <GitHubCta />
            <DiscordCta />
          </div>
        </div>
        <div className="mb-5 lg:my-auto lg:w-[43%]">
          <HeroAnimation />
        </div>
      </div>
      <ExploreMoreScrollButton scrollHandler={scrollHandler} />
    </div>
  );
};

export default Hero;
