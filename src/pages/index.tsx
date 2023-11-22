import { FC, ReactElement } from "react";
import { CaseStudyProps } from "@/components/landing";
import { PageHead } from "@/components/ui";
import { GetStaticProps } from "next";
import { getRepoFileContent } from "@/lib/github";
import cn from "clsx";
import {
  BaseLayout,
  Hero,
  SubscribeNewsletterForm,
} from "@/components/hacktoberfest";
import {
  BigQueryIcon,
  Button,
  ComplicateIcons,
  DiscordIcon,
  GitHubIcon,
  GoogleDriveIcon,
  GoogleSheetIcon,
  Icons,
  ImageClassificationIcon,
  Input,
  InstanceSegmentationIcon,
  KeypointDetectionIcon,
  Logos,
  ObjectDetectionIcon,
  OnnxIcon,
  PostgreSqlIcon,
  PyTorchIcon,
  PythonIcon,
  SemanticSegmentationIcon,
  Tag,
  TensorFlowIcon,
} from "@instill-ai/design-system";
import Image from "next/image";
import { Jumbotron } from "@/components/hacktoberfest/jumbotron";
// to detect language and automatically redirect to the approprate/[locale] page

interface GetLayOutProps {
  page: ReactElement;
}

const HacktoberfestPage: FC & {
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

      <div className="mx-auto w-full max-w-[1127px] px-4 xl:px-0">
        {/* Section 1 */}

        <Jumbotron />

        <Hero />

        {/* Section 2 */}
        <div className="flex justify-center py-10 xl:py-20">
          <div className="flex flex-col gap-y-5">
            <div className="flex justify-center">
              <div
                className={cn(
                  "flex flex-shrink rounded bg-semantic-success-bg px-4 py-3"
                )}
              >
                <div className="my-auto text-base font-normal uppercase text-semantic-success-default product-button-button-1">
                  Do You Know?
                </div>
              </div>
            </div>
            <h1
              className={cn(
                "font-['IBM Plex Sans'] w-full text-center text-2xl font-semibold leading-7 text-semantic-fg-primary-on-bg-secondary xl:text-[56px] xl:font-bold xl:leading-[78px]"
              )}
            >
              AI Apps Rely on Unstructured Data Infrastructure
            </h1>

            <div className="flex flex-col xl:flex-row">
              <div className="flex w-full justify-center xl:w-1/5">
                <div className="flex flex-col text-center">
                  <Image
                    src="/hacktoberfest/arrow-right.svg"
                    width={200}
                    height={112}
                    alt="Console Cloud Dashboard"
                    className="ml-12 hidden xl:block"
                  />
                  <p className="hidden text-white product-body-text-3-medium xl:block">
                    Various AI applications for diverse use cases
                  </p>
                </div>
              </div>

              <div className="w-full xl:w-3/5">
                <div className="flex flex-col">
                  <div className="mb-5 mt-10 w-full text-center xl:hidden">
                    <h1 className="font-['IBM Plex Sans'] text-lg font-semibold leading-tight text-white">
                      AI apps for diverse use cases
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex w-full flex-col pt-5 xl:w-3/5">
                      <div className="mb-2 flex flex-wrap justify-center gap-2">
                        <Tag variant="darkNeutral">LLM Apps</Tag>
                        <Tag variant="darkNeutral">Vision Apps</Tag>
                        <Tag variant="darkNeutral">Image Generators</Tag>
                        <Tag variant="darkNeutral">Audio Apps</Tag>
                        <Tag variant="darkNeutral">More</Tag>
                      </div>
                      <div className="flex justify-center gap-x-2.5"></div>
                    </div>
                  </div>
                  <div className="my-5 w-full text-center xl:hidden">
                    <h1 className="font-['IBM Plex Sans'] text-lg font-semibold leading-tight text-white">
                      AI-powered unstructured data infrastructure forms the
                      backbone
                    </h1>
                  </div>
                  <div className="flex justify-center pt-5">
                    <div className="flex w-full flex-col xl:w-5/6">
                      <div className="mb-2 flex flex-wrap justify-center gap-2">
                        <Tag variant="lightNeutral" className="hidden xl:block">
                          Data Extraction
                        </Tag>
                        <Tag variant="lightNeutral" className="hidden xl:block">
                          Data Transform via AI Model Inference
                        </Tag>
                        <Tag variant="lightNeutral">Customizable Data Flow</Tag>
                        <Tag variant="lightNeutral" className="hidden xl:block">
                          Flexible Flow Orchestration
                        </Tag>
                        <Tag variant="lightNeutral">Troubleshooting</Tag>
                        <Tag variant="lightNeutral" className="hidden xl:block">
                          Evaluation
                        </Tag>
                        <Tag variant="lightNeutral">Version Control</Tag>
                        <Tag variant="lightNeutral">Access Control</Tag>
                        <Tag variant="lightNeutral" className="hidden xl:block">
                          Monitoring & Logging
                        </Tag>
                        <Tag variant="lightNeutral" className="hidden xl:block">
                          Data Management
                        </Tag>
                        <Tag variant="lightNeutral">Model Deployment</Tag>
                        <Tag variant="lightNeutral">Model Training</Tag>
                        <Tag variant="lightNeutral">
                          Scalability & Reliability
                        </Tag>
                        <Tag variant="lightNeutral" className="hidden xl:block">
                          Extend to new Use Cases
                        </Tag>
                        <Tag variant="lightNeutral">More</Tag>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-end xl:w-1/5">
                <div className="flex items-end justify-center text-white">
                  <div className="flex flex-col">
                    <Image
                      src="/hacktoberfest/arrow-left.svg"
                      width={100}
                      height={212}
                      alt="hacktoberfest arrow left"
                      className="hidden xl:block"
                    />
                    <p className="hidden text-white product-body-text-3-medium xl:block">
                      The backbone of these apps is the AI-powered unstructured
                      data infrastructure, which should effectively handle...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}

        <div className="flex justify-center py-10 xl:py-20">
          <div className="flex flex-col gap-y-5">
            <h1
              className={cn(
                "font-['IBM Plex Sans'] w-full text-center text-2xl font-semibold leading-7 text-semantic-fg-primary-on-bg-secondary xl:text-[42px] xl:leading-[45px]"
              )}
            >
              Meet Our Open Source Unstructured Data ETL Stack
            </h1>
            <div
              className={cn(
                "mb-20 hidden text-center font-sans text-[18px] text-lg font-light text-white xl:block"
              )}
            >
              Instill Core - Powering AI-first applications. It provides an
              open-source AI infrastructure tailored for unstructured data,
              enabling versatile AI application development.
            </div>

            <div className="font-['IBM Plex Sans'] text-center text-lg font-normal leading-7 text-white text-opacity-75 xl:hidden">
              Instill Core - Powering AI-first applications
            </div>

            <div className="xl:flex xl:justify-center">
              <div className="flex flex-col gap-y-3 xl:flex-row xl:gap-x-5">
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="w-full gap-x-2 xl:w-auto"
                >
                  <a
                    href="https://discord.gg/sevxWsqpGh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DiscordIcon
                      width="w-5"
                      height="h-5"
                      color="fill-white"
                      position="my-auto"
                    />
                    Join Community
                  </a>
                </Button>

                <Button
                  asChild
                  variant="white"
                  size="lg"
                  className="w-full items-center gap-x-2 border-semantic-bg-primary xl:w-auto"
                >
                  <a
                    href="https://www.instill.tech/docs/?utm_source=product&utm_medium=button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M14 17H8M16 13H8M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z"
                        stroke="#fff"
                        strokeOpacity="0.8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Read our Docs
                    <Icons.ArrowRight className="h-5 w-5 stroke-semantic-bg-primary" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}

        <div className="py-10 xl:py-20">
          <div className="flex flex-col gap-x-10 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <div className="flex flex-row justify-center xl:justify-start">
                <div className="flex gap-x-7 gap-y-3 py-3">
                  <div className="rounded bg-white xl:rounded-md">
                    <Logos.VDPSquare className="h-10 w-10 xl:h-20 xl:w-20" />
                  </div>
                  <div className="my-auto">
                    <h1 className="font-['IBM Plex Sans'] text-2xl font-semibold leading-7 text-white xl:text-[42px] xl:leading-[45px]">
                      Instill VDP
                    </h1>
                  </div>
                </div>
              </div>
              <div className="xl:hidden">
                <h1 className="font-['IBM Plex Sans'] mb-4 text-center text-2xl font-semibold leading-7 text-white">
                  Build Versatile AI Faster
                </h1>
                <p className="font-['IBM Plex Sans'] text-center text-lg font-normal leading-snug text-white">
                  Effortless data connection, versatile AI pipelines, visual
                  testing, and easy sharing
                </p>
              </div>
              <div>
                <p className="font-['IBM Plex Sans'] hidden text-lg font-medium leading-snug text-white xl:block xl:text-[28px]">
                  Simplify unstructured data journey for AI apps
                </p>
              </div>
              <div className="font-['IBM Plex Sans'] hidden px-4 py-7 text-lg font-normal leading-relaxed text-white xl:block">
                <ul>
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Connect to your unstructured data effortlessly
                  </li>
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Build pipelines to power versatile AI features in your
                    applications
                  </li>
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Test pipelines visually with a single click to see output at
                    each step
                  </li>

                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Share built pipelines with anyone to showcase your work
                  </li>
                </ul>
              </div>

              <div className="my-7 flex flex-col xl:flex-row">
                <Button
                  asChild
                  variant="secondaryGrey"
                  size="lg"
                  className="flex items-center gap-x-2"
                >
                  <a
                    href="https://github.com/instill-ai/vdp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-5"
                      height="h-5"
                      color="fill-[#000]"
                      position="my-auto"
                    />
                    Star Instill VDP
                  </a>
                </Button>
              </div>
            </div>

            <div className="w-full xl:w-1/2">
              <div className="flex flex-col">
                <div className="my-3 flex justify-center xl:justify-start">
                  <Image
                    src="/hacktoberfest/extract.svg"
                    alt="Extraction Logo"
                    className="w-full"
                    width={500}
                    height={100}
                  />
                </div>
                <div className="mb-2 flex w-full flex-wrap justify-center gap-x-3 gap-y-2 xl:justify-start">
                  <Tag
                    variant="darkYellow"
                    className="gap-x-1 border-none !bg-[#FDCF72] !text-instillGrey95"
                  >
                    <Icons.Type02 className="h-3 w-3 stroke-instillGrey95" />
                    Text
                  </Tag>
                  <Tag
                    variant="darkYellow"
                    className="gap-x-1 border-none !bg-[#FDCF72] !text-instillGrey95"
                  >
                    <Icons.Image01 className="h-3 w-3 stroke-instillGrey95" />
                    Image
                  </Tag>
                  <Tag
                    variant="darkYellow"
                    className="gap-x-1 border-none !bg-[#FDCF72] !text-instillGrey95"
                  >
                    <Icons.Speaker01 className="h-3 w-3 stroke-instillGrey95" />
                    Audio
                  </Tag>
                  <div className="hidden xl:block">
                    <Tag
                      variant="darkYellow"
                      className="gap-x-1 border-none !bg-[#FDCF72] !text-instillGrey95"
                    >
                      <Icons.VideoRecorder className="h-3 w-3 stroke-instillGrey95" />
                      Video
                    </Tag>
                  </div>
                  <Tag
                    variant="darkYellow"
                    className="gap-x-1 border-none !bg-[#FDCF72] !text-instillGrey95"
                  >
                    <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                    PDF
                  </Tag>
                  <div className="hidden xl:block">
                    <Tag
                      variant="darkYellow"
                      className="gap-x-1 border-none !bg-[#FDCF72] !text-instillGrey95"
                    >
                      <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                      JSON
                    </Tag>
                  </div>
                  <Tag
                    variant="darkYellow"
                    className="gap-x-1 border-none !bg-[#FDCF72] !text-instillGrey95"
                  >
                    <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                    CSV
                  </Tag>
                  <div className="hidden xl:block">
                    <Tag
                      variant="darkYellow"
                      className="gap-x-1 border-none !bg-[#FDCF72] !text-instillGrey95"
                    >
                      <Icons.File05 className="h-3 w-3 stroke-instillGrey95" />
                      Parquet
                    </Tag>
                  </div>
                  <Tag
                    variant="darkYellow"
                    className="gap-x-1 border-none !bg-[#FDCF72] !text-instillGrey95"
                  >
                    <div className="h-2 w-2 rounded-lg bg-black"></div>
                    More
                  </Tag>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="my-3 flex justify-center xl:justify-start">
                  <Image
                    src="/hacktoberfest/transform.svg"
                    alt="Transform Logo"
                    className="w-full"
                    width={500}
                    height={100}
                  />
                </div>
                <div className="mb-8 flex w-full flex-wrap justify-center gap-2 xl:w-5/6 xl:justify-start">
                  <Tag variant="darkGreen" className="gap-x-1 border-none">
                    <Logos.MDLSquare className="h-3 w-3" />
                    Instill Model
                  </Tag>
                  <Tag variant="darkGreen" className="gap-x-1 border-none">
                    <Logos.OpenAI className="h-3 w-3" />
                    OpenAI: GPT
                  </Tag>
                  <Tag variant="darkGreen" className="gap-x-1 border-none">
                    <Logos.OpenAI className="h-3 w-3" />
                    OpenAI: Embeddings
                  </Tag>
                  <Tag variant="darkGreen" className="gap-x-1 border-none">
                    <Logos.OpenAI className="h-3 w-3" />
                    OpenAI: Whisper
                  </Tag>
                  <Tag variant="darkGreen" className="gap-x-1 border-none">
                    <Logos.StabilityAI className="h-3 w-3" />
                    Stability AI: SDXL
                  </Tag>
                  <Tag variant="darkGreen" className="gap-x-1 border-none">
                    <Logos.Anthropic className="h-3 w-3" />
                    Anthropic: Claude
                  </Tag>
                  <Tag variant="darkGreen" className="gap-x-1 border-none">
                    <Logos.HuggingFace className="h-3 w-3" />
                    Hugging Face
                  </Tag>
                  <div className="hidden xl:block">
                    <Tag variant="darkGreen" className="gap-x-1 border-none">
                      <Logos.Cohere className="h-3 w-3" />
                      cohere: Command
                    </Tag>
                  </div>
                  <div className="hidden xl:block">
                    <Tag variant="darkGreen" className="gap-x-1 border-none">
                      <Logos.Cohere className="h-3 w-3" />
                      cohere: Embeddings
                    </Tag>
                  </div>
                  <Tag variant="darkGreen" className="gap-x-1 border-none">
                    <div className="h-2 w-2 rounded-lg bg-emerald-500"></div>
                    More
                  </Tag>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="my-3 flex justify-center xl:justify-start">
                  <Image
                    src="/hacktoberfest/load.svg"
                    alt="Load Logo"
                    className="w-full"
                    width={500}
                    height={100}
                  />
                </div>
                <div className="mb-8 flex w-full flex-wrap justify-center gap-2 xl:w-5/6 xl:justify-start">
                  <Tag variant="darkBlue" className="gap-x-1 border-none">
                    <Logos.Pinecode className="h-3 w-3" />
                    Pinecone
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1 border-none">
                    <BigQueryIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    BigQuery
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1 border-none">
                    <PostgreSqlIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Postgres
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1 border-none">
                    <GoogleDriveIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Google Drive
                  </Tag>
                  <div className="hidden xl:block">
                    <Tag variant="darkBlue" className="gap-x-1 border-none">
                      <GoogleSheetIcon
                        height="h-[12px]"
                        position="my-auto"
                        width="w-[12px]"
                      />
                      Google Sheets
                    </Tag>
                  </div>
                  <Tag variant="darkBlue" className="gap-x-1 border-none">
                    <Icons.CodeSnippet02 className="h-3 w-3 stroke-white" />
                    REST API
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1 border-none">
                    <div className="h-2 w-2 rounded-lg bg-white"></div>
                    More
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}

        <div className="pb-10 xl:py-20">
          <div className="flex flex-col xl:flex-row">
            <div className="mt-10 w-full xl:mt-0 xl:hidden xl:w-1/2">
              <div className="flex flex-row justify-center gap-x-7 py-3 xl:justify-start">
                <div className="rounded bg-white xl:rounded-md">
                  <Logos.MDLSquare className="h-10 w-10 xl:h-20 xl:w-20" />
                </div>
                <div className="my-auto">
                  <h1 className="font-['IBM Plex Sans'] text-2xl font-semibold leading-7 text-white xl:text-[42px] xl:leading-[45px]">
                    Instill Model
                  </h1>
                </div>
              </div>

              <div className="xl:hidden">
                <h1 className="font-['IBM Plex Sans'] mb-4 text-center text-2xl font-semibold leading-7 text-white">
                  AI models transform your apps
                </h1>
                <p className="font-['IBM Plex Sans'] text-center text-lg font-normal leading-snug text-white">
                  Deploy and customize AI models to your data, standardize AI
                  tasks.
                </p>
              </div>

              <div className="my-7 flex flex-col gap-y-3 xl:flex-row xl:gap-x-5">
                <Button
                  asChild
                  variant="secondaryGrey"
                  size="lg"
                  className="flex items-center gap-x-2"
                >
                  <a
                    href="https://github.com/instill-ai/model"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-5"
                      height="h-5"
                      color="fill-[#000]"
                      position="my-auto"
                    />
                    Star Instill Model
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-full xl:w-1/2">
              <div className="flex flex-col">
                <div className="my-3 flex justify-center xl:justify-start">
                  <p className="text-emerald-500 product-body-text-1-semibold">
                    Model Deployment
                  </p>
                </div>
                <div className="mb-2 flex w-full flex-wrap justify-center gap-2 xl:w-3/4 xl:justify-start">
                  <Tag variant="lightGreen">Stable Diffusion</Tag>
                  <Tag variant="lightGreen">GPT</Tag>
                  <Tag variant="lightGreen">Llama 2</Tag>
                  <div className="hidden xl:block">
                    <Tag variant="lightGreen">MPT</Tag>
                  </div>
                  <div className="hidden xl:block">
                    <Tag variant="lightGreen">Falcon</Tag>
                  </div>
                  <Tag variant="lightGreen" className="">
                    Segment Anything
                  </Tag>
                  <div className="hidden xl:block">
                    <Tag variant="lightGreen">CLIP</Tag>
                  </div>
                  <div className="hidden xl:block">
                    <Tag variant="lightGreen">Mask RCNN</Tag>
                  </div>
                  <Tag variant="lightGreen">YOLOv7</Tag>
                  <div className="hidden xl:block">
                    <Tag variant="lightGreen">YOLOv7 Pose</Tag>
                  </div>
                  <Tag variant="lightGreen">More</Tag>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="my-3 flex justify-center xl:justify-start">
                  <p className="text-violet-500 product-body-text-1-semibold">
                    AI Tasks
                  </p>
                </div>
                <div className="mb-2 flex w-full flex-wrap justify-center gap-2 xl:w-5/6 xl:justify-start">
                  <Tag variant="lightPurple" className="gap-x-1">
                    <ComplicateIcons.TextGeneration
                      fillAreaColor="fill-semantic-fg-secondary"
                      className="h-3 w-3"
                    />
                    Text Generation
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <ComplicateIcons.TextToImage
                      fillAreaColor="fill-semantic-fg-secondary"
                      className="h-3 w-3"
                    />
                    Text to Image
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <Icons.SpeechRecognition className="h-3 w-3 stroke-semantic-fg-secondary" />
                    Audio Recognition
                  </Tag>
                  <div className="hidden xl:block">
                    <Tag variant="lightPurple" className="gap-x-1">
                      <ImageClassificationIcon
                        color="fill-instillGrey90"
                        height="h-[12px]"
                        position="my-auto"
                        width="w-[12px]"
                      />
                      Image Classification
                    </Tag>
                  </div>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <ObjectDetectionIcon
                      color="fill-instillGrey90"
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Object Detection
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <KeypointDetectionIcon
                      color="fill-instillGrey90"
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Keypoint Detection
                  </Tag>
                  <div className="hidden xl:block">
                    <Tag variant="lightPurple" className="gap-x-1">
                      <ObjectDetectionIcon
                        color="fill-instillGrey90"
                        height="h-[12px]"
                        position="my-auto"
                        width="w-[12px]"
                      />
                      OCR
                    </Tag>
                  </div>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <InstanceSegmentationIcon
                      color="fill-instillGrey90"
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Instance Segmentation
                  </Tag>
                  <div className="hidden xl:block">
                    <Tag variant="lightPurple" className="gap-x-1">
                      <SemanticSegmentationIcon
                        color="fill-instillGrey90"
                        height="h-[12px]"
                        position="my-auto"
                        width="w-[12px]"
                      />
                      Semantic Segmentation
                    </Tag>
                  </div>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <div className="h-2 w-2 rounded-lg bg-violet-500"></div>
                    More
                  </Tag>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="my-3 flex justify-center xl:justify-start">
                  <p className="text-slate-500 product-body-text-1-semibold">
                    ML Frameworks
                  </p>
                </div>
                <div className="mb-2 flex w-full flex-wrap justify-center gap-2 xl:w-3/4 xl:justify-start">
                  <Tag variant="darkNeutral" className="gap-x-1 border-none">
                    <PyTorchIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    PyTorch
                  </Tag>
                  <Tag variant="darkNeutral" className="gap-x-1 border-none">
                    <TensorFlowIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    TensorFlow
                  </Tag>
                  <Tag variant="darkNeutral" className="gap-x-1 border-none">
                    <OnnxIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    ONNX
                  </Tag>
                  <Tag variant="darkNeutral" className="gap-x-1 border-none">
                    <PythonIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Python
                  </Tag>
                </div>
              </div>
            </div>
            <div className="mt-20 hidden w-full xl:mt-0 xl:block xl:w-1/2">
              <div className="flex flex-row justify-center gap-x-7 py-3 xl:justify-start">
                <div className="rounded bg-white xl:rounded-md">
                  <Logos.MDLSquare className="h-10 w-10 xl:h-20 xl:w-20" />
                </div>
                <div className="my-auto">
                  <h1 className="font-['IBM Plex Sans'] text-2xl font-semibold leading-7 text-white xl:text-[42px] xl:leading-[45px]">
                    Instill Model
                  </h1>
                </div>
              </div>

              <div className="xl:hidden">
                <h1 className="font-['IBM Plex Sans'] mb-4 text-center text-2xl font-semibold leading-7 text-white">
                  AI models transform your apps
                </h1>
                <p className="font-['IBM Plex Sans'] text-center text-lg font-normal leading-snug text-white">
                  Deploy and customize AI models to your data, standardize AI
                  tasks.
                </p>
              </div>

              <div className="hidden xl:block">
                <p className="font-['IBM Plex Sans'] text-[28px] font-medium text-white">
                  Transform your apps with AI models
                </p>
              </div>
              <div className="font-['IBM Plex Sans'] hidden px-4 py-7 text-lg font-normal leading-relaxed text-white xl:block">
                <ul>
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Import and deploy AI models and dynamically generate
                    inference API endpoints.
                  </li>
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Standardize AI tasks for ETL pipelines, application and data
                    integration.
                  </li>
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Customize LLM, Diffusion or other AI models to your data and
                    use cases.
                  </li>
                </ul>
              </div>

              <div className="my-7 flex flex-col gap-y-3 xl:flex-row xl:gap-x-5">
                <Button
                  asChild
                  variant="secondaryGrey"
                  size="lg"
                  className="flex items-center gap-x-2"
                >
                  <a
                    href="https://github.com/instill-ai/model"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      width="w-5"
                      height="h-5"
                      color="fill-[#000]"
                      position="my-auto"
                    />
                    Star Instill Model
                  </a>
                </Button>
                <Button
                  asChild
                  variant="white"
                  size="lg"
                  className="flex items-center gap-x-2"
                >
                  <a
                    href="https://console.instill.tech/?utm_source=product&utm_medium=button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Access early on instill Cloud
                    <Icons.ArrowRight className="h-5 w-5 stroke-semantic-bg-primary" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}

        <div className="py-10 xl:py-20">
          <div className="flex flex-row justify-center">
            <div className="w-full xl:w-3/4">
              <div className="flex flex-col gap-y-10 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <div className="flex justify-center">
                    <div className="flex flex-row gap-x-7">
                      <div>
                        <div className="rounded-md bg-white p-3">
                          <Icons.Mail01 className="h-10 w-10 stroke-instillGrey95" />
                        </div>
                      </div>
                      <div className="my-auto flex flex-row">
                        <div>
                          <p className="font-['IBM Plex Sans'] text-[32px] font-semibold leading-9 text-white">
                            Stay in the Loop
                          </p>
                          <p className="font-['IBM Plex Sans'] text-lg font-normal leading-7 text-white">
                            Subscribe for the latest updates
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-auto w-full xl:w-1/2">
                  <div className="flex justify-center">
                    <div className="flex flex-row">
                      <SubscribeNewsletterForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <div className="flex justify-center pb-32 pt-20">
          <div className="flex flex-col gap-y-5">
            <h1
              className={cn(
                "font-['IBM Plex Sans'] w-full text-center text-2xl font-semibold text-semantic-fg-primary-on-bg-secondary xl:text-[42px] xl:leading-[45px]"
              )}
            >
              Start building AI applications with Instill Cloud
            </h1>
            <div
              className={cn(
                "md-10 text-center font-sans text-[18px] text-lg font-light text-white xl:mb-20"
              )}
            >
              Build, test and share your AI applications in a few minutes.
            </div>

            <div className="xl:flex xl:justify-center">
              <div className="flex flex-col gap-y-3 xl:flex-row xl:gap-x-5">
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="w-full xl:w-auto"
                >
                  <a
                    href="https://console.instill.tech/?utm_source=product&utm_medium=button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Instill Cloud Free
                  </a>
                </Button>

                <Button
                  asChild
                  variant="white"
                  size="lg"
                  className="flex w-full items-center gap-x-2 border-semantic-bg-primary xl:w-auto"
                >
                  <a
                    href="https://www.instill.tech/docs/?utm_source=product&utm_medium=button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M14 17H8M16 13H8M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z"
                        stroke="#fff"
                        strokeOpacity="0.8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Read our Docs
                    <Icons.ArrowRight className="h-5 w-5 stroke-semantic-bg-primary" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HacktoberfestPage.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default HacktoberfestPage;
