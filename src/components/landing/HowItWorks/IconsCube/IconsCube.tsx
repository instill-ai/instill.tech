import { ReactElement } from "react";
import cn from "clsx";

export type IconsCubeProps = {
  cubes: {
    id: string;
    color: string;
    icon: ReactElement;
  }[];
  position?: string;
  width: string;
  height: string;
};

export const IconsCube = ({
  cubes,
  position,
  width,
  height,
}: IconsCubeProps) => {
  return (
    <div className={cn("flex", position, width, height)}>
      <div className="grid h-full w-full grid-cols-4 grid-rows-1 xl:grid-cols-2 xl:grid-rows-2">
        {cubes.map((cube) => (
          <div
            key={`icons-cube-${cube.id}`}
            className={cn("h-full w-full", cube.color)}
          >
            {cube.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
