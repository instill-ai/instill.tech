import React, { FC, ReactElement } from "react";
import {
  ContentContainer,
  PageBase,
  PageHead,
  PricingInfoCard,
} from "@/components/ui";
import { useRouter } from "next/router";

type GetLayOutProps = {
  page: ReactElement;
};

const PricingPage: FC & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const router = useRouter();
  return (
    <React.Fragment>
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

        <div className="mx-auto flex flex-col">
          <div className="mx-auto mb-8 flex flex-col space-y-4 xl:flex-row xl:gap-x-8 xl:space-y-0">
            <PricingInfoCard
              price="$0"
              tier="free"
              className="w-[263px]"
              planDescription="The basics for individuals and organizations"
              features={[
                "Unlimited public/private pipelines*",
                "Rate-limited runs**",
                "1 user",
                "Community-based support on Discord",
              ]}
              featureDescription={null}
              cta={{
                title: "Start building",
                onClick: () => {
                  router.push("https://github.com/instill-ai/vdp");
                },
              }}
            />
            <PricingInfoCard
              price="$9"
              tier="pro"
              className="w-[263px]"
              planDescription="For professionals to experience runs without any restrictions"
              features={[
                "Unlimited public/private pipelines",
                "Non rate-limited runs",
                "1 user",
                "Community-based support on Discord",
                "Version Control",
              ]}
              featureDescription={null}
              cta={{
                title: "choose pro",
                onClick: () => {
                  router.push("https://console.instill.tech/settings/billing");
                },
              }}
            />
            <PricingInfoCard
              price="$14"
              tier="team"
              className="w-[263px]"
              planDescription="For small teams with advanced collaboration and no organization restrictions"
              features={[
                "Unlimited public/private pipelines",
                "Non rate-limited runs",
                "Up to 5 users",
                "Dedicated Slack Channel and up to 1 hour of weekly dedicated support",
                "Version Control",
                "User permissions",
                "Upload and use your own custom models",
              ]}
              featureDescription={null}
              cta={{
                title: "Choose team",
                onClick: () => {
                  router.push("https://console.instill.tech/settings/billing");
                },
              }}
            />
            <PricingInfoCard
              price="Custom"
              tier="enterprise"
              className="w-[263px]"
              planDescription="Security, support, and flexible deployment that meets performance needs"
              features={[
                "Unlimited public/private pipelines",
                "Non rate-limited runs",
                "Dedicated Slack Channel and up to 1 hour of weekly dedicated support",
                "Version Control",
                "User permissions",
                "Upload and use your own custom models",
                "Enterprise-level security",
                "Dedicated infrastructure",
                "Private cloud deployment",
                "On-prem deployment",
                "Access Control",
                "Dedicated solution engineers",
              ]}
              featureDescription={null}
              cta={{
                title: "Book a meeting",
                onClick: () => {
                  router.push("mailto:support@instill.tech");
                },
              }}
            />
          </div>
          <p className="mx-auto flex w-auto text-semantic-fg-disabled product-body-text-3-regular xl:w-[1148px]">
            * When a pipeline is made public, it becomes visible on Instill Hub
            and can be run by any user with an Instill Cloud account.
          </p>
          <p className="mx-auto flex w-auto text-semantic-fg-disabled product-body-text-3-regular xl:w-[1148px]">
            ** A run refers to the execution of a pipeline. To ensure fair
            usage, there is a rate limit of 10 runs per minute on the Free plan,
            also applicable to the owner of the pipeline.
          </p>
        </div>
      </ContentContainer>
    </React.Fragment>
  );
};

PricingPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default PricingPage;
