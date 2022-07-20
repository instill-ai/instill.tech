import { FC, ReactElement, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import * as classNames from "classnames";
import { useRouter } from "next/router";
import { sendAmplitudeData } from "../lib/amplitude";

import { Headline } from "../components/ui/Headline";
import { MainCtaGroup } from "../components/ui/MainCtaGroup";
import { SubHeadline } from "../components/ui/SubHeadline";
import { ContentContainer, PageBase, PageHead } from "@/components/layouts";
import { InstillCloudSection } from "@/components/sections";
import { HeroAnimationSvg } from "../components/ui/svgs/animations/HeroAnimationSvg";
import { ExploreMoreScrollButton } from "../components/ui/buttons/ExploreMoreScrollButton";
import { useAmplitudeCtx } from "../contexts/AmplitudeContext";

const LandingBanner = dynamic(() =>
  import("../components/ui/LandingBanner").then((mod) => mod.LandingBanner)
);

const StayInTheLoopBlock = dynamic(() =>
  import("../components/ui/blocks/StayInTheLoopBlock").then(
    (mod) => mod.StayInTheLoopBlock
  )
);

const SecureYourSpotSection = dynamic(() =>
  import("@/components/sections/").then(
    (module) => module.SecureYourSpotSection
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

const HomePage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const elementMaxWidth = "max-w-[1440px] md:mx-auto";
  const router = useRouter();
  const { amplitudeIsInit } = useAmplitudeCtx();

  const landingBannerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_main_page", { type: "navigation" });
    }
  }, [router.isReady, amplitudeIsInit]);

  const scrollHandler = useCallback(() => {
    landingBannerRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <PageHead
        pageTitle="Instill AI"
        pageDescription="Empower modern data stack, tapping the value of unstructured visual data with our open source community."
      />
      <div className="flex flex-col">
        <ContentContainer contentMaxWidth="max-w-[1127px]">
          <div
            className={classNames.default(
              "flex flex-col justify-center gap-y-10 px-4 pt-20 md:pt-[84px] lg:px-0",
              elementMaxWidth
            )}
          >
            <div className="flex flex-col-reverse lg:flex-row lg:gap-y-0">
              <div className="flex flex-col md:my-auto lg:w-[57%]">
                <Headline styleName="mb-5 text-left" />
                <SubHeadline styleName="mb-10 md:px-0 text-left" />
                <MainCtaGroup />
              </div>
              <div className="mb-5 lg:my-auto lg:w-[43%]">
                <HeroAnimationSvg styleName="m-auto w-full max:w-[475px]" />
              </div>
            </div>
            <ExploreMoreScrollButton scrollHandler={scrollHandler} />
          </div>

          <div className="flex h-screen w-full" ref={landingBannerRef}>
            <LandingBanner />
          </div>
        </ContentContainer>

        <FeatureBlockGroup styleName="md:pt-10" />
        <InstillCloudSection />
        <ContentContainer
          contentMaxWidth="max-w-[889px]"
          marginBottom="mb-[129px]"
        >
          <SecureYourSpotSection
            bgColor="black"
            layout="main"
            marginBottom="mb-40"
          />
          <StayInTheLoopBlock />
        </ContentContainer>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default HomePage;
