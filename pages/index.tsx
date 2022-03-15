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
import { InstillCloudSection } from "../components/ui/InstillCloudSection";
import { useAmplitudeCtx } from "../context/AmplitudeContext";

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
  const { amplitudeIsInit } = useAmplitudeCtx();

  const landingBannerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    console.log(amplitudeIsInit);
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_main_page", { type: "navigation" });
    }
  }, [router.isReady, amplitudeIsInit]);

  const scrollHandler = useCallback(() => {
    landingBannerRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <PageHead
      pageTitle="Instill AI"
      pageDescription="Empower modern data stack, tapping the value of unstructured visual data with our open source community."
    >
      <div className="flex h-full flex-col">
        <div className="flex w-full bg-instillGray95">
          <div
            className={classNames.default(
              "mb-1 flex max-w-[1440px] flex-col justify-center gap-y-10 px-4 pt-20 md:min-h-screen md:w-10/12 md:pt-[84px] lg:px-0",
              elementMaxWidth
            )}
          >
            <div className="flex flex-col-reverse lg:flex-row lg:gap-y-0 max:mx-auto max:w-10/12">
              <div className="flex flex-col md:my-auto lg:w-[57%]">
                <Headline styleName="mb-5 text-left" />
                <SubHeadline styleName="mb-10 md:px-0 text-left" />
                <MainCtaGroup />
              </div>
              <div className="mb-5 lg:mb-0 lg:w-[43%]">
                <HeroAnimationSvg styleName="m-auto w-full max:w-[475px]" />
              </div>
            </div>
            <ExploreMoreScrollButton
              scrollHandler={scrollHandler}
              styleName="max:my-[60px] max:mx-auto"
            />
          </div>
        </div>

        <div
          className="flex h-full w-full bg-instillGray95"
          ref={landingBannerRef}
        >
          <LandingBanner />
        </div>

        <FeatureBlockGroup styleName="md:pt-10" />

        <InstillCloudSection />

        <div className="flex flex-col bg-instillGray95">
          <SecureYourSpotBlock styleName="max-w-[889px] md:w-8/12 md:mx-auto mb-40" />
          <StayInTheLoopBlock styleName="max-w-[889px] px-4 md:px-10 md:w-8/12 md:mx-auto mb-40" />
        </div>
      </div>
    </PageHead>
  );
};

Home.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
};

export default Home;
