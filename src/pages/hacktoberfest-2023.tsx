import { FC, ReactElement } from "react";
import { CaseStudyProps } from "@/components/landing";
import { PageHead, SectionLabel } from "@/components/ui";
import { GetStaticProps } from "next";
import { getRepoFileContent } from "@/lib/github";
import cn from "clsx";
import { BaseLayout, Hero } from "@/components/hacktoberfest";
import {
  Button,
  DiscordIcon,
  GitHubIcon,
  Icons,
  Input,
  Logos,
} from "@instill-ai/design-system";
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
          <div className="flex flex-row">
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
                  <li className="ml-4 pl-1">
                    Build versatile data pipelines for your journey with
                    unstructured data. This has to be filled. This has to be
                    filled.
                  </li>
                  <li className="ml-4 pl-1">
                    Connect to your data, transform by the STOA models and load
                    the results into your desired destination.
                  </li>
                  <li className="ml-4 pl-1">
                    Test. This has to be filled. This has to be filled. This has
                    to be filled.
                  </li>
                  <li className="ml-4 pl-1">
                    Share built pipelines with anyone to showcase your work
                  </li>
                  <li className="ml-4 pl-1">
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

            <div className="w-1/2">Extract, transaform, load</div>
          </div>
        </div>

        {/* Section 5 */}

        <div className="py-20">
          <div className="flex flex-row">
            <div className="w-1/2">Extract, transaform, load</div>
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
                  <li className="ml-4 pl-1">
                    Import and deploy AI models and dynamically generate
                    inference API endpoints.
                  </li>
                  <li className="ml-4 pl-1">
                    Standardize AI tasks for ETL pipelines, application and data
                    integration.
                  </li>
                  <li className="ml-4 pl-1">
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
