import dynamic from "next/dynamic";
import cn from "clsx";
import {
  BuildAppsInAction,
  Hero,
  HowItWorksProps,
  SelfHost,
  Social,
} from "@/components/landing";
import { LandingPageBase, PageHead } from "@/components/ui";
import Slide from "@/components/landing/Slide";
import { NextPageWithLayout } from "./_app";

const HowItWorks = dynamic<HowItWorksProps>(() =>
  import("@/components/landing").then((mod) => mod.HowItWorks)
);

/* eslint-disable-next-line @typescript-eslint/ban-types */
const Community = dynamic<{}>(() =>
  import("@/components/landing").then((mod) => mod.Community)
);

const HomePage: NextPageWithLayout = () => {
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
        <div className="mx-auto flex w-full max-w-[1327px] flex-col px-4 xl:px-0">
          <Slide>
            <Hero />
          </Slide>
          <Slide>
            <Social />
          </Slide>
        </div>

        <div className="bg-instillGrey90">
          <div className={cn("mx-auto max-w-[1127px] px-4 xl:px-0")}>
            <BuildAppsInAction />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1127px] flex-col px-4 xl:px-0">
          <HowItWorks />
        </div>

        <div className="bg-instillGrey90">
          <div className={cn("mx-auto max-w-[1127px] px-4 xl:px-0")}>
            <Community />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1127px] flex-col px-4 xl:px-0">
          <SelfHost />
        </div>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <LandingPageBase>{page}</LandingPageBase>;
};

export default HomePage;
