import cn from "clsx";

export type NumberCubeProps = {
  number: number;
  color: string;
  width: string;
  height: string;
};

export const NumberCube = ({
  number,
  color,
  width,
  height,
}: NumberCubeProps) => {
  return (
    <div>
      <div className={cn("flex", color, width, height)}>
        <div className="m-auto font-mono text-2xl font-normal text-white xl:text-5xl">
          {number}
        </div>
      </div>
    </div>
  );
};
