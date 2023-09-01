import { FC, ReactElement } from "react";

import {
  ContentContainer,
  PageBase,
  PageHead,
  PricingPlan,
  PricingPlanLayout,
} from "@/components/ui";

type GetLayOutProps = {
  page: ReactElement;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Self-host",
    price: "Free",
    subTitle: null,
    subTitleLink: null,
    description:
      "For personal or non-commercial projects without security & scalability features",
    features: [
      "End-to-end unstructured data pipelines for diverse scenarios",
      "Unlimited pre-built data connectors",
      "One-click import & deploy ML models",
      "High-performing backends",
      "Community-based support",
    ],
    featureDescription: (
      <p className="text-base font-normal leading-6 text-[#475467]">
        Start your unstructured data journey...
      </p>
    ),
    cta: (
      <a
        href="https://github.com/instill-ai/vdp"
        className="mb-4 flex h-12 w-full justify-center rounded border border-[#E1E6EF] align-middle hover:border-[#23272F] hover:bg-[#F1F3F9]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="m-auto font-sans text-base font-semibold leading-4 tracking-[2%] text-[#1D2433]">
          Deploy Now
        </span>
      </a>
    ),
    ctaDescription: "Self-host and free forever",
  },
  {
    name: "Cloud Starter",
    price: "Free",
    subTitle: null,
    subTitleLink: "/docs/instill-cloud/getting-started",
    description: "For individual or small teams with advanced features",
    features: [
      "FREE compute resource during Open Alpha",
      "Access our pre-trained ML models",
      "Unlimited API requests",
      "Community-based support",
    ],
    featureDescription: (
      <p className="text-base font-normal leading-6 text-[#475467]">
        Everything in <span className="font-semibold">Self-host</span> plus...
      </p>
    ),
    cta: (
      <a
        href="https://console.instill.tech"
        className="mb-4 flex h-12 w-full justify-center rounded bg-[#316FED] align-middle hover:bg-[#1D5BD7] hover:bg-[#1D5BD]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="m-auto font-sans text-base font-semibold leading-4 tracking-[2%] text-white">
          Start For free
        </span>
      </a>
    ),
    ctaDescription: (
      <>
        <p className="text-center text-sm font-medium leading-5 text-[#1D2433] text-opacity-80">
          Free During{" "}
          <a
            href="https://console.instill.tech"
            className="font-bold text-[#1D5BD7] hover:underline"
            target="_blank"
          >
            Open Alpha
          </a>
        </p>
        <p className="text-center text-sm font-medium leading-5 text-[#1D2433] text-opacity-80">
          No credit card needed
        </p>
      </>
    ),
  },
  {
    name: "Cloud Enterprise",
    price: "Custom",
    subTitle: null,
    subTitleLink: null,
    description:
      "For organisations with large data volume or the need for customisation",
    featureDescription: (
      <p className="text-base font-normal leading-6 text-[#475467]">
        Everything in <span className="font-semibold">Starter</span> plus...
      </p>
    ),
    features: [
      "Custom model deployment",
      "Dedicated compute resource for high model inference speed",
      "Keep your cost low",
      "Premium support",
    ],
    cta: (
      <a
        href="https://calendly.com/instill-ai/chat-with-us"
        className="mb-4 flex h-12 w-full justify-center rounded border border-[#E1E6EF] align-middle hover:border-[#23272F] hover:bg-[#F1F3F9]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="m-auto font-sans text-base font-semibold leading-4 tracking-[2%] text-[#1D2433]">
          Book A Meeting
        </span>
      </a>
    ),
    ctaDescription: "Get expert advice for free",
  },
];

const PricingPage: FC & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  return (
    <>
      <PageHead
        pageType="main"
        pageTitle="Pricing | Instill AI"
        pageDescription="Instill AI pricing"
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <div className="mb-[88px] flex flex-col">
          <h3 className="mb-3 text-center font-sans text-[32px] font-bold leading-[48px] -tracking-[2%] text-[#1D5BD7]">
            Pricing
          </h3>
          <h2 className="mb-5 text-center font-sans text-[42px] font-semibold leading-[45px] -tracking-[1.75%] text-[#101828]">
            Plans that fit your scale
          </h2>
          <p className="text-center font-sans text-2xl font-normal leading-9 -tracking-[1.5%] text-[#475467]">
            Simple pricing to build your unstructured data infrastructure
          </p>
        </div>
        <div className="grid grid-flow-row grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {pricingPlans.map((plan) => (
            <PricingPlanLayout key={plan.name} plan={plan} />
          ))}
        </div>
      </ContentContainer>
    </>
  );
};

PricingPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default PricingPage;
