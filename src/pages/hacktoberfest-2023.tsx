import { FC, ReactElement } from "react";
import { CaseStudyProps } from "@/components/landing";
import { PageHead, SectionLabel } from "@/components/ui";
import { GetStaticProps } from "next";
import { getRepoFileContent } from "@/lib/github";
import cn from "clsx";
import { BaseLayout, Hero } from "@/components/hacktoberfest";
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
// to detect language and automatically redirect to the approprate/[locale] page

export const getStaticProps: GetStaticProps<HacktoberfestPageProps> =
  async () => {
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

type HacktoberfestPageProps = {
  destinations: CaseStudyProps["destinations"];
};

interface GetLayOutProps {
  page: ReactElement;
}

const HacktoberfestPage: FC<HacktoberfestPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ destinations }) => {
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

        <Hero />

        {/* Section 2 */}
        <div className="flex justify-center py-20">
          <div className="flex flex-col gap-y-5">
            <SectionLabel text="Do You Know?" position="mx-auto" />
            <h1
              className={cn(
                "font-['IBM Plex Sans'] w-full text-center text-[56px] font-bold leading-[78px] text-semantic-fg-primary-on-bg-secondary"
              )}
            >
              The Backbone for All Your AI Needs
            </h1>
            <div
              className={cn(
                "mb-20 text-center font-sans text-[18px] text-lg font-light text-white"
              )}
            >
              Instill Core - where the world of AI-first applications come
              alive. Instill Core lays the foundation for AI-powered pipelines
              designed to handle unstructured data. Within this ecosystem, you
              will find open source projects that enable you to construct robust
              AI pipelines for unstructured data.
            </div>
            <div className="flex flex-row">
              <div className="flex justify-center">
                <div className="flex flex-col text-center">
                  <Image
                    src="/hacktoberfest/arrow-right.svg"
                    width={200}
                    height={112}
                    alt="Console Cloud Dashboard"
                    className="ml-12"
                  />
                  <p className="text-white product-body-text-3-medium">
                    Various AI applications for diverse use cases
                  </p>
                </div>
              </div>

              <div className="w-3/5">
                <div className="flex flex-col">
                  <div className="flex justify-center">
                    <div className="flex w-3/5 flex-col pt-5">
                      <div className="mb-2 flex flex-wrap justify-center gap-2">
                        <Tag variant="darkNeutral">LLM apps</Tag>
                        <Tag variant="darkNeutral">Vision apps</Tag>
                        <Tag variant="darkNeutral">Image generators</Tag>
                        <Tag variant="darkNeutral">Audio apps</Tag>
                        <Tag variant="darkNeutral">More</Tag>
                      </div>
                      <div className="flex justify-center gap-x-2.5"></div>
                    </div>
                  </div>
                  <div className="flex justify-center pt-5">
                    <div className="flex w-5/6 flex-col">
                      <div className="mb-2 flex flex-wrap justify-center gap-2">
                        <Tag variant="lightNeutral">Data extraction</Tag>
                        <Tag variant="lightNeutral">
                          Data transform via AI model inference
                        </Tag>
                        <Tag variant="lightNeutral">Customizable data flow</Tag>
                        <Tag variant="lightNeutral">
                          Flexible flow orchestration
                        </Tag>
                        <Tag variant="lightNeutral">Troubleshooting</Tag>
                        <Tag variant="lightNeutral">Evaluation</Tag>
                        <Tag variant="lightNeutral">Version Control</Tag>
                        <Tag variant="lightNeutral">Access Control</Tag>
                        <Tag variant="lightNeutral">Monitoring & Logging</Tag>
                        <Tag variant="lightNeutral">Data management</Tag>
                        <Tag variant="lightNeutral">Model deployment</Tag>
                        <Tag variant="lightNeutral">Model training</Tag>
                        <Tag variant="lightNeutral">
                          Scalability & Reliability
                        </Tag>
                        <Tag variant="lightNeutral">
                          Extend to new use cases
                        </Tag>
                        <Tag variant="lightNeutral">More</Tag>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-1/5 items-end justify-center text-white">
                <div className="flex flex-col">
                  <Image
                    src="/hacktoberfest/arrow-left.svg"
                    width={120}
                    height={212}
                    alt="hacktoberfest arrow left"
                  />
                  <p className="text-white product-body-text-3-medium">
                    The backbone of these apps is the AI-powered unstructured
                    data infrastructure, which should effectively handle...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}

        <div className="flex justify-center py-20">
          <div className="flex flex-col gap-y-5">
            <h1
              className={cn(
                "font-['IBM Plex Sans'] w-full text-center text-[42px] font-semibold leading-[45px] text-semantic-fg-primary-on-bg-secondary"
              )}
            >
              Meet Our Open Source Unstructured Data ETL Stack
            </h1>
            <div
              className={cn(
                "mb-20 text-center font-sans text-[18px] text-lg font-light text-white"
              )}
            >
              Instill Core - where the world of AI-first applications come
              alive. Instill Core lays the foundation for AI-powered
              infrastructure designed for unstructured data. Within this
              ecosystem, you will find open source projects that enable you to
              build AI applications to handle unstructured data for your use
              cases.
            </div>

            <div className="flex justify-center">
              <div className="flex flex-row gap-x-5">
                <Button variant="primary" size="lg" className="gap-x-2">
                  <DiscordIcon
                    width="w-5"
                    height="h-5"
                    color="fill-white"
                    position="my-auto"
                  />
                  Join Community
                </Button>

                <Button
                  variant="white"
                  size="lg"
                  className="flex items-center gap-x-2 border-semantic-bg-primary"
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
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}

        <div className="py-20">
          <div className="flex flex-row gap-x-10">
            <div className="w-1/2">
              <div className="flex flex-row gap-x-7 py-3">
                <div className="rounded-md bg-white">
                  <Logos.VDPSquare className="h-20 w-20" />
                </div>
                <div className="my-auto">
                  <h1 className="font-['IBM Plex Sans'] text-[42px] font-semibold leading-[45px] text-white">
                    Instill VDP
                  </h1>
                </div>
              </div>
              <div>
                <p className="font-['IBM Plex Sans'] text-[28px] font-medium text-white">
                  Simplify building the unstructured data journey for your AI
                  apps from start to finish.
                </p>
              </div>
              <div className="font-['IBM Plex Sans'] px-4 py-7 text-lg font-normal leading-relaxed text-white">
                <ul>
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Build versatile data pipelines for your journey with
                    unstructured data. This has to be filled. This has to be
                    filled.
                  </li>
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Connect to your data, transform by the STOA models and load
                    the results into your desired destination.
                  </li>
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Test. This has to be filled. This has to be filled. This has
                    to be filled.
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
                  <li className="flex items-start gap-x-3">
                    <Image
                      src="/hacktoberfest/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Console Cloud Dashboard"
                      className="mt-1"
                    />
                    Clone shared pipelines without building from scratch
                  </li>
                </ul>
              </div>

              <div className="my-7">
                <Button
                  variant="secondaryGrey"
                  size="lg"
                  className="flex items-center gap-x-2"
                >
                  <GitHubIcon
                    width="w-5"
                    height="h-5"
                    color="fill-[#000]"
                    position="my-auto"
                  />
                  Star Instill VDP
                </Button>
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex flex-col">
                <div className="my-3">
                  <Image
                    src="/hacktoberfest/extract.svg"
                    alt="Extraction Logo"
                    className="w-full"
                    width={500}
                    height={100}
                  />
                </div>
                <div className="mb-2 flex w-3/4 flex-wrap justify-start gap-2">
                  <Tag variant="darkYellow" className="gap-x-1">
                    <Icons.Type02 className="h-3 w-3 stroke-white" />
                    Text
                  </Tag>
                  <Tag variant="darkYellow" className="gap-x-1">
                    <Icons.Image01 className="h-3 w-3 stroke-white" />
                    Image
                  </Tag>
                  <Tag variant="darkYellow" className="gap-x-1">
                    {/* <Icons.Speaker01 className="h-3 w-3 stroke-white" /> */}
                    Audio
                  </Tag>
                  <Tag variant="darkYellow" className="gap-x-1">
                    <Icons.Recording02 className="h-3 w-3 stroke-white" />
                    Video
                  </Tag>
                  <Tag variant="darkYellow" className="gap-x-1">
                    <Icons.File04 className="h-3 w-3 stroke-white" />
                    PDF
                  </Tag>
                  <Tag variant="darkYellow" className="gap-x-1">
                    <Icons.File04 className="h-3 w-3 stroke-white" />
                    JSON
                  </Tag>
                  <Tag variant="darkYellow" className="gap-x-1">
                    <Icons.File04 className="h-3 w-3 stroke-white" />
                    CSV
                  </Tag>
                  <Tag variant="darkYellow" className="gap-x-1">
                    <Icons.File04 className="h-3 w-3 stroke-white" />
                    Parquet
                  </Tag>
                  <Tag variant="darkYellow" className="gap-x-1">
                    <div className="h-2 w-2 rounded-lg bg-white"></div>
                    More
                  </Tag>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="my-3">
                  <Image
                    src="/hacktoberfest/transform.svg"
                    alt="Transform Logo"
                    className="w-full"
                    width={500}
                    height={100}
                  />
                </div>
                <div className="mb-8 flex w-3/4 flex-wrap justify-start gap-2">
                  <Tag variant="lightGreen" className="gap-x-1">
                    <Logos.MDLSquare className="h-3 w-3" />
                    Instill Model
                  </Tag>
                  <Tag variant="lightGreen" className="gap-x-1">
                    <Logos.OpenAI className="h-3 w-3" />
                    OpenAI: GPT
                  </Tag>
                  <Tag variant="lightGreen" className="gap-x-1">
                    <Logos.OpenAI className="h-3 w-3" />
                    OpenAI: Embeddings
                  </Tag>
                  <Tag variant="lightGreen" className="gap-x-1">
                    <Logos.OpenAI className="h-3 w-3" />
                    OpenAI: Whisper
                  </Tag>
                  <Tag variant="lightGreen" className="gap-x-1">
                    <Logos.StabilityAI className="h-3 w-3" />
                    Stability AI: SDXL
                  </Tag>
                  <Tag variant="lightGreen" className="gap-x-1">
                    {/* <Logos.Anthropic className="h-3 w-3" /> */}
                    Anthropic: Claude
                  </Tag>
                  <Tag variant="lightGreen" className="gap-x-1">
                    <Logos.HuggingFace className="h-3 w-3" />
                    Hugging Face
                  </Tag>
                  <Tag variant="lightGreen" className="gap-x-1">
                    {/* <Logos.Cohere className="h-3 w-3" /> */}
                    cohere: Command
                  </Tag>
                  <Tag variant="lightGreen" className="gap-x-1">
                    {/* <Logos.Cohere className="h-3 w-3" /> */}
                    cohere: Embeddings
                  </Tag>
                  <Tag variant="lightGreen" className="gap-x-1">
                    <div className="h-2 w-2 rounded-lg bg-emerald-300"></div>
                    More
                  </Tag>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="my-3">
                  <Image
                    src="/hacktoberfest/load.svg"
                    alt="Load Logo"
                    className="w-full"
                    width={500}
                    height={100}
                  />
                </div>
                <div className="mb-8 flex w-3/4 flex-wrap justify-start gap-2">
                  <Tag variant="darkBlue" className="gap-x-1">
                    {/* <Logos.Pinecone className="h-3 w-3" /> */}
                    Pinecone
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1">
                    <BigQueryIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    BigQuery
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1">
                    <PostgreSqlIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Postgres
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1">
                    <GoogleDriveIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Google Drive
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1">
                    <GoogleSheetIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Google Sheets
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1">
                    <div className="h-2 w-2 rounded-lg bg-white"></div>
                    REST API
                  </Tag>
                  <Tag variant="darkBlue" className="gap-x-1">
                    <div className="h-2 w-2 rounded-lg bg-white"></div>
                    More
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}

        <div className="py-20">
          <div className="flex flex-row">
            <div className="w-1/2">
              <div className="flex flex-col">
                <div className="my-3">
                  <p className="text-emerald-300 product-body-text-1-semibold">
                    Model Deployment
                  </p>
                </div>
                <div className="mb-2 flex w-3/4 flex-wrap justify-start gap-2">
                  <Tag variant="lightGreen">Stable Diffusion</Tag>
                  <Tag variant="lightGreen">GPT</Tag>
                  <Tag variant="lightGreen">Llama 2</Tag>
                  <Tag variant="lightGreen">MPT</Tag>
                  <Tag variant="lightGreen">Falcon</Tag>
                  <Tag variant="lightGreen">Segment Anything</Tag>
                  <Tag variant="lightGreen">CLIP</Tag>
                  <Tag variant="lightGreen">Mask RCNN</Tag>
                  <Tag variant="lightGreen">YOLOv7</Tag>
                  <Tag variant="lightGreen">YOLOv7 Pose</Tag>
                  <Tag variant="lightGreen">More</Tag>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="my-3">
                  <p className="text-violet-300 product-body-text-1-semibold">
                    AI Tasks
                  </p>
                </div>
                <div className="mb-2 flex w-3/4 flex-wrap justify-start gap-2">
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
                    <Icons.SpeechRecognition className="h-3 w-3 bg-white" />
                    Audio Recognition
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <ImageClassificationIcon
                      color="fill-instillGrey50"
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Image Classification
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <ObjectDetectionIcon
                      color="fill-instillGrey50"
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Object Detection
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <ObjectDetectionIcon
                      color="fill-instillGrey50"
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Keypoint Detection
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    OCR
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <InstanceSegmentationIcon
                      color="fill-instillGrey50"
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Instance Segmentation
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <SemanticSegmentationIcon
                      color="fill-instillGrey50"
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    Semantic Segmentation
                  </Tag>
                  <Tag variant="lightPurple" className="gap-x-1">
                    <div className="h-2 w-2 rounded-lg bg-violet-300"></div>
                    More
                  </Tag>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="my-3">
                  <p className="text-slate-300 product-body-text-1-semibold">
                    ML Frameworks
                  </p>
                </div>
                <div className="mb-2 flex w-3/4 flex-wrap justify-start gap-2">
                  <Tag variant="darkNeutral" className="gap-x-1">
                    <PyTorchIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    PyTorch
                  </Tag>
                  <Tag variant="darkNeutral" className="gap-x-1">
                    <TensorFlowIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    TensorFlow
                  </Tag>
                  <Tag variant="darkNeutral" className="gap-x-1">
                    <OnnxIcon
                      height="h-[12px]"
                      position="my-auto"
                      width="w-[12px]"
                    />
                    ONNX
                  </Tag>
                  <Tag variant="darkNeutral" className="gap-x-1">
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
            <div className="w-1/2">
              <div className="flex flex-row gap-x-7 py-3">
                <div className="rounded-md bg-white">
                  <Logos.MDLSquare className="h-20 w-20" />
                </div>
                <div className="my-auto">
                  <h1 className="font-['IBM Plex Sans'] text-[42px] font-semibold leading-[45px] text-white">
                    Instill Model
                  </h1>
                </div>
              </div>
              <div>
                <p className="font-['IBM Plex Sans'] text-[28px] font-medium text-white">
                  Transform your apps with AI models
                </p>
              </div>
              <div className="font-['IBM Plex Sans'] px-4 py-7 text-lg font-normal leading-relaxed text-white">
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

              <div className="my-7 flex flex-row gap-x-5">
                <Button
                  variant="secondaryGrey"
                  size="lg"
                  className="flex items-center gap-x-2"
                >
                  <GitHubIcon
                    width="w-5"
                    height="h-5"
                    color="fill-[#000]"
                    position="my-auto"
                  />
                  Star Instill Model
                </Button>
                <Button
                  variant="white"
                  size="lg"
                  className="flex items-center gap-x-2"
                >
                  Access early on instill Cloud
                  <Icons.ArrowRight className="h-5 w-5 stroke-semantic-bg-primary" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}

        <div className="py-20">
          <div className="flex flex-row justify-center">
            <div className="w-3/4">
              <div className="flex flex-row">
                <div className="w-1/2">
                  <div className="flex justify-center">
                    <div className="flex flex-row gap-x-7">
                      <div>
                        <div className="rounded-md bg-white p-3">
                          <Icons.Box className="h-10 w-10 stroke-black" />
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
                <div className="my-auto w-1/2">
                  <div className="flex justify-center">
                    <div className="flex flex-row">
                      <Input.Root className="!rounded-none !rounded-l-sm !px-4">
                        <Input.Core
                          disabled={false}
                          type="text"
                          placeholder="Your email address"
                        />
                      </Input.Root>

                      <Button
                        variant="primary"
                        className="!rounded-none !rounded-r-sm"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <div className="flex justify-center py-20">
          <div className="flex flex-col gap-y-5">
            <h1
              className={cn(
                "font-['IBM Plex Sans'] w-full text-center text-[42px] font-semibold leading-[45px] text-semantic-fg-primary-on-bg-secondary"
              )}
            >
              Start building AI applications with Instill Cloud
            </h1>
            <div
              className={cn(
                "mb-20 text-center font-sans text-[18px] text-lg font-light text-white"
              )}
            >
              Build, test and share your AI applications in a few minutes.
            </div>

            <div className="flex justify-center">
              <div className="flex flex-row gap-x-5">
                <Button variant="primary" size="lg">
                  Try Instill Cloud Free
                </Button>

                <Button
                  variant="white"
                  size="lg"
                  className="flex items-center gap-x-2 border-semantic-bg-primary"
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
