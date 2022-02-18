import { FC } from "react";
import { HeroAnimationSvg } from "../components/ui/svgs/HeroAnimationSvg";
import { LandingBannerAnimationSvg } from "../components/ui/svgs/LandingBannerAnimationSvg";

interface Props {}

const TestPage: FC<Props> = () => {
  return (
    <div className="flex">
      <LandingBannerAnimationSvg styleName="mx-auto w-[456px] h-[1021px]" />
    </div>
  );
};

export default TestPage;
