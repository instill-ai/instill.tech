import { FC, ReactElement, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import cn from "clsx";
import {
  BuildAppsInAction,
  CaseStudyProps,
  FaqHeaderProps,
  FaqProps,
  Hero,
  HowItWorksProps,
  Jumbotron,
  NoCodeInterfaceProps,
} from "@/components/landing";
import {
  CommonCtaButton,
  PageBase,
  PageHead,
  SectionHeader,
  SectionLabel,
  StayInTheLoop,
} from "@/components/ui";
import { Icons, Tag, getElementPosition } from "@instill-ai/design-system";
import { useInstillAICtx } from "@/contexts/InstillAIContext";
import { GetStaticProps } from "next";
import { getRepoFileContent } from "@/lib/github";
import { useInView } from "react-intersection-observer";
import { ExploreInstillHub } from "@/components/landing/ExploreInstillHub";
import Social from "@/components/landing/Social";

const FaqHeader = dynamic<FaqHeaderProps>(() =>
  import("@/components/landing").then((mod) => mod.FaqHeader)
);

const Faq = dynamic<FaqProps>(() =>
  import("@/components/landing").then((mod) => mod.Faq)
);

const HowItWorks = dynamic<HowItWorksProps>(() =>
  import("@/components/landing").then((mod) => mod.HowItWorks)
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
          <Social />
        </div>

        <div className="bg-instillGrey90">
          <div className={cn("mx-auto max-w-[1127px] px-4 xl:px-0", "mb-20")}>
            <BuildAppsInAction />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1127px] flex-col px-4 xl:px-0">
          <HowItWorks />
        </div>
        <div className="bg-instillGrey90">
          <div className={cn("mx-auto max-w-[1127px] px-4 xl:px-0", "mb-20")}>
            <Community />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1127px] flex-col px-4 xl:px-0">
          <div className="my-10 flex flex-col-reverse xl:flex-row">
            <div>
              <CommonCtaButton
                withArrow={true}
                link={"/"}
                text="Self-host Instill Core"
                position="xl:hidden block w-full justify-center"
              />
            </div>
            <div className="w-full xl:w-[45%]">
              <img src={"/images/self-host-cube.svg"} alt="" />
            </div>

            <div className="w-full space-y-10 xl:w-[55%]">
              <div className="mx-auto">
                <p className="font-mono text-[36px] font-semibold">
                  Want to self-host?
                </p>
              </div>
              <div className="mx-auto">
                <p>
                  You can self-host Instill VDP and Instill model via Instill
                  Core. It provides an open-source AI infrastructure tailored
                  for unstructured data, enabling versatile AI application
                  development.
                </p>
              </div>

              <div className="mx-auto hidden xl:block">
                <CommonCtaButton
                  withArrow={true}
                  link={"/docs/v0.6.0-alpha/core/deployment"}
                  text="Self-host Instill Core"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default HomePage;
