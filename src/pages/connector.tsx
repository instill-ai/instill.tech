import React, { FC, ReactElement } from "react";
import {
  CommonCtaButton,
  ConnectorPageBase,
  ContentContainer,
  PageHead,
} from "@/components/ui";
import { useRouter } from "next/router";
import {
  Button,
  GitHubIcon,
  Icons,
  Input,
  Nullable,
  Select,
  Tag,
  Tooltip,
} from "@instill-ai/design-system";
import { InstillSDK } from "@/lib/instill-sdk";
import { ConnectorDefinition, ConnectorType } from "@instill-ai/toolkit";
import cn from "clsx";

type GetLayOutProps = {
  page: ReactElement;
};

export type Task = {
  name: string;
  description: string;
  title: string;
};

export type Connector = ConnectorDefinition & {
  tasks: Task[];
  version?: string;
};

export const ConnectorCategory = {
  CONNECTOR_TYPE_AI: "AI Connector",
  CONNECTOR_TYPE_BLOCKCHAIN: "Application Connector",
  CONNECTOR_TYPE_DATA: "Data Connector",
  CONNECTOR_TYPE_UNSPECIFIED: "Unspecified Connector",
  CONNECTOR_TYPE_OPERATOR: "Operator",
};

export const getHeaderColorClass = (type: ConnectorType) => {
  switch (type) {
    case "CONNECTOR_TYPE_AI":
    case "CONNECTOR_TYPE_DATA":
      return "bg-semantic-accent-bg text-semantic-accent-on-bg";
    case "CONNECTOR_TYPE_BLOCKCHAIN":
      return "bg-semantic-warning-bg text-semantic-warning-on-bg";
    case "CONNECTOR_TYPE_OPERATOR":
      return "bg-semantic-success-bg text-semantic-success-on-bg";
    case "CONNECTOR_TYPE_UNSPECIFIED":
      return "bg-semantic-bg-secondary text-semantic-fg-secondary";
  }
};

export function VersionType({ version }: { version: string }) {
  const parsedVersion = version.split("-")[1];

  switch (parsedVersion) {
    case "alpha":
      return (
        <Tag
          variant="lightPurple"
          className="rounded-sm border-semantic-secondary-default !py-0.5 !uppercase"
        >
          {parsedVersion}
        </Tag>
      );
    case "beta":
      return (
        <Tag
          variant="lightBlue"
          className="rounded-sm border-semantic-accent-default !py-0.5 !uppercase"
        >
          {parsedVersion}
        </Tag>
      );
    case "contribute":
      return (
        <Tag
          variant="lightYellow"
          className="rounded-sm border-semantic-warning-default !py-0.5 !uppercase"
        >
          {parsedVersion}
        </Tag>
      );
    default:
      return (
        <Tag
          variant="lightGreen"
          className="rounded-sm border-semantic-success-default !py-0.5 !uppercase"
        >
          {parsedVersion}
        </Tag>
      );
  }
}

