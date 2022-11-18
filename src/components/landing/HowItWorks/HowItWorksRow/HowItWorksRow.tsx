import cn from "clsx";
import { ReactElement } from "react";

import { CommonCtaButton, NumberCube } from "@/components/ui";
import { IconsCubeProps, IconsCube } from "../IconsCube";

export type HowItWorksRowProps = {
  title: string;
  description: ReactElement | string;
  learnMoreLink: string;
  cubes: IconsCubeProps["cubes"];
  number: number;
  type: "right" | "left";
};

export const HowItWorksRow = ({
  type,
  title,
  description,
  learnMoreLink,
  cubes,
  number,
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
          "mt-20 flex flex-1 flex-col gap-y-10 xl:mt-0 xl:w-7/12 xs:gap-y-0 xs:gap-x-10",
          type === "right" ? "xl:flex-row-reverse" : "xl:flex-row"
        )}
      >
        <NumberCube
          number={number}
          color="bg-instillNeonBlue"
          width="w-20"
          height="h-20"
        />
        <div className="flex flex-col">
          <h3 className="mb-7 text-2xl font-medium text-instillGrey90">
            {title}
          </h3>
          <div className="mb-[30px] text-lg font-normal text-instillGrey95 xl:mb-auto">
            {description}
          </div>
          <CommonCtaButton
            withArrow={true}
            link={learnMoreLink}
            position="mt-auto mr-auto"
            text="Learn more"
          />
        </div>
      </div>
      <div className="flex">
        <IconsCube
          cubes={cubes}
          position={type === "left" ? "xl:ml-auto" : "xl:mr-auto"}
          width="xl:w-[360px]"
          height="xl:h-[360px]"
        />
      </div>
    </div>
  );
};
