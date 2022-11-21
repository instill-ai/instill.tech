import { FC, ReactElement, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import { parse } from "yaml";
import cn from "clsx";

import {
  CaseStudyProps,
  CodeShowcase,
  FaqHeaderProps,
  FaqProps,
  Hero,
  HowItWorksProps,
  NoCodeInterfaceProps,
  Vdp,
} from "@/components/landing";
import { PageBase, PageHead } from "@/components/ui";
import { getElementPosition } from "@instill-ai/design-system";
import { useAnnouncementBarCtx } from "@/contexts/AnnouncementBarContext";
import { GetStaticProps } from "next";
import { getRepoFileContent } from "@/lib/github";
import { useInView } from "react-intersection-observer";

const FaqHeader = dynamic<FaqHeaderProps>(() =>
  import("@/components/landing").then((mod) => mod.FaqHeader)
);

const CaseStudy = dynamic<CaseStudyProps>(() =>
  import("@/components/landing").then((mod) => mod.CaseStudy)
);

const Faq = dynamic<FaqProps>(() =>
  import("@/components/landing").then((mod) => mod.Faq)
);

const NoCodeInterface = dynamic<NoCodeInterfaceProps>(() =>
  import("@/components/landing").then((mod) => mod.NoCodeInterface)
);

const HowItWorks = dynamic<HowItWorksProps>(() =>
  import("@/components/landing").then((mod) => mod.HowItWorks)
);

const InstillCloud = dynamic(() =>
  import("@/components/landing").then((mod) => mod.InstillCloud)
);

const Community = dynamic(() =>
  import("@/components/landing").then((mod) => mod.Community)
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const destinationDefinitions = await getRepoFileContent(
    "instill-ai",
    "connector-backend",
    "config/init/airbyte/seed/destination_definitions.yaml"
  );

  let buf = Buffer.from(destinationDefinitions.content, "base64").toString(
    "utf-8"
  );

  let destinationArray: Record<string, string>[] = parse(buf);

  return {
    props: {
      destinations: destinationArray.map((e) => {
        return {
          name: e.name,
          icon: e.icon ?? null,
        };
      }),
    },
  };
};

type HomePageProps = {
  destinations: CaseStudyProps["destinations"];
};

interface GetLayOutProps {
  page: ReactElement;
}

const HomePage: FC<HomePageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ destinations }) => {
  const vdpRef = useRef<HTMLDivElement>(null);
  const { enableAnnouncementBar } = useAnnouncementBarCtx();

  const scrollHandler = useCallback(() => {
    if (!window) return;
    const vdpDimension = getElementPosition(vdpRef.current);
    const navbarHeight = enableAnnouncementBar ? 128 : 84;

    window.scrollTo({
      top: vdpDimension.y - navbarHeight,
      behavior: "smooth",
    });
  }, [enableAnnouncementBar]);

  // Implement Lazy load
  const [heroIsInViewRef, heroIsInView] = useInView({
    triggerOnce: true,
  });

  const [vdpIsInViewRef, vdpIsInView] = useInView({
    triggerOnce: true,
  });

  const [howItWorksIsInViewRef, howItWorksIsInView] = useInView({
    triggerOnce: true,
  });

  const [noCodeInterfaceIsInViewRef, noCodeInterfaceIsInView] = useInView({
    triggerOnce: true,
  });

  const [communityIsInViewRef, communityIsInView] = useInView({
    triggerOnce: true,
  });

  const [caseStudyIsInViewRef, caseStudyIsInView] = useInView({
    triggerOnce: true,
  });

  const [codeShowcaseIsInViewRef, codeShowcaseIsInView] = useInView({
    triggerOnce: true,
  });

  const [faqIsInViewRef, faqIsInView] = useInView({
    triggerOnce: true,
  });

  const [instillCloudIsInViewRef, instillCloudIsInView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <PageHead
        pageTitle="Instill AI"
        pageDescription="Empower modern data stack, tapping the value of unstructured visual data with our open source community."
        pageType="main"
      />
      <div className="flex flex-col">
        <div className="mx-auto flex w-full max-w-[1127px] flex-col px-4 xl:px-0">
          {/* <div ref={heroIsInViewRef} className={heroIsInView ? "" : "mb-20"}>
            {heroIsInView ? <Hero scrollHandler={scrollHandler} /> : null}
          </div> */}
          <div ref={vdpIsInViewRef} className={vdpIsInView ? "" : "mb-20"}>
            {vdpIsInView ? <Vdp ref={vdpRef} /> : null}
          </div>
          <div
            ref={howItWorksIsInViewRef}
            className={howItWorksIsInView ? "" : "mb-20"}
          >
            {howItWorksIsInView ? <HowItWorks /> : null}
          </div>
          <div
            ref={noCodeInterfaceIsInViewRef}
            className={noCodeInterfaceIsInView ? "" : "mb-20"}
          >
            {noCodeInterfaceIsInView ? <NoCodeInterface /> : null}
          </div>
        </div>

        <div className="bg-instillGrey90">
          <div
            ref={communityIsInViewRef}
            className={cn(
              "mx-auto max-w-[1127px] px-4 xl:px-0",
              communityIsInView ? "" : "mb-20"
            )}
          >
            {communityIsInView ? <Community /> : null}
          </div>
          <div
            ref={caseStudyIsInViewRef}
            className={caseStudyIsInView ? "" : "mb-20"}
          >
            {caseStudyIsInView ? (
              <CaseStudy destinations={destinations} />
            ) : null}
          </div>

          <div
            ref={codeShowcaseIsInViewRef}
            className={cn(
              "mx-auto max-w-[1127px] px-4 xl:px-0",
              codeShowcaseIsInView ? "" : "mb-20"
            )}
          >
            {codeShowcaseIsInView ? <CodeShowcase /> : null}
          </div>
        </div>
        <div
          ref={faqIsInViewRef}
          className="mb-20 -mt-0.5 flex w-full flex-col"
        >
          {faqIsInView ? (
            <>
              <FaqHeader />
              <div className="mx-auto flex max-w-[1127px] flex-col px-4 xl:px-0">
                <Faq />
              </div>
            </>
          ) : null}
        </div>
        <div>
          <InstillCloud />
        </div>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default HomePage;
