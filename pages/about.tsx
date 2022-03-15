import { useRouter } from "next/router";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
import { sendAmplitudeData } from "../lib/amplitude";
import { useOnScreen } from "../hooks/useOnScreen";
import { useAmplitudeCtx } from "../context/AmplitudeContext";

const SecureYourSpotBlock = dynamic(() =>
  import("../components/ui/blocks/SecureYourSpotBlock").then(
    (mod) => mod.SecureYourSpotBlock
  )
);

const StayInTheLoopBlock = dynamic(() =>
  import("../components/ui/blocks/StayInTheLoopBlock").then(
    (mod) => mod.StayInTheLoopBlock
  )
);

interface GetLayOutProps {
  page: ReactElement;
}

interface Props {}

const AboutPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const router = useRouter();
  const { amplitudeIsInit } = useAmplitudeCtx();

  useEffect(() => {
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_about_page", { type: "navigation" });
    }
  }, [router.isReady, amplitudeIsInit]);

  // Lazy loading SecureYourSpotBlock
  const secureYourSpotBlockRef = useRef<HTMLDivElement>();
  const [loadSecureYourSpotBlock, setLoadSecureYourSpotBlock] = useState(false);
  const secureYourSpotBlockOnScreen = useOnScreen(
    secureYourSpotBlockRef,
    "100px"
  );

  useEffect(() => {
    if (!loadSecureYourSpotBlock && secureYourSpotBlockOnScreen) {
      setLoadSecureYourSpotBlock(true);
    }
  }, [secureYourSpotBlockOnScreen]);

  // Lazy loading StayInTheLoopBlock
  const stayInTheLoopBlockRef = useRef<HTMLDivElement>();
  const [loadStayInTheLoopBlock, setloadStayInTheLoopBlock] = useState(false);
  const stayInTheLoopBlockOnScreen = useOnScreen(
    secureYourSpotBlockRef,
    "100px"
  );

  useEffect(() => {
    if (!loadStayInTheLoopBlock && stayInTheLoopBlockOnScreen) {
      setloadStayInTheLoopBlock(true);
    }
  }, [stayInTheLoopBlockOnScreen]);

  return (
    <PageHead
      pageTitle="About us | Instill AI"
      pageDescription="Instill AI, founded in 2020 (June 11th 2020, to be more specific), provides no-/low-code tools to convert unstructured visual data to meaningful structured representations."
    >
      <div className="flex bg-instillGray95">
        <div className="max-w-[1440px] md:w-10/12 md:mx-auto">
          <div className="flex flex-col px-4 md:px-0 max:w-10/12 max:mx-auto">
            <div className="flex w-full pt-[87px] pb-[152px] sm:py-0 sm:h-[584px]">
              <h1 className="m-auto instill-text-h1 text-instillGray05 max-w-[934px] text-center">
                Make Vision AI Accessible to Everyone
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
              <div className="flex flex-col p-10 gap-y-5 bg-white rounded-[1px]">
                <h2 className="instill-text-h2 text-instillGray95 mb-1">
                  Our Company
                </h2>
                <p className="instill-text-body text-instillGray95">
                  Instill AI, founded in 2020 (June 11th 2020, to be more
                  specific), provides no-/low-code tools to convert unstructured
                  visual data to meaningful structured representations. Users
                  can integrate our service into their data stack, and start
                  tapping into the wealth of their visual data and benefit from
                  Vision AI in a snap.
                </p>
                <p className="instill-text-body text-instillGray95">
                  We are a small and ambitious team of passionate
                  engineers/researchers sharing an unconventional culture fused
                  by DevOps, MLOps and academic research lab. We are hands-on
                  and love to automate everything. We care about our products
                  and deliver to the highest standard.
                </p>
              </div>
              <div className="flex flex-col gap-y-5 bg-white p-10 rounded-[1px]">
                <h2 className="instill-text-h2 text-instillGray95">
                  Our Value
                </h2>
                <div className="flex flex-col">
                  <h3 className="instill-text-h3 text-instillGray95">
                    User obsession
                  </h3>
                  <p className="instill-text-body text-instillGray95">
                    We succeed only when our users succeed. Learning what can
                    really help our users and delivering the value they need
                    will always be Instill&#39;s highest interest.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="instill-text-h3 text-instillGray95">
                    High-performing company with shared values
                  </h3>
                  <p className="instill-text-body text-instillGray95">
                    We always deliver more than expected. To achieve that, we
                    are the optimisers obsessively chasing intrinsic efficiency
                    and effectiveness.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex" ref={secureYourSpotBlockRef}>
              {loadSecureYourSpotBlock && <SecureYourSpotBlock />}
            </div>
            <div className="flex mb-40" ref={stayInTheLoopBlockRef}>
              {loadStayInTheLoopBlock && <StayInTheLoopBlock />}
            </div>
          </div>
        </div>
      </div>
    </PageHead>
  );
};

AboutPage.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
};

export default AboutPage;
