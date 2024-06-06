import {
  ComponentCategory,
  Component,
  VersionType,
  docsLinks,
  getHeaderColorClass,
} from "@/pages/component";
import React from "react";
import cn from "clsx";
import { Button, DropdownMenu, GitHubIcon } from "@instill-ai/design-system";

function ComponentCard({
  component_definition,
}: {
  component_definition: Component;
}) {
  return (
    <div
      className={cn(`relative flex flex-col border border-[#CBD2E1]`)}
      key={component_definition.uid}
      // onMouseEnter={() => {
      //   setOnMouseEnter(!onMouseEnter);
      // }}
      // onMouseLeave={() => {
      //   setOnMouseEnter(!onMouseEnter);
      // }}
    >
      <div
        className={cn(
          "z-10 px-5 py-2.5 font-sans font-normal tracking-[0.65px]",
          getHeaderColorClass(component_definition.type)
        )}
      >
        <span className="relative z-10">
          {ComponentCategory[component_definition.type]}
        </span>
      </div>

      <div className="min-h-[230px] bg-white px-5 py-2.5">
        <div className="flex flex-row gap-x-2">
          <div className="my-auto rounded-[6px] border px-1 py-0.5 shadow">
            <img
              src={`/${component_definition.icon}`}
              alt=""
              className="mx-auto my-auto h-6 w-8 shrink-0"
            />
          </div>
          <span className="my-auto w-full font-sans text-[18px] font-semibold">
            {component_definition.title}
          </span>
          <div className="my-auto py-0.5">
            <VersionType
              version={
                component_definition.release_stage
                  ? component_definition.release_stage
                  : ""
              }
              // onMouseEnter={onMouseEnter}
            />
          </div>
        </div>

        <div className="mt-2.5 flex w-full flex-wrap justify-start gap-x-2 gap-y-2">
          {component_definition.tasks.slice(0, 1).map((task) => (
            <Button
              variant="secondaryGrey"
              size="lg"
              key={task.name}
              className="!rounded-[6px] !border-semantic-bg-line !px-2 !py-0.5 !font-sans !text-[14px] !font-medium !text-semantic-fg-secondary"
            >
              {task.title}
            </Button>
          ))}
          {component_definition.tasks.length > 1 && (
            // <Tooltip.Provider>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button
                  variant="secondaryGrey"
                  size="lg"
                  key={"task-button"}
                  className="!rounded-[6px] !border-semantic-bg-line !px-2 !py-0.5 !font-sans !text-[14px] !font-medium !text-semantic-fg-secondary"
                >
                  +{component_definition.tasks.length - 1}
                </Button>
              </DropdownMenu.Trigger>
              {/* <Tooltip.Portal> */}
              <DropdownMenu.Content className="TooltipContent" sideOffset={5}>
                <div className="flex w-80 flex-wrap justify-start gap-x-2 gap-y-2 bg-white p-3">
                  {component_definition.tasks
                    .slice(1, component_definition.tasks.length)
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
              </DropdownMenu.Content>
              {/* </Tooltip.Portal> */}
            </DropdownMenu.Root>
            // </Tooltip.Provider>
          )}
        </div>
        <div className="mt-2.5 text-[16px] font-normal text-semantic-fg-secondary">
          {component_definition.description}
        </div>
        <div className="absolute bottom-2 mt-5 flex w-full flex-row space-x-5 text-semantic-fg-secondary">
          <div className="flex flex-row space-x-2">
            <div className="my-auto">
              <svg
                width={"18"}
                height={"18"}
                viewBox={"0 0 18 18"}
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
            <span className={cn("my-auto")}>
              <a
                href={
                  docsLinks[component_definition.id] ||
                  component_definition.documentation_url
                }
                // onMouseEnter={() => {
                //   setOnMouseEnterDocs(!onMouseEnterDocs);
                // }}
                // onMouseLeave={() => {
                //   setOnMouseEnterDocs(!onMouseEnterDocs);
                // }}
                // className={cn(
                //   onMouseEnterDocs
                //     ? "animate__animated animate__flipInX animate__slow"
                //     : ""
                // )}
              >
                Docs
              </a>
            </span>
          </div>
          <div className="flex flex-row space-x-1">
            <GitHubIcon
              color="fill-[#1D2433]"
              height={"h-[24px]"}
              position="my-auto my-auto transition duration-300 ease-in-out"
              width={"w-[24px]"}
            />
            <span className={cn("my-auto")}>
              <a
                href={component_definition.source_url}
                // onMouseEnter={() => {
                //   setOnMouseEnterGithub(!onMouseEnterGithub);
                // }}
                // onMouseLeave={() => {
                //   setOnMouseEnterGithub(!onMouseEnterGithub);
                // }}
                // className={cn(
                //   onMouseEnterGithub
                //     ? "animate__animated animate__flipInX animate__slow"
                //     : ""
                // )}
              >
                GitHub
              </a>
            </span>
          </div>
          {/* <div className="w-full text-right">
            <Tag
              variant="lightBlue"
              size="sm"
              className="absolute right-10 !border-0 !bg-semantic-bg-secondary !py-0.5"
            >
              V{connector_definition.version?.split("-")[0]}
            </Tag>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ComponentCard;
