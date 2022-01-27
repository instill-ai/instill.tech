import { FC, ReactElement } from "react";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
import { SecureYourSpotBlock } from "../components/ui/blocks/SecureYourSpotBlock";
import * as classNames from "classnames";
import { SubscriptionEmailForm } from "../components/forms/SubscriptionEmailForm";

interface GetLayOutProps {
  page: ReactElement;
}

interface Props {}

const AboutPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const elementMaxWidth = "max-w-[1440px] md:w-10/12 md:mx-auto";

  return (
    <PageHead
      pageTitle="About us | Instill Ai"
      pageDescription="Instill AI, founded in 2020 (June 11th 2020, to be more specific), provides no-/low-code tools to convert unstructured visual data to meaningful structured representations."
    >
      <div className="flex flex-col">
        <div className="flex w-full sm:h-[500px]">
          <h1 className="m-auto instill-text-h1 text-instillGray05 max-w-[934px] text-center">
            Make Vision AI Accessible to Everyone
          </h1>
        </div>
        <div
          className={classNames.default(
            "grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 md:gap-x-6 md:gap-y-6 mb-[84px]",
            elementMaxWidth
          )}
        >
          <div className="flex flex-col p-10 gap-y-5 bg-white">
            <h2 className="instill-text-h2 text-instillGray95 mb-1">
              Our Company
            </h2>
            <p className="instill-text-body text-instillGray95">
              Instill AI, founded in 2020 (June 11th 2020, to be more specific),
              provides no-/low-code tools to convert unstructured visual data to
              meaningful structured representations. Users can integrate our
              service into their data stack, and start tapping into the wealth
              of their visual data and benefit from Vision AI in a snap.
            </p>
            <p className="instill-text-body text-instillGray95">
              We are a small and ambitious team of passionate
              engineers/researchers sharing an unconventional culture fused by
              DevOps, MLOps and academic research lab. We are hands-on and love
              to automate everything. We care about our products and deliver to
              the highest standard.
            </p>
          </div>
          <div className="flex flex-col gap-y-5 bg-white p-10">
            <h2 className="instill-text-h2 text-instillGray95">Our Value</h2>
            <div className="flex flex-col">
              <h3 className="instill-text-h3 text-instillGray95">
                User obsession
              </h3>
              <p className="instill-text-body text-instillGray95">
                We succeed only when our customers succeed. Learning what can
                really help our customers and delivering the value they need
                will always be Instill&#39;s highest interest.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="instill-text-h3 text-instillGray95">
                High-performing company with shared values
              </h3>
              <p className="instill-text-body text-instillGray95">
                We always deliver more than expected. To achieve that, we are
                the optimisers obsessively chasing intrinsic efficiency and
                effectiveness.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <SecureYourSpotBlock />
          </div>
        </div>
        <div className={elementMaxWidth}>
          <SubscriptionEmailForm />
        </div>
      </div>
    </PageHead>
  );
};

AboutPage.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
};

export default AboutPage;