const ConnectorPage: FC & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  const router = useRouter();

  const [connectors, setConnectors] =
    React.useState<Nullable<Connector[]>>(null);
  const [category, setCategory] = React.useState<string>("All");
  const [stage, setStage] = React.useState<string>("All");

  const [searchCode, setSearchCode] = React.useState<Nullable<string>>(null);

  // Introduce state variables for pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);

  const itemsPerPage = 9;

  // Calculate the start and end index based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  React.useEffect(() => {
    const fetchData = async () => {
      let filter = "";
      try {
        if (category !== "All") {
          filter = "&filter=connector_type=" + category;
          setConnectors(null);
        } else {
          filter = "";
          setConnectors(null);
        }
        const response = await InstillSDK.connector(filter);
        if (response.status === "success") {
          setConnectors(response.data);
          setCurrentPage(1);
          if (response.data.length) {
            setTotalPage(Math.ceil(response.data.length / itemsPerPage));
          }
        }
      } catch (error) {
        console.error(error); // Handle errors here
      }
    };
    fetchData(); // Call the asynchronous function
  }, [category, stage]);

  const pagesToShow = 5; // Number of pages to show in the pagination

  const getPageRange = (currentPage: number) => {
    const halfPagesToShow = Math.floor(pagesToShow / 2);
    let startPage = Math.max(1, currentPage - halfPagesToShow);
    const endPage = Math.min(totalPage, startPage + pagesToShow - 1);

    // If there are more pages before the displayed range, add ellipsis and adjust startPage
    const prefix = startPage > 1 ? [1, "..."] : [];

    // If there are more pages after the displayed range, add ellipsis and adjust endPage
    const suffix = endPage < totalPage ? ["...", totalPage] : [];

    // Adjust startPage if endPage is at the maximum limit
    startPage = Math.max(1, endPage - pagesToShow + 1);

    return [
      ...prefix,
      ...Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      ),
      ...suffix,
    ];
  };

  return (
    <React.Fragment>
      <PageHead
        pageType="main"
        pageTitle="Connector | Instill AI"
        pageDescription="Instill AI Connector"
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />
      <ContentContainer
        margin="my-[120px] xl:my-6"
        contentMaxWidth="max-w-[1127px]"
      >
        <div className="flex flex-col">
          <div className="flex justify-center">
            <h1
              className={cn(
                "mb-5 w-[570px] text-left font-mono text-[32px] font-semibold uppercase text-instillNeonBlue word-spacing-tight xl:text-instill-h1 xl:word-spacing-super-tight"
              )}
            >
              VDP COMPONENTS
            </h1>
          </div>
          <div className="mb-12 flex justify-center">
            <p className="mx-auto w-[570px] text-left font-sans text-[24px] font-light text-[#8C8A8A]">
              Open-source, out-of-the-box and managed pipeline components for
              Instill Versatile Data Pipeline (VDP)
            </p>
          </div>
          <div className="mb-7 flex justify-center">
            <CommonCtaButton
              withArrow={true}
              link={"/connector"}
              text="Request a Component"
              position="my-auto"
            />
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-x-5 gap-y-2 xl:grid-cols-3">
          <div className="flex w-full flex-col gap-y-2.5">
            <p className="text-semantic-fg-primary product-body-text-3-semibold">
              Search Pipelines
            </p>
            <div className="mt-auto flex flex-row gap-x-4">
              <Input.Root className="flex-1">
                <Input.LeftIcon>
                  <Icons.SearchSm className="my-auto h-4 w-4 stroke-semantic-fg-primary" />
                </Input.LeftIcon>
                <Input.Core
                  value={searchCode ?? ""}
                  placeholder="Search..."
                  onChange={(event) => setSearchCode(event.target.value)}
                />
              </Input.Root>
            </div>
          </div>
          <div className="flex w-full flex-col gap-y-2.5">
            <p className="text-semantic-fg-primary product-body-text-3-semibold">
              Category
            </p>
            <Select.Root
              value={category}
              onValueChange={(value) => {
                setCategory(value);
              }}
            >
              <Select.Trigger className="mt-auto w-full">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="All">All</Select.Item>
                  <Select.Item value="CONNECTOR_TYPE_AI">
                    AI Connector
                  </Select.Item>
                  <Select.Item value="CONNECTOR_TYPE_BLOCKCHAIN">
                    Application Connector
                  </Select.Item>
                  <Select.Item value="CONNECTOR_TYPE_DATA">
                    Data Connector
                  </Select.Item>
                  <Select.Item value="CONNECTOR_TYPE_OPERATOR">
                    Operator
                  </Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
          <div className="flex w-full flex-col gap-y-2.5">
            <p className="text-semantic-fg-primary product-body-text-3-semibold">
              Stage
            </p>
            <Select.Root
              value={stage}
              onValueChange={(value) => {
                setStage(value);
              }}
            >
              <Select.Trigger className="mt-auto w-full">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="All">All</Select.Item>
                  <Select.Item value="alpha">Alpha</Select.Item>
                  <Select.Item value="beta">Beta</Select.Item>
                  <Select.Item value="ga">GA</Select.Item>
                  <Select.Item value="contribute">Contribute</Select.Item>
                  <Select.Item value="coming_soon">Coming Soon</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
          {connectors &&
            connectors?.slice(startIndex, endIndex).map((connector) => (
              <div
                className={cn(`flex flex-col border border-[#CBD2E1]`)}
                key={connector.uid}
              >
                <div
                  className={cn(
                    "px-5 py-2.5 font-sans font-normal tracking-[0.65px]",
                    getHeaderColorClass(connector.type)
                  )}
                >
                  {ConnectorCategory[connector.type]}
                </div>
                <div className="px-5 py-2.5">
                  <div className="flex flex-row gap-x-2">
                    <div className="rounded-[6px] border p-1 shadow">
                      <img
                        src={`/${connector.icon}`}
                        alt=""
                        className="mx-auto my-auto h-5 w-6"
                      />
                    </div>
                    <span className="my-auto w-full font-sans text-[18px] font-semibold">
                      {connector.title}
                    </span>
                    <div className="my-auto py-0.5">
                      <VersionType
                        version={connector.version ? connector.version : ""}
                      />
                    </div>
                  </div>

                  <div className="mt-2.5 flex w-full flex-wrap justify-start gap-x-2 gap-y-2">
                    {connector.tasks.slice(0, 2).map((task) => (
                      <Button
                        variant="secondaryGrey"
                        size="lg"
                        key={task.name}
                        className="!rounded-[6px] !border-semantic-bg-line !px-2 !py-0.5 !font-sans !text-[14px] !font-medium !text-semantic-fg-secondary"
                      >
                        {task.title}
                      </Button>
                    ))}
                    {connector.tasks.length > 2 && (
                      <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <Button
                              variant="secondaryGrey"
                              size="lg"
                              key={"task-button"}
                              className="!rounded-[6px] !border-semantic-bg-line !px-2 !py-0.5 !font-sans !text-[14px] !font-medium !text-semantic-fg-secondary"
                            >
                              +{connector.tasks.length - 2}
                            </Button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              className="TooltipContent"
                              sideOffset={5}
                            >
                              <div className="flex w-80 flex-wrap justify-start gap-x-2 gap-y-2 bg-white p-3">
                                {connector.tasks
                                  .slice(2, connector.tasks.length)
                                  .map((task) => (
                                    <Button
                                      variant="secondaryGrey"
                                      size="lg"
                                      key={task.name}
                                      className="!rounded-[6px] !border-semantic-bg-line !px-2 !py-0.5 !font-sans !text-[14px] !font-medium !text-semantic-fg-secondary"
                                    >
                                      {task.title}
                                    </Button>
                                  ))}
                              </div>
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </Tooltip.Provider>
                    )}
                  </div>
                  <div className="mt-2.5 text-[16px] font-normal text-semantic-fg-secondary">
                    One liner to describe what the component is aimed for for
                    this task.
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
                      <span className="my-auto">
                        <a href={connector.documentation_url}>Docs</a>
                      </span>
                    </div>
                    <div className="flex flex-row space-x-1">
                      <GitHubIcon
                        color="fill-[#1D2433]"
                        height="h-[24px]"
                        position="my-auto my-auto"
                        width="w-[24px]"
                      />
                      <span className="my-auto">
                        <a href={connector.documentation_url}>Github</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {!connectors &&
            [...new Array(9)].map((e, index) => (
              <div
                className="flex flex-col border border-[#CBD2E1]"
                key={`connector-key-${index}`}
              >
                <div className="h-8 w-full animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                <div className="px-5 py-2.5">
                  <div className="flex flex-row gap-x-2">
                    <div className="h-6 w-8 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                    <span className="my-auto w-full font-sans text-[18px] font-semibold"></span>
                    <div className="my-auto py-0.5">
                      <div className="h-6 w-12 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <div className="h-6 w-24 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                  </div>
                  <div className="mt-2.5 space-y-2 text-[16px] font-normal text-semantic-fg-secondary">
                    <div className="h-4 w-full animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                    <div className="h-4 w-full animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                  </div>
                  <div className="mt-5 flex flex-row items-end space-x-5 text-semantic-fg-secondary">
                    <div className="flex flex-row space-x-2">
                      <div className="h-5 w-6 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                      <div className="h-5 w-12 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                    </div>
                    <div className="flex flex-row space-x-1">
                      <div className="h-5 w-6 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                      <div className="h-5 w-12 animate-pulse bg-gradient-to-r from-[#DBDBDB]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {connectors && (
          <div className="flex flex-row justify-between">
            <Button
              variant="secondaryGrey"
              size="sm"
              className="gap-x-2"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <Icons.ArrowLeft className="h-4 w-4 stroke-semantic-fg-primary" />
              Previous
            </Button>
            <div className="flex gap-x-1">
              {getPageRange(currentPage).map((elem, index) => (
                <Button
                  variant="tertiaryGrey"
                  key={`page-${index}`}
                  size="md"
                  className={cn(
                    "gap-x-2",
                    currentPage == index + 1 ? "!bg-semantic-bg-base-bg" : ""
                  )}
                  onClick={() =>
                    setCurrentPage(
                      typeof elem === "number" ? elem : currentPage
                    )
                  }
                >
                  {elem}
                </Button>
              ))}
            </div>

            <Button
              variant="secondaryGrey"
              size="sm"
              className="gap-x-2"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPage}
            >
              Next
              <Icons.ArrowRight className="h-4 w-4 stroke-semantic-fg-primary" />
            </Button>
          </div>
        )}
      </ContentContainer>
    </React.Fragment>
  );
};

ConnectorPage.getLayout = (page) => {
  return <ConnectorPageBase>{page}</ConnectorPageBase>;
};

export default ConnectorPage;
