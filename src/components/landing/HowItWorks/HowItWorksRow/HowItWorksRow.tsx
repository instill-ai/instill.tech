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
      className={cn("flex", type === "right" ? "flex-row-reverse" : "flex-row")}
    >
      <div className="flex w-7/12 flex-row gap-x-10">
        <div>
          <NumberCube number={number} />
        </div>
        <div className="flex flex-col">
          <h3 className="mb-7 text-2xl font-medium text-instillGrey90">
            {title}
          </h3>
          <div className="mb-[88px] text-lg font-normal text-instillGrey95">
            {description}
          </div>
        </div>
      </div>
      <div className="flex w-5/12">
        <IconsCube
          cubes={cubes}
          position={type === "left" ? "ml-auto" : "mr-auto"}
        />
      </div>
    </div>
  );
};

export default HowItWorksRow;
