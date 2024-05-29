import { Social } from "@/components/landing";
import { ContentContainer, LandingPageBase, PageHead } from "@/components/ui";
import { GetStaticProps } from "next";
import { getRepoFileContent } from "@/lib/github";
import Slide from "@/components/landing/Slide";
import { Button, Icons } from "@instill-ai/design-system";
import { StartBuildingBlock } from "@/components/tutorial";
import { NextPageWithLayout } from "./_app";
import Video from "next-video";
import getStarted from "../../videos/pipelines.mp4";

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

const HomePage: NextPageWithLayout = () => {
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
        <div className="my-10 flex flex-col space-y-8 bg-black bg-opacity-5 py-[160px] backdrop-blur-[10px] xl:px-[150px]">
          <div className="mx-auto flex justify-center gap-x-3 rounded-sm bg-white">
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
            <p className="text-center text-[42px] font-bold leading-[45px] tracking-[-1.32px] xl:text-[66px] xl:leading-[78px]">
              Orchestrate Data, Models and Pipelines for Generative AI
            </p>
          </div>
          <div>
            <p className="mb-8 text-center text-[16px] font-normal leading-6 tracking-[-0.352px] text-semantic-fg-secondary xl:text-[22px] xl:leading-[30px]">
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

      <ContentContainer
        margin="mt-[20px]"
        contentMaxWidth="max-w-[1232px] bg-[#F7F7F9] rounded-sm"
      >
        <div
          className="bg-cover bg-no-repeat py-6"
          style={{
            backgroundImage: 'url("/images/landing/section-2-bg.svg")',
            borderRadius: "12px",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-center">
            <Button
              variant="secondaryGrey"
              size="sm"
              className="rounded-3 mx-auto mb-4 !border-none !bg-[#FFFFFF80] px-3 shadow-lg"
            >
              Everything you need
            </Button>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center">
              <p className="text-center font-sans text-[24px] font-semibold leading-[28px] xl:text-[32px]">
                Accelerate the End-to-end LLM Pipeline Development
              </p>
            </div>
            <div className="flex justify-center">
              <div className="mt-2 w-[580px]">
                <p className="text-center font-sans text-[14px] font-normal text-[#4A4340] xl:text-[16px]">
                  Instill Cloud help enterprise build AI applications from
                  prototype into production with components that link private
                  data to the power of LLM.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src="/images/landing/section-2-img.svg"
              alt=""
              sizes=""
              className="hidden xl:block"
            />
            <img
              src="/images/landing/section-2-img-mobile.svg"
              alt=""
              sizes=""
              className="block xl:hidden"
            />
          </div>
        </div>
      </ContentContainer>

      <div className="mb-6 bg-opacity-80 bg-cover bg-no-repeat backdrop-blur-sm">
        <img
          src="/images/landing/section-3-bg.svg"
          alt=""
          sizes=""
          className="absolute top-[180px] hidden xl:block"
        />
        <ContentContainer
          margin="mt-[20px]"
          contentMaxWidth="max-w-[1232px] bg-[#F7F7F9] rounded-sm px-0"
        >
          <div
            style={{
              backgroundImage: 'url("/images/landing/section-hero.svg")',
              borderRadius: "8px",
              backgroundPosition: "center",
            }}
            className="hidden h-[370px] xl:block"
          ></div>
          <div
            style={{
              backgroundImage: 'url("/images/landing/section-hero-mobile.svg")',
              borderRadius: "8px",
              backgroundPosition: "center",
            }}
            className="block h-[370px] bg-cover bg-no-repeat xl:hidden"
          ></div>
          <div className="flex flex-col">
            <Button
              variant="secondaryGrey"
              size="sm"
              className="mx-auto mb-4 rounded-sm !border-none !bg-[#FFFFFF80] px-3 shadow-sm"
            >
              Everything you need
            </Button>
            <p className="mb-2 text-center font-sans text-[24px] font-semibold leading-[28px] xl:text-[32px]">
              Connect LLMs to Data, Applications and APIs
            </p>
            <div className="flex justify-center">
              <p className="w-[590px] text-center font-sans text-[14px] font-normal text-[#4A4340] xl:text-[16px]">
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

      <ContentContainer
        margin="mt-[20px]"
        contentMaxWidth="max-w-[1232px] bg-[#F7F7F9] rounded-sm"
      >
        <div
          className="bg-cover bg-no-repeat py-6"
          style={{
            backgroundImage: 'url("/images/landing/section-4-bg.svg")',
            borderRadius: "12px",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-center">
            <Button
              variant="secondaryGrey"
              size="sm"
              className="rounded-3 mx-auto mb-2 !border-none !bg-[#FFFFFF80] px-3 shadow-lg"
            >
              Everything you need
            </Button>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center">
              <p className="text-center font-sans text-[24px] font-semibold leading-[28px] xl:text-[32px]">
                Deploy or Fine-tune LLMs for your Pipelines
              </p>
            </div>
            <div className="flex justify-center">
              <div className="mt-2 w-[580px]">
                <p className="text-center font-sans text-[14px] font-normal leading-6 text-[#4A4340] xl:text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Proin nunc consequat
                  curabitur montes. Ultrices semper orci auctor viverra ipsum
                  ut. Dis malesuada amet pulvinar.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/landing/section-4-img.svg"
              alt=""
              sizes=""
              className="hidden xl:block"
            />
            <img
              src="/images/landing/section-4-img-mobile.svg"
              alt=""
              sizes=""
              className="block xl:hidden"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="secondaryColour" size="md" className="mx-auto">
              See Supported Models
            </Button>
          </div>
        </div>
      </ContentContainer>

      <div
        className="bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/landing/section-5-bg.svg")',
          backgroundSize: 600,
          backgroundPosition: "center bottom",
        }}
      >
        <div
          className="bg-cover bg-no-repeat py-6"
          style={{
            backgroundImage: 'url("/images/landing/section-5-group-1.svg")',
            backgroundSize: 200,
            backgroundPosition: "right top",
          }}
        >
          <div
            className="bg-no-repeat"
            style={{
              backgroundImage: 'url("/images/landing/section-5-bg-2.svg")',
              backgroundPosition: "top left",
            }}
          >
            <ContentContainer
              margin="mt-[20px]"
              contentMaxWidth="max-w-[1230px]"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-[600px]">
                  <p className="text-center font-sans text-[24px] font-semibold leading-[28px] xl:text-[32px]">
                    Accelerate the end-to-end LLM Pipeline Building from
                    Prototype to Production
                  </p>
                </div>
              </div>
              <div className="rounded-sm p-1 shadow-lg">
                <Video
                  src={getStarted}
                  poster={"./images/landing/poster.png"}
                  accentColor={"#316fed"}
                  // primaryColor={"#316fed"}
                  // secondaryColor={"#6194FA"}
                >
                  <track
                    kind="captions"
                    src="/get-started.vtt"
                    srcLang="en"
                    label="English"
                    default
                  />
                </Video>
              </div>
            </ContentContainer>
          </div>
        </div>

        <StartBuildingBlock contentMaxWidth="max-w-[1232px]" />
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <LandingPageBase>{page}</LandingPageBase>;
};

export default HomePage;
