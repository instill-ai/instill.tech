import { FC, ReactElement, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import fs from "fs";
import { join } from "path";

import {
  CaseStudyProps,
  Community,
  Faq,
  Hero,
  HowItWorks,
  InstillCloud,
  NoCodeInterface,
  Vdp,
} from "@/components/landing";
import {
  PageBase,
  ContentContainer,
  PageHead,
  SecureYourSpotProps,
  StayInTheLoopProps,
} from "@/components/ui";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const Features = dynamic(() =>
  import("@/components/landing").then((mod) => mod.Features)
);

const StayInTheLoop = dynamic<StayInTheLoopProps>(() =>
  import("@/components/ui").then((mod) => mod.StayInTheLoop)
);

const SecureYourSpot = dynamic<SecureYourSpotProps>(() =>
  import("@/components/ui").then((mod) => mod.SecureYourSpot)
);

const CaseStudy = dynamic<CaseStudyProps>(() =>
  import("@/components/landing").then((mod) => mod.CaseStudy)
);

interface GetLayOutProps {
  page: ReactElement;
}

const HomePage: FC & {
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
        pageType="main"
      />
      <div className="flex flex-col bg-white">
        <ContentContainer contentMaxWidth="max-w-[1127px]">
          <Hero scrollHandler={scrollHandler} />
        </ContentContainer>
        <div className="mx-auto flex max-w-[1127px] flex-col px-10 xl:px-0">
          <Vdp marginBottom="mb-20" />
          <HowItWorks marginBottom="mb-20" />
          <NoCodeInterface marginBottom="mb-20" />
        </div>

        <CaseStudy />

        <div className="flex flex-col bg-white">
          <div className="mx-auto flex max-w-[1127px] flex-col">
            <Community marginBottom="mb-[60px]" />
          </div>
        </div>

        <InstillCloud />

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
