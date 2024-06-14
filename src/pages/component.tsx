import * as React from "react";
import {
  CommonCtaButton,
  ComponentPageBase,
  ContentContainer,
  PageHead,
} from "@/components/ui";
import { useRouter } from "next/router";
import {
  Button,
  Icons,
  Input,
  Nullable,
  Select,
  Tag,
} from "@instill-ai/design-system";
import { InstillSDK } from "@/lib/instill-sdk";
import cn from "clsx";
import ComponentCard from "@/components/landing/Component/ComponentCard";
import ComponentDefault from "@/components/landing/Component/ComponentDefault";
import { NextPageWithLayout } from "./_app";

export type Task = {
  name: string;
  description: string;
  title: string;
};

export type ComponentType =
  | "COMPONENT_TYPE_UNSPECIFIED"
  | "COMPONENT_TYPE_OPERATOR"
  | "COMPONENT_TYPE_DATA"
  | "COMPONENT_TYPE_AI"
  | "COMPONENT_TYPE_APPLICATION";

export type Component = {
  name: string;
  uid: string;
  id: string;
  title: string;
  documentation_url: string;
  icon: string;
  icon_url: string;
  type: ComponentType;
  tombstone: boolean;
  public: boolean;
  tasks: Task[];
  version?: string;
  description?: string;
  source_url?: string;
  release_stage?: string;
};

export const ComponentCategory = {
  COMPONENT_TYPE_AI: "AI Component",
  COMPONENT_TYPE_APPLICATION: "Application Component",
  COMPONENT_TYPE_DATA: "Data Component",
  COMPONENT_TYPE_UNSPECIFIED: "Unspecified Component",
  COMPONENT_TYPE_OPERATOR: "Operator Component",
  COMPONENT_TYPE_ITERATOR: "Iterator Component",
};

export const getHeaderColorClass = (type: string) => {
  switch (type) {
    case "COMPONENT_TYPE_AI":
      return "bg-semantic-accent-bg text-semantic-accent-on-bg";
    case "COMPONENT_TYPE_DATA":
      return "bg-semantic-error-bg text-semantic-error-on-bg";
    case "COMPONENT_TYPE_APPLICATION":
      return "bg-semantic-warning-bg text-semantic-warning-on-bg";
    case "COMPONENT_TYPE_OPERATOR":
      return "bg-semantic-success-bg text-semantic-success-on-bg";
    case "COMPONENT_TYPE_ITERATOR":
      return "bg-semantic-secondary-bg text-semantic-secondary-default";
    case "COMPONENT_TYPE_UNSPECIFIED":
      return "bg-semantic-bg-secondary text-semantic-fg-secondary";
  }
};

export function VersionType({
  version,
  onMouseEnter,
}: {
  version: string;
  onMouseEnter?: boolean;
}) {
  const parsedVersion = version.split("_")[2]?.toLowerCase();

  switch (parsedVersion) {
    case "alpha":
      return (
        <Tag
          variant="lightPurple"
          className={cn(
            "rounded-sm border-semantic-secondary-default !py-0.5 !uppercase shadow",
            onMouseEnter ? "shadow shadow-semantic-secondary-default" : ""
          )}
        >
          {parsedVersion}
        </Tag>
      );
    case "beta":
      return (
        <Tag
          variant="lightBlue"
          className={cn(
            "rounded-sm border-semantic-accent-default !py-0.5 !uppercase",
            onMouseEnter ? "shadow shadow-semantic-accent-default" : ""
          )}
        >
          {parsedVersion}
        </Tag>
      );
    case "contribute":
      return (
        <Tag
          variant="lightYellow"
          className={cn(
            "rounded-sm border-semantic-warning-default !py-0.5 !uppercase",
            onMouseEnter ? "shadow shadow-semantic-warning-default" : ""
          )}
        >
          {parsedVersion}
        </Tag>
      );
    default:
      return (
        <Tag
          variant="lightGreen"
          className={cn(
            "rounded-sm border-semantic-success-default !py-0.5 !uppercase",
            onMouseEnter ? "shadow shadow-semantic-success-default" : ""
          )}
        >
          {parsedVersion}
        </Tag>
      );
  }
}

const ComponentPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { page } = router.query;

  const page_size = 9;

  const [components, setComponents] =
    React.useState<Nullable<Component[]>>(null);
  const [category, setCategory] = React.useState<string>("All");
  const [stage, setStage] = React.useState<string>("All");
  const [isLoading, setLoading] = React.useState<boolean>(true);

  const [searchCode, setSearchCode] = React.useState<Nullable<string>>(null);

  // Introduce state variables for pagination
  const currentPage = Number(page || 0);
  const [totalPage, setTotalPage] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let filter = "";

      let page_number = currentPage - 1;

      try {
        if (category !== "All") {
          filter = `&filter=component_type=${category}`;
          setComponents(null);
          setStage("All");
          setSearchCode(null);
          page_number = 0;
        } else if (stage != "All") {
          filter = `&filter=release_stage=${stage}`;
          setComponents(null);
          setCategory("All");
          setSearchCode(null);
          page_number = 0;
        } else if (searchCode) {
          filter = `&filter=q_title='${searchCode}'`;
          setComponents(null);
          setCategory("All");
          setStage("All");
          page_number = 0;
        } else {
          filter = "";
          setComponents(null);
        }
        const response = await InstillSDK.component(
          filter,
          page_number,
          page_size
        );
        if (response.status === "success") {
          setComponents(response.data.component_definitions);
          setTotalPage(
            Math.ceil(response.data.total_size / response.data.page_size)
          );
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error(error); // Handle errors here
        setLoading(false);
      }
    };
    fetchData(); // Call the asynchronous function
  }, [category, stage, currentPage, searchCode]);

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
        pageTitle="Component | Instill AI"
        pageDescription="Instill AI Component"
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />
      <ContentContainer margin="my-[120px]" contentMaxWidth="max-w-[1127px]">
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
              link={
                "https://github.com/instill-ai/instill-core/issues/new?assignees=&labels=feature%2Cneed-triage&projects=&template=feature_request.yaml&title=%5BFeature%5D+%3Ctitle%3E"
              }
              text="Request a Component"
              position="my-auto"
            />
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-x-5 gap-y-2 xl:grid-cols-3">
          <div className="flex w-full flex-col gap-y-2.5">
            <p className="text-semantic-fg-primary product-body-text-3-semibold">
              Search
            </p>
            <div className="mt-auto flex flex-row gap-x-4">
              <Input.Root className="flex-1">
                <Input.LeftIcon>
                  <Icons.SearchSm className="my-auto h-4 w-4 stroke-semantic-fg-primary" />
                </Input.LeftIcon>
                <Input.Core
                  value={searchCode ?? ""}
                  placeholder="Search..."
                  onChange={(event) => {
                    setSearchCode(event.target.value);
                    setCategory("All");
                    setStage("All");
                  }}
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
                setStage("All");
              }}
            >
              <Select.Trigger className="mt-auto w-full">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="All">All</Select.Item>
                  <Select.Item value="COMPONENT_TYPE_AI">
                    AI Component
                  </Select.Item>
                  <Select.Item value="COMPONENT_TYPE_APPLICATION">
                    Application Component
                  </Select.Item>
                  <Select.Item value="COMPONENT_TYPE_DATA">
                    Data Component
                  </Select.Item>
                  <Select.Item value="COMPONENT_TYPE_OPERATOR">
                    Operator Component
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
                setCategory("All");
              }}
            >
              <Select.Trigger className="mt-auto w-full">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="All">All</Select.Item>
                  <Select.Item value="RELEASE_STAGE_ALPHA">Alpha</Select.Item>
                  <Select.Item value="RELEASE_STAGE_BETA">Beta</Select.Item>
                  <Select.Item value="RELEASE_STAGE_GA">GA</Select.Item>
                  <Select.Item value="RELEASE_STAGE_OPEN_FOR_CONTRIBUTION">
                    Contribute
                  </Select.Item>
                  <Select.Item value="RELEASE_STAGE_COMING_SOON">
                    Coming Soon
                  </Select.Item>
                  <Select.Item value="RELEASE_STAGE_UNSPECIFIED">
                    Unspecified
                  </Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
          {components &&
            components?.map((component) => {
              return (
                <ComponentCard
                  key={component.id}
                  component_definition={component}
                />
              );
            })}

          {isLoading && <ComponentDefault count={9} />}
        </div>

        {components && components.length !== 0 && (
          <div className="flex flex-row justify-between">
            <Button
              variant="secondaryGrey"
              size="sm"
              className="gap-x-2"
              onClick={() => router.push(`/component?page=${currentPage - 1}`)}
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
                    currentPage === elem ? "!bg-semantic-bg-base-bg" : ""
                  )}
                  onClick={() =>
                    router.push(
                      `/component?page=${
                        typeof elem === "number" ? elem : currentPage
                      }`
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
              onClick={() => router.push(`/component?page=${currentPage + 1}`)}
              disabled={currentPage === totalPage}
            >
              Next
              <Icons.ArrowRight className="h-4 w-4 stroke-semantic-fg-primary" />
            </Button>
          </div>
        )}

        {!components?.length && !isLoading && (
          <div className="flex h-[600px] flex-col items-center justify-center">
            <img src="/images/no-component-found.svg" alt="" />
            <p className="mt-4 text-[18px]">
              no components matching{" "}
              <span className="font-bold">search query</span>
            </p>
          </div>
        )}
      </ContentContainer>
    </React.Fragment>
  );
};

ComponentPage.getLayout = (page) => {
  return <ComponentPageBase>{page}</ComponentPageBase>;
};

export default ComponentPage;
