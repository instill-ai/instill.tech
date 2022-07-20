import { FC, ReactElement, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { sendAmplitudeData } from "../lib/amplitude";

import { ContentContainer, PageBase, PageHead } from "@/components/layouts";
import { HeroSection, InstillCloudSection } from "@/components/sections";
import { useAmplitudeCtx } from "../contexts/AmplitudeContext";

const LandingBanner = dynamic(() =>
  import("../components/ui/LandingBanner").then((mod) => mod.LandingBanner)
);

const StayInTheLoopSection = dynamic(() =>
  import("@/components/sections/").then((mod) => mod.StayInTheLoopSection)
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
          <HeroSection scrollHandler={scrollHandler} />
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
          <StayInTheLoopSection />
        </ContentContainer>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default HomePage;
