import {
  ExploreMoreScrollButton,
  ExploreMoreScrollButtonProps,
} from "./ExploreMoreScrollButton";
import { HeroAnimation } from "./HeroAnimation";
import { Headline } from "./Headline";
import { SubHeadline } from "./SubHeadline";
import { GitHubCtaButton } from "./GitHubCtaButton";
import { ConsoleCtaButton } from "./ConsoleCtaButton";
import { InstillHero } from "../InstillHero";
import { Jumbotron } from "../jumbotron";
import { Icons, Tag } from "@instill-ai/design-system";
import { Frameworks } from "./Frameworks";

export type HeroProps = {
  scrollHandler: ExploreMoreScrollButtonProps["scrollHandler"];
};

export const Hero = ({ scrollHandler }: HeroProps) => {
  return (
    <div className="flex min-h-[90vh] flex-col justify-center px-4 xl:px-0">
      <div className="flex flex-col xl:mb-[40px] xl:flex-row xl:gap-x-12 xl:gap-y-0">
        <div className="mt-10 flex flex-col xl:mt-0 xl:w-[50%]">
          <Headline marginBottom="mb-5" />
          <SubHeadline marginBottom="mb-0" />
          <Frameworks />
          <div className="flex flex-col gap-y-5 xl:flex-row xl:gap-x-5 xl:gap-y-0">
            <ConsoleCtaButton position="w-full justify-center xl:w-auto" />
            <p className="my-auto font-mono text-[14px] text-instillNeonBlue">
              Free, until you’re ready to upgrade
            </p>
          </div>
        </div>
        <div className="mb-20 mt-14 xl:my-auto xl:mt-0 xl:w-[50%]">
          <Jumbotron />
        </div>
      </div>
    </div>
  );
};
