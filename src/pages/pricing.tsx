import * as React from "react";
import {
  ContentContainer,
  PageBase,
  PageHead,
  PricingInfoCard,
} from "@/components/ui";
import { useRouter } from "next/router";
import { Button, Logo, Separator } from "@instill-ai/design-system";
import { StartBuildingBlock } from "@/components/article";
import { PriceTable } from "@/components/pricing";
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
        margin="mt-[56px] mb-[20px]"
        contentMaxWidth="max-w-[1215px]"
      >
        <div className="mb-[40px] flex flex-col justify-center space-y-5">
          <div className="flex justify-center">
            <h2 className="w-[550px] text-center font-sans text-[56px] font-bold leading-[60px] -tracking-[1.75%] text-[#101828]">
              Choose the Plan that Fits your Scale
            </h2>
          </div>
          <div className="flex justify-center">
            <p className="w-[500px] text-center font-sans text-[18px] font-normal leading-[48px] -tracking-[1.5%] text-[#000000B2]">
              Simple pricing to to build your AI backbone
            </p>
          </div>
        </div>

        <div className="mb-0 flex flex-col items-end space-y-4 xl:mx-auto xl:flex-row xl:gap-x-14 xl:space-y-0">
          <PricingInfoCard
            price="Free"
            tier="free"
            className="h-[424px] w-full xl:w-[240px]"
            features={[
              "Up to 5 project members",
              "Unlimited tasks and projects",
              "2GB storage",
              "Basic support",
            ]}
            featureDescription={null}
            cta={{
              title: "Get Started",
              onClick: () => {
                router.push("https://github.com/instill-ai/instill-core");
              },
            }}
          />
          <PricingInfoCard
            price="19"
            tier="starter"
            className="h-[544px] w-full xl:w-[240px]"
            features={[
              "Up to 50 project members",
              "Unlimited tasks and projects",
              "50GB storage",
              "Integrations",
              "Priority support",
              "Advanced support",
              "Export support",
            ]}
            featureDescription={null}
            cta={{
              title: "Sign Up New",
              onClick: () => {
                router.push("https://instill.tech/login");
              },
            }}
          />
          <div
            style={{
              backgroundImage: 'url("/images/pricing/glow-5.png")',
              borderRadius: "16px",
              backgroundPosition: "right",
            }}
            className="w-full bg-cover bg-no-repeat xl:w-auto"
          >
            <PricingInfoCard
              price="199"
              tier="team"
              className="h-[624px] w-full bg-[#FFFFFF99] xl:w-[240px]"
              features={[
                "Up to 50 project members",
                "Unlimited tasks and projects",
                "50GB storage",
                "Integrations",
                "Priority support",
                "Advanced support",
                "Export support",
                "Export support",
                "Export support",
              ]}
              featureDescription={null}
              cta={{
                title: "Sign Up Now",
                onClick: () => {
                  router.push("https://instill.tech/login");
                },
              }}
            />
          </div>
          <PricingInfoCard
            price="499"
            tier="team pro"
            className="h-[704px] w-full xl:w-[240px]"
            features={[
              "Up to 5 project members",
              "Unlimited tasks and projects",
              "200GB storage",
              "Integrations",
              "Dedicated account manager",
              "Custom fields",
              "Advanced analytics",
              "Export capabilities",
              "Private cloud deployment",
              "API access",
              "Advanced security features",
            ]}
            featureDescription={null}
            cta={{
              title: "Sign Up Now",
              onClick: () => {
                router.push("https://cal.com/instill-ai/30min-talk");
              },
            }}
          />
        </div>
      </ContentContainer>

      <ContentContainer margin="mt-[20px]" contentMaxWidth="max-w-[1127px]">
        <div
          style={{
            backgroundImage: 'url("/images/articles/glow.png")',
            borderRadius: "8px",
          }}
          className="bg-opacity-80 bg-cover bg-no-repeat backdrop-blur-sm"
        >
          <div className="hidden xl:block">
            <div className="flex flex-row gap-x-3 rounded-sm bg-[#FFFFFF99] px-4 py-[60px] shadow-lg">
              <div className="flex items-center justify-start gap-x-2">
                <p className="font-sans text-[32px] font-semibold leading-[36px]">
                  Enterprise
                </p>
                <div className="rounded-sm bg-white p-2 shadow-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_863_26739)">
                      <path
                        d="M8.33366 12.4993L5.77095 15.0941C5.41348 15.456 5.23475 15.637 5.08112 15.6498C4.94784 15.6608 4.81734 15.6073 4.73029 15.5057C4.62996 15.3887 4.62996 15.1343 4.62996 14.6256V13.3257C4.62996 12.8693 4.25622 12.5391 3.80466 12.473V12.473C2.71178 12.3129 1.85347 11.4546 1.69339 10.3617C1.66699 10.1815 1.66699 9.96645 1.66699 9.53638V5.66602C1.66699 4.26588 1.66699 3.56582 1.93948 3.03104C2.17916 2.56063 2.56161 2.17818 3.03202 1.9385C3.5668 1.66602 4.26686 1.66602 5.66699 1.66602H11.8337C13.2338 1.66602 13.9339 1.66602 14.4686 1.9385C14.939 2.17818 15.3215 2.56063 15.5612 3.03104C15.8337 3.56582 15.8337 4.26588 15.8337 5.66602V9.16602M15.8337 18.3327L14.02 17.0717C13.765 16.8945 13.6376 16.8059 13.4988 16.743C13.3757 16.6873 13.2462 16.6467 13.1133 16.6222C12.9635 16.5946 12.8083 16.5946 12.4978 16.5946H11.0003C10.0669 16.5946 9.60019 16.5946 9.24368 16.4129C8.93007 16.2531 8.6751 15.9982 8.51532 15.6846C8.33366 15.3281 8.33366 14.8613 8.33366 13.9279V11.8327C8.33366 10.8993 8.33366 10.4326 8.51532 10.076C8.6751 9.76243 8.93007 9.50746 9.24368 9.34767C9.60019 9.16602 10.0669 9.16602 11.0003 9.16602H15.667C16.6004 9.16602 17.0671 9.16602 17.4236 9.34767C17.7372 9.50746 17.9922 9.76243 18.152 10.076C18.3337 10.4326 18.3337 10.8993 18.3337 11.8327V14.0946C18.3337 14.8712 18.3337 15.2594 18.2068 15.5657C18.0376 15.9741 17.7132 16.2986 17.3048 16.4677C16.9985 16.5946 16.6102 16.5946 15.8337 16.5946V18.3327Z"
                        stroke="#1D2433"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_863_26739">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="mx-auto">
                <Separator orientation="vertical" />
              </div>
              <div className="">
                <p className="mb-0 font-mono text-[18px] leading-5">
                  Part of a team of 5+?
                </p>
                <p className="font-mono text-[18px] leading-5">
                  Our team plan lets you customize your license for multiple
                  projects and team members. Contact us for more info.
                </p>
              </div>
              <div className="flex w-[24%] items-center justify-end">
                <Button variant="primary" size="lg" className="!mx-4">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className="block xl:hidden">
            <div className="flex flex-col gap-x-3 rounded-sm bg-[#FFFFFF99] p-4 shadow-lg xl:block">
              <div className="mb-6 flex items-center justify-center">
                <p className="font-sans text-[32px] font-semibold leading-[36px]">
                  Enterprise
                </p>
              </div>
              <div className="mb-12 flex items-center justify-center">
                <div className="rounded-sm bg-white p-2 shadow-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_863_26739)">
                      <path
                        d="M8.33366 12.4993L5.77095 15.0941C5.41348 15.456 5.23475 15.637 5.08112 15.6498C4.94784 15.6608 4.81734 15.6073 4.73029 15.5057C4.62996 15.3887 4.62996 15.1343 4.62996 14.6256V13.3257C4.62996 12.8693 4.25622 12.5391 3.80466 12.473V12.473C2.71178 12.3129 1.85347 11.4546 1.69339 10.3617C1.66699 10.1815 1.66699 9.96645 1.66699 9.53638V5.66602C1.66699 4.26588 1.66699 3.56582 1.93948 3.03104C2.17916 2.56063 2.56161 2.17818 3.03202 1.9385C3.5668 1.66602 4.26686 1.66602 5.66699 1.66602H11.8337C13.2338 1.66602 13.9339 1.66602 14.4686 1.9385C14.939 2.17818 15.3215 2.56063 15.5612 3.03104C15.8337 3.56582 15.8337 4.26588 15.8337 5.66602V9.16602M15.8337 18.3327L14.02 17.0717C13.765 16.8945 13.6376 16.8059 13.4988 16.743C13.3757 16.6873 13.2462 16.6467 13.1133 16.6222C12.9635 16.5946 12.8083 16.5946 12.4978 16.5946H11.0003C10.0669 16.5946 9.60019 16.5946 9.24368 16.4129C8.93007 16.2531 8.6751 15.9982 8.51532 15.6846C8.33366 15.3281 8.33366 14.8613 8.33366 13.9279V11.8327C8.33366 10.8993 8.33366 10.4326 8.51532 10.076C8.6751 9.76243 8.93007 9.50746 9.24368 9.34767C9.60019 9.16602 10.0669 9.16602 11.0003 9.16602H15.667C16.6004 9.16602 17.0671 9.16602 17.4236 9.34767C17.7372 9.50746 17.9922 9.76243 18.152 10.076C18.3337 10.4326 18.3337 10.8993 18.3337 11.8327V14.0946C18.3337 14.8712 18.3337 15.2594 18.2068 15.5657C18.0376 15.9741 17.7132 16.2986 17.3048 16.4677C16.9985 16.5946 16.6102 16.5946 15.8337 16.5946V18.3327Z"
                        stroke="#1D2433"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_863_26739">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="mb-6 text-center">
                <p className="mb-0 font-mono text-[18px] leading-6">
                  Part of a team of 5+?
                </p>
                <p className="font-mono text-[18px] leading-5">
                  Our team plan lets you customize your license for multiple
                  projects and team members. Contact us for more info.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Button variant="primary" size="lg" className="!mx-4">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      <PriceTable />

      <StartBuildingBlock />
    </React.Fragment>
  );
};

PricingPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default PricingPage;
