import { FC, ReactElement, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import * as classNames from "classnames";
import { useRouter } from "next/router";
import { sendAmplitudeData } from "../lib/amplitude";

import { Headline } from "../components/ui/Headline";
import { MainCtaGroup } from "../components/ui/MainCtaGroup";
import { SubHeadline } from "../components/ui/SubHeadline";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
import { HeroAnimationSvg } from "../components/ui/svgs/animations/HeroAnimationSvg";
import { ExploreMoreScrollButton } from "../components/ui/buttons/ExploreMoreScrollButton";

const LandingBanner = dynamic(() =>
  import("../components/ui/LandingBanner").then((mod) => mod.LandingBanner)
);

const StayInTheLoopBlock = dynamic(() =>
  import("../components/ui/blocks/StayInTheLoopBlock").then(
    (mod) => mod.StayInTheLoopBlock
  )
);

const SecureYourSpotBlock = dynamic(() =>
  import("../components/ui/blocks/SecureYourSpotBlock").then(
    (mod) => mod.SecureYourSpotBlock
  )
);

const FeatureBlockGroup = dynamic(() =>
  import("../components/ui/groups/FeatureBlockGroup").then(
    (mod) => mod.FeatureBlockGroup
  )
);

interface Props {}

interface GetLayOutProps {
  page: ReactElement;
}

const Home: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const elementMaxWidth = "max-w-[1440px] md:mx-auto";
  const router = useRouter();

  const landingBannerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (router.isReady) {
      sendAmplitudeData("hit_main_page", { type: "navigation" });
    }
  }, [router.isReady]);

  const scrollHandler = useCallback(() => {
    landingBannerRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <PageHead
      pageTitle="Instill AI"
      pageDescription="Empower modern data stack, tapping the value of unstructured visual data with our open source community."
    >
      <div className="flex flex-col">
        <div
          className={classNames.default(
            "md:min-h-screen flex flex-col gap-y-10 max-w-[1440px] md:w-10/12 px-4 lg:px-0 justify-center pt-20 md:pt-[84px] mb-1",
            elementMaxWidth
          )}
        >
          <div className="flex flex-col-reverse lg:gap-y-0 lg:flex-row max:w-10/12 max:mx-auto">
            <div className="flex flex-col md:my-auto lg:w-[57%]">
              <Headline styleName="mb-5 text-left" />
              <SubHeadline styleName="mb-10 md:px-0 text-left" />
              <MainCtaGroup />
            </div>
            <div className="lg:w-[43%] mb-5 lg:mb-0">
              <HeroAnimationSvg styleName="m-auto w-full max:w-[475px]" />
            </div>
          </div>
          <ExploreMoreScrollButton
            scrollHandler={scrollHandler}
            styleName="max:my-[60px] max:mx-auto"
          />
        </div>
        <div ref={landingBannerRef}>
          <LandingBanner />
        </div>

        <FeatureBlockGroup styleName="mb-4 md:py-10 md:mb-[152px] bg-white" />

        <div className="flex max-w-[1440px] px-4 md:px-0 md:w-10/12 md:mx-auto">
          <div className="flex flex-col max:mx-auto max:w-10/12">
            <SecureYourSpotBlock styleName="mb-[60px]" />
            <StayInTheLoopBlock styleName={classNames.default("mb-[60px]")} />
          </div>
        </div>
      </div>
    </PageHead>
  );
};

Home.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
};

export default Home;
