import { FC, ReactElement, useCallback, useRef } from "react";
import dynamic from "next/dynamic";

import { HeroSection, InstillCloudSection } from "@/components/sections";
import {
  PageBase,
  ContentContainer,
  PageHead,
  SecureYourSpotProps,
  StayInTheLoopProps,
} from "@/components/ui";

const VdpFlow = dynamic(() =>
  import("@/components/landing").then((mod) => mod.VdpFlow)
);

const Features = dynamic(() =>
  import("@/components/landing").then((mod) => mod.Features)
);

const StayInTheLoop = dynamic<StayInTheLoopProps>(() =>
  import("@/components/ui").then((mod) => mod.StayInTheLoop)
);

const SecureYourSpot = dynamic<SecureYourSpotProps>(() =>
  import("@/components/ui").then((mod) => mod.SecureYourSpot)
);

interface Props {}

interface GetLayOutProps {
  page: ReactElement;
}

const HomePage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const vdpFlowRef = useRef<HTMLDivElement>();

  const scrollHandler = useCallback(() => {
    vdpFlowRef.current.scrollIntoView({ behavior: "smooth" });
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
          <div className="flex h-screen w-full" ref={vdpFlowRef}>
            <VdpFlow />
          </div>
        </ContentContainer>

        <Features />
        <InstillCloudSection />

        <ContentContainer
          contentMaxWidth="max-w-[889px]"
          marginBottom="mb-[129px]"
        >
          <SecureYourSpot bgColor="black" layout="main" marginBottom="mb-40" />
          <StayInTheLoop />
        </ContentContainer>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default HomePage;
