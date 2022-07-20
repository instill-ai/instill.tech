import { FC } from "react";
import cn from "clsx";
import {
  ExploreMoreScrollButton,
  ExploreMoreScrollButtonProps,
} from "@/components/ui/buttons/ExploreMoreScrollButton";
import { Headline } from "@/components/ui/Headline";
import { SubHeadline } from "@/components/ui/SubHeadline";
import { HeroAnimationSvg } from "@/components/ui/svgs/animations/HeroAnimationSvg";
import { GetEarlyAccessButton } from "@/components/ui/buttons/GetEarlyAccessButton";
import { JoinDiscordButton } from "@/components/ui/buttons/JoinDiscordButton";

export type HeroSectionProps = {
  scrollHandler: ExploreMoreScrollButtonProps["scrollHandler"];
};

const HeroSection: FC<HeroSectionProps> = ({ scrollHandler }) => {
  return (
    <div className="flex flex-col justify-center gap-y-10 md:min-h-[90vh] lg:px-0">
      <div className="mb-20 flex flex-col-reverse lg:flex-row lg:gap-y-0">
        <div className="flex flex-col md:my-auto lg:w-[57%]">
          <Headline styleName="mb-5 text-left" />
          <SubHeadline styleName="mb-10 md:px-0 text-left" />
          <div
            className={cn(
              "flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 sm:gap-y-0"
            )}
          >
            <GetEarlyAccessButton />
            <JoinDiscordButton />
          </div>
        </div>
        <div className="mb-5 lg:my-auto lg:w-[43%]">
          <HeroAnimationSvg styleName="m-auto w-full max:w-[475px]" />
        </div>
      </div>
      <ExploreMoreScrollButton scrollHandler={scrollHandler} />
    </div>
  );
};

export default HeroSection;
