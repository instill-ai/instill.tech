import cn from "clsx";
import { CommonCtaButton, SectionHeader, SectionLabel } from "@/components/ui";
import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import { Button, GitHubIcon, Tag } from "@instill-ai/design-system";

export type HowItWorksProps = {
  marginBottom?: string;
};

export const HowItWorks = forwardRef<HTMLDivElement, HowItWorksProps>(
  ({ marginBottom }, ref) => {
    const router = useRouter();
    const iconProps = { width: "w-full", height: "h-full", position: "m-auto" };
    return (
      <div ref={ref} className={cn("flex flex-col py-20", marginBottom)}>
        <div className="flex flex-col gap-y-2.5">
          <SectionLabel
            text="What makes us different"
            position="mr-auto"
            textClass="!text-white"
          />
          <SectionHeader
            header="Designed for Flexibility and Scale"
            headerWidth="!font-sans !font-bold !word-spacing-normal !text-[56px]"
            headerTextColor="text-instillNeonBlue"
          />
        </div>
        <div className="mb-10 mt-8 flex flex-col">
          <div className={cn("mb-20 flex flex-1 flex-col gap-y-5 xl:mb-0")}>
            <h3 className="text-[42px] font-medium text-instillGrey90">
              Drag-and-Drop Assembly with Pre-Built Components
            </h3>
            <div className="mb-[30px] text-lg font-normal text-semantic-fg-secondary xl:mb-auto">
              <div className="space-y-4">
                <p className="font-sans text-[24px] font-normal leading-9">
                  We offer open-source, pre-built components for data
                  extraction, AI transformation, third-party app integration,
                  and flexible data manipulation. Assemble customized pipelines
                  for your use case with a drag-and-drop interface.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <CommonCtaButton
                withArrow={true}
                link={"/"}
                text="Learn more"
                position="my-auto"
              />
            </div>
          </div>
        </div>

        {/* Component 1 */}
        <div className="grid grid-cols-3">
          <div className="flex flex-col border border-[#CBD2E1]">
            <div className="bg-semantic-accent-bg px-5 py-2.5 font-sans font-normal tracking-[0.65px] text-semantic-accent-on-bg">
              AI connector
            </div>
            <div className="px-5 py-2.5">
              <div className="flex flex-row gap-x-2">
                <div className="rounded-[6px] border p-1 shadow">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.76223 0.808774C7.54474 0.808774 5.57463 2.23667 4.88793 4.34421C4.18321 4.48948 3.51751 4.78317 2.93513 5.20575C2.35276 5.62832 1.86706 6.17009 1.51036 6.79499C0.398211 8.71717 0.652167 11.1336 2.14209 12.7812C1.6821 14.1612 1.83997 15.6713 2.57459 16.9209C3.67994 18.8499 5.904 19.8384 8.08038 19.3785C8.5569 19.9163 9.14259 20.3463 9.79842 20.6399C10.4542 20.9334 11.1651 21.0838 11.8836 21.081C14.1011 21.081 16.0712 19.6531 16.7579 17.5455C18.1858 17.2502 19.4148 16.3577 20.1287 15.0948C21.2477 13.1726 20.9937 10.7561 19.504 9.10856V9.10175C19.7313 8.41964 19.8102 7.69688 19.7356 6.98179C19.661 6.26671 19.4346 5.5758 19.0715 4.95526C17.9659 3.03308 15.7416 2.04426 13.5723 2.50425C13.0936 1.96785 12.5063 1.53931 11.8495 1.24701C11.1926 0.954713 10.4812 0.805335 9.76223 0.808774ZM9.76223 2.12696L9.75542 2.13377C10.6479 2.13377 11.5061 2.4427 12.1926 3.01265C12.1651 3.02627 12.1101 3.06057 12.069 3.08124L8.03246 5.40844C7.82643 5.52521 7.70285 5.74486 7.70285 5.9852V11.4496L5.96603 10.4474V5.93022C5.96564 4.92261 6.36524 3.95606 7.07704 3.24289C7.78884 2.52972 8.75463 2.12851 9.76223 2.12696ZM14.6249 3.71784C15.2938 3.71655 15.9512 3.89188 16.5306 4.22611C17.1101 4.56034 17.591 5.04161 17.9248 5.62129C18.3641 6.39021 18.5288 7.28952 18.3778 8.16134C18.3503 8.14066 18.2955 8.11342 18.261 8.09274L14.2245 5.75848C14.1229 5.70106 14.0082 5.67087 13.8916 5.67087C13.7749 5.67087 13.6602 5.70106 13.5587 5.75848L8.82863 8.4907V6.48605L12.7348 4.22745C13.3091 3.89448 13.961 3.71887 14.6249 3.71784ZM4.64103 5.79278V10.5914C4.64103 10.8318 4.7646 11.0446 4.97064 11.1682L9.69363 13.8936L7.94975 14.9026L4.05041 12.6508C3.17899 12.1458 2.54357 11.3156 2.28361 10.3426C2.02366 9.36953 2.16042 8.33309 2.66387 7.46077C3.10799 6.69095 3.80745 6.10102 4.64103 5.79278ZM13.6891 6.98034L17.5952 9.23214C19.4145 10.2825 20.0321 12.6029 18.9818 14.4222L18.9886 14.429C18.5424 15.1979 17.8421 15.7883 17.0114 16.0904V11.2915C17.0114 11.0512 16.8878 10.8315 16.6818 10.715L11.952 7.98255L13.6891 6.98034ZM10.8194 8.63495L12.8104 9.78821V12.0879L10.8194 13.2412L8.82863 12.0879V9.78821L10.8194 8.63495ZM13.9498 10.4474L15.6867 11.4496V15.96C15.6867 18.0608 13.9841 19.7633 11.8905 19.7633V19.7565C11.0048 19.7565 10.1398 19.4475 9.46011 18.8778C9.4876 18.8642 9.54939 18.8297 9.58368 18.809L13.6202 16.4818C13.8263 16.365 13.9566 16.1454 13.9496 15.9051L13.9498 10.4474ZM12.817 13.3993V15.4037L8.91085 17.6555C7.09156 18.6991 4.77117 18.0812 3.7208 16.2687H3.72761C3.28149 15.5066 3.12337 14.6005 3.27443 13.7287C3.30192 13.7493 3.3569 13.7766 3.39119 13.7973L7.42773 16.1315C7.52928 16.1889 7.64396 16.2191 7.76062 16.2191C7.87729 16.2191 7.99197 16.1889 8.09352 16.1315L12.817 13.3993Z"
                      fill="#1D2433"
                    />
                  </svg>
                </div>
                <span className="my-auto w-full font-sans text-[18px] font-semibold">
                  Open AI
                </span>
                <div className="my-auto py-0.5">
                  <Tag
                    variant="lightGreen"
                    className="rounded-sm border-[#63D9B2] !py-0.5"
                  >
                    GA
                  </Tag>
                </div>
              </div>

              <div className="mt-2.5">
                <Button
                  variant="secondaryGrey"
                  size="lg"
                  className="!rounded-[6px] !border-semantic-bg-line !px-2 !py-0.5 !font-sans !text-[14px] !font-medium !text-semantic-fg-secondary"
                >
                  Task name
                </Button>
              </div>
              <div className="mt-2.5 text-[16px] font-normal text-semantic-fg-secondary">
                One liner to describe what the component is aimed for for this
                task.
              </div>
              <div className="mt-5 flex flex-row space-x-5 text-semantic-fg-secondary">
                <div className="flex flex-row space-x-2">
                  <div className="my-auto">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 15.75L8.92496 15.6374C8.40398 14.856 8.14349 14.4652 7.79933 14.1824C7.49464 13.9319 7.14357 13.7441 6.7662 13.6295C6.33994 13.5 5.87033 13.5 4.93112 13.5H3.9C3.05992 13.5 2.63988 13.5 2.31901 13.3365C2.03677 13.1927 1.8073 12.9632 1.66349 12.681C1.5 12.3601 1.5 11.9401 1.5 11.1V4.65C1.5 3.80992 1.5 3.38988 1.66349 3.06901C1.8073 2.78677 2.03677 2.5573 2.31901 2.41349C2.63988 2.25 3.05992 2.25 3.9 2.25H4.2C5.88016 2.25 6.72024 2.25 7.36197 2.57698C7.92646 2.8646 8.3854 3.32354 8.67302 3.88803C9 4.52976 9 5.36984 9 7.05M9 15.75V7.05M9 15.75L9.07504 15.6374C9.59602 14.856 9.85651 14.4652 10.2007 14.1824C10.5054 13.9319 10.8564 13.7441 11.2338 13.6295C11.6601 13.5 12.1297 13.5 13.0689 13.5H14.1C14.9401 13.5 15.3601 13.5 15.681 13.3365C15.9632 13.1927 16.1927 12.9632 16.3365 12.681C16.5 12.3601 16.5 11.9401 16.5 11.1V4.65C16.5 3.80992 16.5 3.38988 16.3365 3.06901C16.1927 2.78677 15.9632 2.5573 15.681 2.41349C15.3601 2.25 14.9401 2.25 14.1 2.25H13.8C12.1198 2.25 11.2798 2.25 10.638 2.57698C10.0735 2.8646 9.6146 3.32354 9.32698 3.88803C9 4.52976 9 5.36984 9 7.05"
                        stroke="#1D2433"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="my-auto">Docs</span>
                </div>
                <div className="flex flex-row space-x-1">
                  <GitHubIcon
                    color="fill-[#1D2433]"
                    height="h-[24px]"
                    position="my-auto my-auto"
                    width="w-[24px]"
                  />
                  <span className="my-auto">Github</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

HowItWorks.displayName = "HowItWorks";
