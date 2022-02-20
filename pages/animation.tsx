import { FC } from "react";
import { HeroAnimationSvg } from "../components/ui/svgs/HeroAnimationSvg";
import { LandingBannerAnimationSvg } from "../components/ui/svgs/LandingBannerAnimationSvg";
import { LandingBannerAnimationSvgPan } from "../components/ui/svgs/LandingBannerAnimationSvgPan";

interface Props {}

const TestPage: FC<Props> = () => {
  return (
    <div className="flex">
      <LandingBannerAnimationSvgPan styleName="mx-auto w-[204px] h-[164px]" />
    </div>
  );
};

export default TestPage;
