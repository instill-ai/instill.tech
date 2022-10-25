import {
  ArrowRightIcon,
  BasicAccordion,
  SolidButton,
} from "@instill-ai/design-system";
import cn from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import SectionLabel from "../SectionLabel";
import FaqContent from "./FaqContent";

export type FaqProps = {
  marginBottom?: string;
};

const Faq = ({ marginBottom }: FaqProps) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionHeaderStyle = {
    headerActiveBgColor: "bg-instillGrey05",
    headerInActiveBgColor: "bg-instillGrey05",
    headerActiveTextColor: "text-instillGrey90",
    headerInActiveTextColor: "text-instillGrey90",
  };

  return (
    <div className={cn("flex w-full flex-col", marginBottom)}>
      <div className="relative mb-20 w-full">
        <h3 className="text-left font-instill text-[200px] leading-[160px] text-instillGrey90 md:text-[360px] md:leading-[360px]">
          FAQ
        </h3>
        <div className="absolute top-0 left-0 right-0 h-16 bg-instillGrey90 md:h-32" />
      </div>
      <div className="flex flex-col gap-y-10 md:flex-row md:gap-y-0 md:gap-x-10">
        <div className="flex w-full flex-col md:w-1/3">
          <SectionLabel text="Got a question?" position="mr-auto mb-2.5" />
          <h3 className="mb-5 font-mono text-4xl font-medium text-instillGrey90">
            FAQ
          </h3>
          <p className="text-base font-normal text-instillGrey70">
            This section selects a short list of frequently asked questions from
            our users, friends, candidates, investors, random people, etc.
          </p>
        </div>
        <div className="flex w-full flex-col gap-y-5 md:w-2/3">
          <BasicAccordion
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            enableHeaderIcon={true}
            itemGapY="gap-y-2.5"
            items={[
              {
                ...accordionHeaderStyle,
                header: "Is VDP open source",
                content: (
                  <FaqContent>{`Yes. VDP is open source under [Apache License 2.0](https://github.com/instill-ai/vdp/blob/main/LICENSE).`}</FaqContent>
                ),
              },
              {
                ...accordionHeaderStyle,
                header: "Why do you build VDP?",
                content: (
                  <FaqContent>
                    {`Modern data stack misses unstructured visual data processing.

It is non-trivial to process unstructured visual data though.
We used to suffer enough in devising our own deep learning computer vision models, putting the models in production, running the day-to-day operation, and endlessly building the peripheral MLOps tools to keep the production AI performance consistent.
All these happened in-house and were non-scalable.

There must be a better way, and **Visual Data Preparation (VDP)** is the answer.

To prevail Vision AI and to make it accessible to everyone, the point is not merely the algorithms (i.e., the computer vision models) but the infrastructure tooling to connect the value of the algorithms end-to-end with the modern data stack.

You can find more detailed narrative in our blog article [Why Instill AI exists](https://blog.instill.tech/why-instill-ai-exists/?utm_source=documentation&utm_medium=link) and [Missing piece in modern data stack: visual data preparation](https://blog.instill.tech/visual-data-preparation/?utm_source=documentation&utm_medium=link).`}
                  </FaqContent>
                ),
              },
              {
                ...accordionHeaderStyle,
                header: "Who are behind VDP?",
                content: (
                  <FaqContent>{`We are a nimble team formed by members working for years in Computer Vision, Machine Learning, Deep Learning, large-scale database, and cloud-native applications/infrastructure.
We have in-depth experiences in developing and maintaining a Vision AI system.

Before we started to build VDP, we had fought with streaming large volume data (billions of images a day!) to automate vision tasks using deep learning-based computer vision models, sweating blood to build everything from scratch.
                  
We have learned that model serving for an effective end-to-end data flow concerns not only **high throughput** and **low latency** but also **cost effectiveness**. These criteria are non-trivial to achieve altogether.
In the end, we had successfully built a battle-proven Vision AI system in-house and have the system run in production for years.
                  
What we had built can actually be modularised into working components to benefit a broader spectrum of vision tasks and industry sectors.
We believe it's time to apply our experiences to make Vision AI more accessible to everyone especially the data industry.
                  
In spite of all that, VDP is an open-source project. Everyone is more than welcome to contribute to VDP in any forms. Please refer to the [Contribution](../start-here/getting-started#contribution) section.`}
                  </FaqContent>
                ),
              },
              {
                ...accordionHeaderStyle,
                header: "Is VDP free?",
                content: (
                  <FaqContent>{`Yes. VDP is open source so you can self-host it in your basement for free.

In addition, Instill Cloud (coming soon!) is our hosting service of VDP which offers free-forever tier for hobby projects and prototyping.
                  
If you are interested in the hosting service of VDP, we've started signing up users to our private alpha. [Join the waitlist](https://www.instill.tech/get-access/?utm_source=documentation&utm_medium=link) and we'll contact you when we're ready.`}
                  </FaqContent>
                ),
              },
              {
                ...accordionHeaderStyle,
                header: "How do you make money?",
                content: (
                  <FaqContent>{`We offer fully managed VDP service on Instill Cloud (coming soon!) with Team and Enterprise tiers to organisations that want to get all the power of VDP for their teams, without any hassle.

If you are interested in the hosting service of VDP, we've started signing up users to our private alpha. [Join the waitlist](https://www.instill.tech/get-access/?utm_source=documentation&utm_medium=link) and we'll contact you when we're ready.`}
                  </FaqContent>
                ),
              },
            ]}
          />
          <SolidButton
            type="button"
            color="primaryLight"
            endIcon={
              <ArrowRightIcon
                width="w-[28px]"
                height="h-[28px]"
                color="fill-instillNeonBlue"
                position="my-auto"
              />
            }
            padding="px-5 py-2.5"
            itemGapX="gap-x-5"
            position="xl:ml-auto"
            onClickHandler={() =>
              router.push("https://www.instill.tech/docs/start-here/faq")
            }
          >
            <p className="text-2xl font-normal">See all FAQ</p>
          </SolidButton>
        </div>
      </div>
    </div>
  );
};

export default Faq;
