import { FC } from "react";
import { HeroAnimationSvg } from "../components/ui/svgs/animations/HeroAnimationSvg";
import { MagicFlowFull } from "../components/ui/svgs/animations/MagicFlowFull";

interface Props {}

const TestPage: FC<Props> = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* <div className="m-auto grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
        <div className="flex flex-col gap-y-2">
          <LandingBannerAnimationSvgPan styleName="mx-auto w-[204px] h-[164px]" />
          <h3 className="mx-auto instill-text-body text-instillGray95">
            linear_pan
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <LandingBannerAnimationSvgPanIn styleName="mx-auto w-[204px] h-[164px]" />
          <h3 className="mx-auto instill-text-body text-instillGray95">
            linear_pan_in
          </h3>
        </div>
        <div className="flex flex-col gap-y-2">
          <LandingBannerAnimationSvgPanInOut styleName="mx-auto w-[204px] h-[164px]" />
          <h3 className="mx-auto instill-text-body text-instillGray95">
            linear_pan_in_pan_out
          </h3>
        </div>
      </div>
  */}
      <HeroAnimationSvg styleName="w-[838px] y-[638px]" />
      {/* <MagicFlowFull styleName="mx-auto w-[446px] h-[1021px]" /> */}
      <MagicFlowFull styleName="mx-auto w-[207px] h-[945px]" />
    </div>
  );
};

export default TestPage;
