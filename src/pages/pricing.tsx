import * as React from "react";
import {
  ContentContainer,
  PageBase,
  PageHead,
  PricingInfoCard,
} from "@/components/ui";
import { useRouter } from "next/router";
import { Separator } from "@instill-ai/design-system";
import { NextPageWithLayout } from "./_app";

const PricingPage: NextPageWithLayout = () => {
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
        contentMaxWidth="max-w-[1215px]"
      >
        <div className="mb-[29px] flex flex-col space-y-5">
          <h3 className="text-center font-sans text-[42px] font-semibold leading-[45px] -tracking-[2%] text-[#1D5BD7]">
            Pricing
          </h3>
          <h2 className="text-center font-sans text-[56px] font-bold leading-[60px] -tracking-[1.75%] text-[#101828]">
            Plans for all levels of AI needs
          </h2>
          <p className="text-center font-sans text-[32px] font-normal leading-[48px] -tracking-[1.5%] text-[#475467]">
            Simple pricing to to build your AI backbone
          </p>
        </div>

        <div>
          <Separator className="mb-[13px]" />
          <Separator className="mb-2" />
        </div>

        <div className="mx-auto flex flex-col">
          <div className="mx-auto mb-16 flex flex-col space-y-4 xl:flex-row xl:gap-x-8 xl:space-y-0">
            <PricingInfoCard
              price="$0"
              tier="free cloud"
              className="h-[928px] w-[263px]"
              planDescription="For everyone"
              features={[
                "Monthly credit: 10,000",
                "Unlimited pipelines",
                "1 user",
                "Community-based support on Discord",
              ]}
              featureDescription={null}
              cta={{
                title: "Free Forever",
                onClick: () => {
                  router.push("https://github.com/instill-ai/instill-core");
                },
              }}
            />
            <PricingInfoCard
              price="$199"
              tier="team"
              className="h-[928px] w-[263px]"
              planDescription="For small teams"
              features={[
                "Monthly credit: 200,000",
                "Unlimited pipelines",
                "3 users",
                "Community-based support on Discord",
                "Version Control",
                "User permissions",
                "Upload and use your own custom models",
              ]}
              featureDescription={null}
              cta={{
                title: "Contact Us",
                onClick: () => {
                  router.push("https://cal.com/instill-ai/30min-talk");
                },
              }}
            />
            <PricingInfoCard
              price="$499"
              tier="team pro"
              className="h-[928px] w-[263px]"
              highlighted={true}
              planDescription="For teams with advanced collaboration"
              features={[
                "Monthly credit: 1,000,000",
                "Unlimited pipelines",
                "Unlimited users",
                "Community-based support on Discord",
                "Version Control",
                "User permissions",
                "Upload and use your own custom models",
              ]}
              featureDescription={null}
              cta={{
                title: "Contact Us",
                onClick: () => {
                  router.push("https://cal.com/instill-ai/30min-talk");
                },
              }}
            />
            <PricingInfoCard
              price="Custom"
              tier="enterprise"
              className="h-[928px] w-[263px]"
              planDescription="Security, support, and flexible deployment that meets performance needs"
              features={[
                "Monthly credit: Custom",
                "Unlimited pipelines",
                "Unlimited users",
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
                title: "Contact Us",
                onClick: () => {
                  router.push("https://cal.com/instill-ai/30min-talk");
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
