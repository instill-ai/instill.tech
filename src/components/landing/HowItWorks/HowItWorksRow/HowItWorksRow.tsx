import { LearnMoreButton } from "@/components/ui";
import cn from "clsx";
import { ReactElement } from "react";
import IconsCube, { IconsCubeProps } from "../IconsCube";
import NumberCube from "../NumberCube";

export type HowItWorksRowProps = {
  title: string;
  description: ReactElement | string;
  learnMoreLink: string;
  cubes: IconsCubeProps["cubes"];
  number: number;
  type: "right" | "left";
};

const HowItWorksRow = ({
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
        "flex flex-col-reverse xl:gap-x-20",
        type === "right" ? "xl:flex-row-reverse" : "xl:flex-row"
      )}
    >
      <div className="mt-20 flex flex-row gap-x-10 xl:mb-0 xl:h-[360px] xl:w-7/12">
        <div>
          <NumberCube number={number} />
        </div>
        <div className="flex flex-col">
          <h3 className="mb-7 text-2xl font-medium text-instillGrey90">
            {title}
          </h3>
          <div className="mb-[30px] text-lg font-normal text-instillGrey95 xl:mb-auto">
            {description}
          </div>
          <LearnMoreButton link={learnMoreLink} position="mt-auto mr-auto" />
        </div>
      </div>
      <div className="flex xl:w-5/12">
        <IconsCube
          cubes={cubes}
          position={type === "left" ? "xl:ml-auto" : "xl:mr-auto"}
        />
      </div>
    </div>
  );
};

export default HowItWorksRow;
