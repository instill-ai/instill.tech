import { FC, ReactElement } from "react";
import dynamic from "next/dynamic";
import cn from "clsx";
import {
  BuildAppsInAction,
  Hero,
  HowItWorksProps,
  SelfHost,
  Social,
} from "@/components/landing";
import { ContentContainer, LandingPageBase, PageHead } from "@/components/ui";
import { GetStaticProps } from "next";
import { getRepoFileContent } from "@/lib/github";
import Slide from "@/components/landing/Slide";
import { Button, Icons } from "@instill-ai/design-system";
import { StartBuildingBlock } from "@/components/tutorial";

const HowItWorks = dynamic<HowItWorksProps>(() =>
  import("@/components/landing").then((mod) => mod.HowItWorks)
);

/* eslint-disable-next-line @typescript-eslint/ban-types */
const Community = dynamic<{}>(() =>
  import("@/components/landing").then((mod) => mod.Community)
);

export const getStaticProps: GetStaticProps = async () => {
  const destinationDefinitions = await getRepoFileContent(
    "instill-ai",
    "connector-destination",
    "pkg/airbyte/config/seed/definitions.json"
  );

  const buf = Buffer.from(destinationDefinitions.content, "base64").toString(
    "utf-8"
  );

  const destinationArray: Record<string, string>[] = JSON.parse(buf);

  return {
    props: {
      destinations: destinationArray.map((e) => {
        return {
          name: e.title,
          icon: e.icon ?? null,
        };
      }),
    },
  };
};

interface GetLayOutProps {
  page: ReactElement;
}

const HomePage: FC & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  return (
    <>
      <PageHead
        pageType="main"
        pageTitle="Instill AI"
        pageDescription="Empower modern data stack, tapping the value of unstructured data with our open source community."
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />

      <ContentContainer margin="mt-[20px]" contentMaxWidth="max-w-[1232px]">
        <div className="my-10 flex flex-col space-y-8 bg-black bg-opacity-5 px-[150px] py-[160px] backdrop-blur-[10px]">
          <div className="flex justify-center gap-x-3">
            <Button
              variant="secondaryGrey"
              size="sm"
              className="rounded-sm !border-none shadow"
            >
              What’s new?
            </Button>

            <Button
              variant="secondaryGrey"
              size="sm"
              className="gap-x-2 rounded-sm !border-none shadow"
            >
              Check our new feature
              <Icons.ArrowRight className="h-4 w-4 stroke-semantic-fg-primary" />
            </Button>
          </div>
          <div>
            <p className="text-center text-[66px] font-bold leading-[78px] tracking-[-1.32px]">
              Orchestrate Data, Models and Pipelines for Generative AI
            </p>
          </div>
          <div>
            <p className="mb-8 text-center text-[22px] font-normal leading-[30px] tracking-[-0.352px] text-semantic-fg-secondary">
              Instill AI empowers your team to spend less time building,
              debuggin, deploying and managing infrastructure, and focus on your
              AI use cases.
            </p>
          </div>

          <div className="flex justify-center gap-x-4">
            <Button variant="primary" size="lg">
              Get started
            </Button>

            <Button variant="tertiaryColour" size="lg" className="gap-x-2">
              Request a Demo{" "}
              <Icons.ArrowRight className="h-4 w-4 stroke-semantic-accent-default" />
            </Button>
          </div>
        </div>

        <Slide>
          <Social />
        </Slide>
      </ContentContainer>

      <div className="mb-6 bg-opacity-80 bg-cover bg-no-repeat backdrop-blur-sm">
        <img
          src="/images/landing/section-3-bg.svg"
          alt=""
          sizes=""
          className="absolute top-[180px]"
        />
        <ContentContainer
          margin="mt-[20px]"
          contentMaxWidth="max-w-[1232px] bg-[#F7F7F9] rounded-sm"
        >
          <div
            style={{
              backgroundImage: 'url("/images/landing/section-hero.svg")',
              borderRadius: "8px",
            }}
            className="h-[370px]"
          >
          </div>
          <div className="flex flex-col">
            <Button
              variant="secondaryGrey"
              size="sm"
              className="mx-auto mb-2 rounded-sm !border-none !bg-[#FFFFFF80] px-3 shadow-sm"
            >
              Everything you need
            </Button>
            <p className="mb-2 text-center font-sans text-[32px] font-semibold">
              Connect LLMs to Data, Applications and APIs
            </p>
            <div className="flex justify-center">
              <p className="w-[590px] text-center font-sans text-[16px] font-normal">
                Lorem ipsum dolor sit amet consectetur. Proin nunc consequat
                curabitur montes. Ultrices semper orci auctor viverra ipsum ut.
                Dis malesuada amet pulvinar.
              </p>
            </div>

            <Button
              variant="secondaryColour"
              size="md"
              className="mx-auto mb-8 mt-6"
            >
              See All Integrations
            </Button>
          </div>
        </ContentContainer>
      </div>
      <StartBuildingBlock contentMaxWidth="max-w-[1232px]" />
    </>
  );
};

HomePage.getLayout = (page) => {
  return <LandingPageBase>{page}</LandingPageBase>;
};

export default HomePage;
