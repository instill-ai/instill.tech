import { FC, ReactElement, useCallback, useRef } from "react";
import dynamic from "next/dynamic";

import {
  CaseStudyProps,
  Community,
  FaqProps,
  Hero,
  HowItWorks,
  InstillCloud,
  NoCodeInterface,
  Vdp,
} from "@/components/landing";
import { PageBase, PageHead } from "@/components/ui";
import { FaqHeader } from "@/components/landing";

const CaseStudy = dynamic<CaseStudyProps>(() =>
  import("@/components/landing").then((mod) => mod.CaseStudy)
);

const Faq = dynamic<FaqProps>(() =>
  import("@/components/landing").then((mod) => mod.Faq)
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
        <div className="mx-auto flex max-w-[1127px] flex-col px-4 xl:px-0">
          <Hero scrollHandler={scrollHandler} />
          <Vdp marginBottom="mb-20" />
          <HowItWorks marginBottom="mb-20" />
          <NoCodeInterface marginBottom="mb-20" />
        </div>

        <div className="bg-instillGrey90">
          <div className="mx-auto flex max-w-[1127px] flex-col py-10 px-4 xl:py-20 xl:px-0">
            <Community />
          </div>
          <CaseStudy />
        </div>
        <div className="mb-20 flex w-full flex-col bg-white">
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
