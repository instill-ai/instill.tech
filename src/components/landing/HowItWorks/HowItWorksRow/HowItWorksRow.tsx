import cn from "clsx";
import { ReactElement } from "react";

import { CommonCtaButton, NumberCube, SectionLabel } from "@/components/ui";
import { IconsCubeProps, IconsCube } from "../IconsCube";
import { Nullable } from "vitest";

export type HowItWorksRowProps = {
  title: string;
  description: ReactElement | string;
  buttons?: ReactElement | string;
  learnMoreLink: Nullable<string>;
  cubes: IconsCubeProps["cubes"];
  type: "right" | "left";
  icon?: ReactElement;
  sectionTitle?: string;
};

export const HowItWorksRow = ({
  type,
  title,
  description,
  learnMoreLink,
  cubes,
  icon,
  sectionTitle,
  buttons,
}: HowItWorksRowProps) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col-reverse xl:gap-x-20",
        type === "right" ? "xl:flex-row-reverse" : "xl:flex-row"
      )}
    >
      <div
        className={cn(
          "mb-20 flex min-h-[300px] flex-1 flex-col gap-y-10 xl:mb-0 xl:mt-0 xl:mt-10 xl:w-7/12 xs:gap-x-10",
          type === "right" ? "xl:flex-row-reverse" : "xl:flex-row"
        )}
      >
        <div className="flex flex-col text-left">
          {sectionTitle ? (
            <SectionLabel
              text={sectionTitle}
              position="mr-auto"
              marginBottom="mb-2.5"
            />
          ) : (
            <h3 className="mb-7 text-[36px] font-medium text-instillGrey90">
              {title}
            </h3>
          )}
          <div className="mb-[30px] text-lg font-normal text-instillGrey95 xl:mb-auto">
            {description}
          </div>
          <div className="mb-5 block xl:hidden">
            <div className="flex justify-center">
              {icon ? (
                icon
              ) : (
                <IconsCube
                  cubes={cubes}
                  position={type === "left" ? "xl:ml-auto" : "xl:mr-auto"}
                  width="xl:w-[360px]"
                  height="xl:h-[360px]"
                />
              )}
            </div>
          </div>
          {learnMoreLink ? (
            <CommonCtaButton
              withArrow={true}
              link={learnMoreLink}
              position="mt-auto xl:mr-auto w-full justify-center xl:w-auto !mt-5 xl:!mt-0"
              text="Learn more"
            />
          ) : null}

          {buttons ? buttons : null}
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="flex justify-center">
          {icon ? (
            icon
          ) : (
            <IconsCube
              cubes={cubes}
              position={type === "left" ? "xl:ml-auto" : "xl:mr-auto"}
              width="xl:w-[360px]"
              height="xl:h-[360px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};
