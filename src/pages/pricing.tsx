import * as React from "react";
import Link from "next/link";
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
        contentMaxWidth="max-w-[1500px]"
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
              className="w-[263px]"
              planDescription="For everyone"
              features={[
                "10,000 Monthly Credits",
                "1 User",
                "Unlimited Pipelines",
                "Bring Your Own API Key (BYO API Key)",
                "Unlimited Models",
                "100GB Storage for Model Image Registry",
                "Community-based Support on Discord",
              ]}
              featureDescription={null}
              cta={{
                title: "Start Building",
                onClick: () => {
                  router.push("https://instill.tech/login");
                },
              }}
            />
            <PricingInfoCard
              price="$19"
              tier="starter"
              className="w-[263px]"
              planDescription="For professional individuals"
              features={[
                "20,000 Monthly Credits",
                "1 User",
                "Unlimited Pipelines",
                "Bring Your Own API Key (BYO API Key)",
                "Unlimited Models",
                "200GB Storage for Model Image Registry",
                "Community-based Support on Discord",
                "Version Control",
              ]}
              featureDescription={null}
              cta={{
                title: "Choose Starter",
                onClick: () => {
                  router.push("https://instill.tech/login");
                },
              }}
            />
            <PricingInfoCard
              price="$199"
              tier="team"
              className="w-[263px]"
              planDescription="For small teams"
              features={[
                "200,000 Monthly Credits",
                "3 Users",
                "Unlimited Pipelines",
                "Bring Your Own API Key (BYO API Key)",
                "Unlimited Models",
                "1TB Storage for Model Image Registry",
                "Community-based Support on Discord",
                "Version Control",
              ]}
              featureDescription={null}
              cta={{
                title: "Choose Team",
                onClick: () => {
                  router.push("https://instill.tech/login");
                },
              }}
            />
            <PricingInfoCard
              price="$499"
              tier="team pro"
              className="w-[263px]"
              highlighted={false}
              planDescription="For teams with advanced collaboration"
              features={[
                "600,000 Monthly Credits",
                "Unlimited Users",
                "Unlimited Pipelines",
                "Bring Your Own API Key (BYO API Key)",
                "Unlimited Models",
                "2TB Storage for Model Image Registry",
                "Community-based Support on Discord",
                "Version Control",
                "Access Control",
              ]}
              featureDescription={null}
              cta={{
                title: "Choose Team Pro",
                onClick: () => {
                  router.push("https://instill.tech/login");
                },
              }}
            />
            <PricingInfoCard
              price="Custom"
              tier="enterprise"
              className="w-[263px]"
              planDescription="Security, support, and flexible deployment that meets performance needs"
              features={[
                "Custom Monthly Credits",
                "Unlimited Users",
                "Unlimited Pipelines",
                "Bring Your Own API Key (BYO API Key)",
                "Unlimited Models",
                "Custom Storage for Model Image Registry",
                "Community-based Support on Discord",
                "Version Control",
                "Access Control",
                "Dedicated Model Serving",
                "Model Fine-tuning",
                "Custom Pipeline Building or Component Development",
                "Dedicated Slack Channel and Email Support",
                "Enterprise-level Security",
                "Dedicated Infrastructure",
                "Private Cloud Deployment",
                "On-premise Deployment",
                "Dedicated Solution Engineers",
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
            * When a pipeline is made public, it becomes visible on&nbsp;
            <a
              href="https://instill.tech/hub"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-instillBlue50"
            >
              Instill Hub
            </a>
            &nbsp;and can be run by any user with an Instill Cloud account.
          </p>
          <p className="mx-auto flex w-auto text-semantic-fg-disabled product-body-text-3-regular xl:w-[1148px]">
            ** Instill credits are used to run pipelines and models. See the
            details&nbsp;
            <Link
              href="/docs/vdp/credit"
              className="underline hover:text-instillBlue50"
            >
              here
            </Link>
            .
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
