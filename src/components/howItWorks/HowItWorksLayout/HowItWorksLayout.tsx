import cn from "clsx";
import IconsCube, { IconsCubeProps } from "../IconsCube";
import NumberCube from "../NumberCube";

export type HowItWorksLayoutProps = {
  title: string;
  description: string;
  learnMoreLink: string;
  cubes: IconsCubeProps["cubes"];
  number: number;
  type: "right" | "left";
};

const HowItWorksLayout = ({
  type,
  title,
  description,
  learnMoreLink,
  cubes,
  number,
}: HowItWorksLayoutProps) => {
  return (
    <div
      className={cn(
        "flex gap-x-20",
        type === "right" ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="flex w-2/3 flex-row gap-x-10">
        <div>
          <NumberCube number={number} />
        </div>
        <div className="flex flex-col">
          <h3 className="mb-7 text-2xl font-medium text-instillGrey90">
            {title}
          </h3>
          <p className="mb-[88px] text-lg font-normal text-instillGrey95">
            {description}
          </p>
        </div>
      </div>
      <div className="flex w-1/3">
        <IconsCube cubes={cubes} />
      </div>
    </div>
  );
};

export default HowItWorksLayout;
