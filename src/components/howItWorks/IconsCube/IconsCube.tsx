import { ReactElement } from "react";
import cn from "clsx";

export type IconsCubeProps = {
  cubes: {
    id: string;
    color: string;
    icon: ReactElement;
    width: string;
    height: string;
  }[];
};

const IconsCube = ({ cubes }: IconsCubeProps) => {
  return (
    <div className="flex">
      <div className="grid grid-cols-2 grid-rows-2">
        {cubes.map((cube) => (
          <div
            key={`icons-cube-${cube.id}`}
            className={cn("h-full w-full", cube.color, cube.width, cube.height)}
          >
            {cube.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsCube;
