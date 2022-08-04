import { FC, ReactElement, useCallback, useRef } from "react";
import dynamic from "next/dynamic";

import { PageHead } from "@/components/layouts";
import { HeroSection, InstillCloudSection } from "@/components/sections";
import { PageBase, ContentContainer } from "@/components/ui";

const LandingBanner = dynamic(() =>
  import("@/components/sections").then((mod) => mod.VdpFlowSection)
);

const StayInTheLoopSection = dynamic(() =>
  import("@/components/sections/").then((mod) => mod.StayInTheLoopSection)
);

const SecureYourSpotSection = dynamic(() =>
  import("@/components/sections/").then(
    (module) => module.SecureYourSpotSection
  )
);

const FeatureSection = dynamic(() =>
  import("@/components/sections/").then((mod) => mod.FeatureSection)
);

interface Props {}

interface GetLayOutProps {
  page: ReactElement;
}

const HomePage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const landingBannerRef = useRef<HTMLDivElement>();

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

        <FeatureSection />
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
