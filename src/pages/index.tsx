import { FC, ReactElement, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import cn from "clsx";

import {
  CaseStudyProps,
  CodeShowcase,
  FaqHeaderProps,
  FaqProps,
  Hero,
  HowItWorksProps,
  Jumbotron,
  NoCodeInterfaceProps,
  Vdp,
} from "@/components/landing";
import {
  CommonCtaButton,
  PageBase,
  PageHead,
  SectionHeader,
  SectionLabel,
} from "@/components/ui";
import { Icons, Tag, getElementPosition } from "@instill-ai/design-system";
import { useInstillAICtx } from "@/contexts/InstillAIContext";
import { GetStaticProps } from "next";
import { getRepoFileContent } from "@/lib/github";
import { useInView } from "react-intersection-observer";
import { ExploreInstillHub } from "@/components/landing/ExploreInstillHub";
import Social from "@/components/landing/Social";
// to detect language and automatically redirect to the approprate/[locale] page

const FaqHeader = dynamic<FaqHeaderProps>(() =>
  import("@/components/landing").then((mod) => mod.FaqHeader)
);

const CaseStudy = dynamic<CaseStudyProps>(
  () => import("@/components/landing").then((mod) => mod.CaseStudy),
  { ssr: false }
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

/* eslint-disable-next-line @typescript-eslint/ban-types */
const InstillCloud = dynamic<{}>(() =>
  import("@/components/landing").then((mod) => mod.InstillCloud)
);

/* eslint-disable-next-line @typescript-eslint/ban-types */
const Community = dynamic<{}>(() =>
  import("@/components/landing").then((mod) => mod.Community)
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const destinationDefinitions = await getRepoFileContent(
    "instill-ai",
    "connector-destination",
    "pkg/airbyte/config/seed/definitions.json"
  );

  const buf = Buffer.from(destinationDefinitions.content, "base64").toString(
    "utf-8"
  );

  const destinationArray: Record<string, string>[] = JSON.parse(buf);

  return {
    props: {
      destinations: destinationArray.map((e) => {
        return {
          name: e.title,
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
  const { enableAnnouncementBar } = useInstillAICtx();

  useEffect(() => {
    // The CaseStudy component can't correctly calculate the element
    // position when user scroll to the CaseStudy section and directly
    // refresh the page. So we need to enforce the page to go back to
    // top to enforce the experience.

    // The issue is centered at ControlPanel component:

    // The problem is, The ControlPanel will work corretly if user start
    // navigate before the CaseStudy is displayed. But if they refresh
    // the page directly on top of CaseStudy section. The page will only
    // load Hero section and CaseStudySection and some component below it
    // because we dynamic load these element when they are in view.

    // In this way, the ControlPanel will have the wrong dimension and cause
    // some weird behavior

    // At the first glance, the solution seems to be using the CaseStudy
    // activeIndex props to update the dimension state of every component
    // in Control Panel(Because upon the first draw, the line is correct,
    // The issue will only happen when user switch active CaseStudy item).

    // But in this way we can not use useElementDimension hook which is
    // troublesome. Even We use ref and get element dimension in the useEffect
    // that calculate the line stat. The time activeIndex change didn't mean
    // it's the time DOM had been updated and every component had been drew.

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  const scrollHandler = useCallback(() => {
    if (!window || !vdpRef.current) {
      return;
    }

    const vdpDimension = getElementPosition(vdpRef.current);
    const navbarHeight = enableAnnouncementBar ? 128 : 84;

    window.scrollTo({
      top: vdpDimension.y - navbarHeight,
      behavior: "smooth",
    });
  }, [enableAnnouncementBar]);

  // Implement Lazy load
  const rootMargin = "100px 0px 0px 0px";

  const [vdpIsInViewRef, vdpIsInView] = useInView({
    triggerOnce: true,
    rootMargin,
  });

  const [howItWorksIsInViewRef, howItWorksIsInView] = useInView({
    triggerOnce: true,
    rootMargin,
  });

  const [noCodeInterfaceIsInViewRef, noCodeInterfaceIsInView] = useInView({
    triggerOnce: true,
    rootMargin,
  });

  const [communityIsInViewRef, communityIsInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  });

  const [caseStudyIsInViewRef, caseStudyIsInView] = useInView({
    triggerOnce: true,
    rootMargin,
  });

  const [codeShowcaseIsInViewRef, codeShowcaseIsInView] = useInView({
    triggerOnce: true,
    rootMargin,
  });

  const [faqIsInViewRef, faqIsInView] = useInView({
    triggerOnce: true,
    rootMargin,
  });

  return (
    <>
      <PageHead
        pageType="main"
        pageTitle="Instill AI"
        pageDescription="Empower modern data stack, tapping the value of unstructured data with our open source community."
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />

      <div className="flex flex-col">
        <div className="mx-auto flex w-full max-w-[1127px] flex-col px-4 xl:px-0">
          <Hero scrollHandler={scrollHandler} />

          <div className="mx-auto w-full px-4 xl:px-0">
            <div className="flex flex-row">
              <div className={cn("flex w-2/5 flex-col")}>
                <div className="mb-10 flex flex-col">
                  <SectionLabel
                    text="VDP IN ACTION"
                    position="mr-auto"
                    marginBottom="mb-2.5"
                  />
                  <SectionHeader
                    header="Unlock Limitless AI Potential"
                    headerWidth="text-zinc-800 !text-[36px] font-medium font-mono capitalize"
                    headerTextColor="text-instillGrey90"
                  />
                </div>
                <div className="mb-10 space-y-4">
                  <p className="font-sans font-normal">
                    Boost Your AI Development with Our Versatile Data Pipeline!{" "}
                  </p>
                  <p>
                    Our Versatile Data Pipeline powers your AI apps with
                    virtually endless data, regardless of use case. Seamlessly
                    integrate your unstructured data and harness the versatility
                    of AI with Instill AIs rapidly expanding community of data
                    connectors.
                  </p>
                  <p>Build apps in half the time</p>
                  <p>
                    Unrestricted access to perfectly structured data means
                    unmatched experimentation power and lighter workloads.
                  </p>
                  <p>Experience the future with our interactive demo ⚡️.</p>
                </div>
                <div className="flex flex-col">
                  <div className="mb-2 flex w-full flex-wrap justify-center gap-x-3 gap-y-2 xl:justify-start">
                    <Tag
                      variant="darkYellow"
                      className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                    >
                      <Icons.Type02 className="h-3 w-3 stroke-instillGrey95" />
                      Text
                    </Tag>
                    <Tag
                      variant="darkYellow"
                      className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                    >
                      <Icons.Image01 className="h-3 w-3 stroke-instillGrey95" />
                      Image
                    </Tag>
                    <Tag
                      variant="darkYellow"
                      className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                    >
                      <Icons.Speaker01 className="h-3 w-3 stroke-instillGrey95" />
                      Audio
                    </Tag>
                    <div className="hidden xl:block">
                      <Tag
                        variant="darkYellow"
                        className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                      >
                        <Icons.VideoRecorder className="h-3 w-3 stroke-instillGrey95" />
                        Video
                      </Tag>
                    </div>
                    <Tag
                      variant="darkYellow"
                      className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                    >
                      <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                      PDF
                    </Tag>
                    <div className="hidden xl:block">
                      <Tag
                        variant="darkYellow"
                        className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                      >
                        <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                        JSON
                      </Tag>
                    </div>
                    <Tag
                      variant="darkYellow"
                      className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                    >
                      <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                      CSV
                    </Tag>
                    <div className="hidden xl:block">
                      <Tag
                        variant="darkYellow"
                        className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                      >
                        <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                        Parquet
                      </Tag>
                    </div>
                    <Tag
                      variant="darkYellow"
                      className="gap-x-1 !rounded-none border-none !bg-[#FDCF72] !text-instillGrey95"
                    >
                      <div className="h-2 w-2 rounded-lg bg-black"></div>
                      More
                    </Tag>
                  </div>
                </div>
              </div>
              <div className="w-3/5">
                <Jumbotron />
              </div>
            </div>
          </div>
          {/* <div
            ref={noCodeInterfaceIsInViewRef}
            className={howItWorksIsInView ? "" : "mb-20"}
          > */}
          {/* {howItWorksIsInView ?  */}

          <NoCodeInterface />
          {/* : null} */}
          {/* </div> */}

          <div>
            {/* {vdpIsInView ?  */}
            <HowItWorks />
            {/* : null} */}
          </div>

          <div className="my-10 flex flex-col space-y-10">
            <div className="mx-auto">
              <p className="font-mono text-[36px] font-semibold">
                Want to self-host?
              </p>
            </div>
            <div className="mx-auto">
              <p>
                You can self-host Instill VDP and Instill model via Instill
                Core. It provides an open-source AI infrastructure tailored for
                unstructured data, enabling versatile AI application
                development.
              </p>
            </div>

            <div className="mx-auto">
              <CommonCtaButton withArrow={true} link={"/"} text="Learn more" />
            </div>
          </div>
        </div>

        <div className="bg-instillGrey90">
          <div
            // ref={communityIsInViewRef}
            className={cn("mx-auto max-w-[1127px] px-4 xl:px-0", "mb-20")}
          >
            {/* {noCodeInterfaceIsInView ?  */}
            <Community />
            {/* : null} */}
          </div>
          {/* <div
            ref={caseStudyIsInViewRef}
            className={communityIsInView ? "" : "mb-20"}
          >
            {communityIsInView ? (
              <CaseStudy destinations={destinations} />
            ) : null}
          </div> */}

          {/* <div
            ref={codeShowcaseIsInViewRef}
            className={cn(
              "mx-auto max-w-[1127px] px-4 xl:px-0",
              caseStudyIsInView ? "" : "mb-20"
            )}
          >
            {caseStudyIsInView ? <CodeShowcase /> : null}
          </div> */}
        </div>

        <div className="mx-auto flex w-full max-w-[1127px] flex-col px-4 xl:px-0">
          <Social />
        </div>
        <div
          ref={faqIsInViewRef}
          className="-mt-0.5 mb-20 flex w-full flex-col"
        >
          {codeShowcaseIsInView ? (
            <>
              <FaqHeader />
              <div className="mx-auto flex max-w-[1127px] flex-col px-4 xl:px-0">
                <Faq />
              </div>
            </>
          ) : null}
        </div>
        {/* <div>{faqIsInView ? <InstillCloud /> : null}</div> */}
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default HomePage;
