import { FC, ReactElement, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import { parse } from "yaml";

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
    const vdfDimension = getElementPosition(vdpRef.current);
    const navbarHeight = enableAnnouncementBar ? 128 : 84;

    window.scrollTo({
      top: vdfDimension.y - navbarHeight,
      behavior: "smooth",
    });
  }, [enableAnnouncementBar]);

  return (
    <>
      <PageHead
        pageTitle="Instill AI"
        pageDescription="Empower modern data stack, tapping the value of unstructured visual data with our open source community."
        pageType="main"
      />
      <div className="flex flex-col">
        <div className="mx-auto flex max-w-[1127px] flex-col px-4 xl:px-0">
          <Hero scrollHandler={scrollHandler} />
          <Vdp marginBottom="mb-20" ref={vdpRef} />
          <HowItWorks marginBottom="mb-20" />
          <NoCodeInterface marginBottom="mb-20" />
        </div>

        <div className="bg-instillGrey90">
          <div className="mx-auto max-w-[1127px] py-10 px-4 xl:py-20 xl:px-0">
            <Community />
          </div>
          <CaseStudy destinations={destinations} />
          <div className="mx-auto max-w-[1127px] py-10 px-4 xl:py-20 xl:px-0">
            <CodeShowcase />
          </div>
        </div>
        <div className="mb-20 flex w-full flex-col">
          <FaqHeader marginBottom="mb-20" />
          <div className="mx-auto flex max-w-[1127px] flex-col px-4 xl:px-0">
            <Faq />
          </div>
        </div>

        <InstillCloud />
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default HomePage;
