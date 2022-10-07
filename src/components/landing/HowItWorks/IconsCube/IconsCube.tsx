import { ReactElement } from "react";
import cn from "clsx";

export type IconsCubeProps = {
  cubes: {
    id: string;
    color: string;
    icon: ReactElement;
  }[];
  position?: string;
};

const IconsCube = ({ cubes, position }: IconsCubeProps) => {
  return (
    <div className={cn("flex", position)}>
      <div className="grid grid-cols-4 grid-rows-1 xl:grid-cols-2 xl:grid-rows-2">
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

export default IconsCube;
