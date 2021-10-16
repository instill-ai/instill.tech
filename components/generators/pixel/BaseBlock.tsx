import { FC, useEffect } from "react";
import { prepareCanvas } from "../../../lib/generator/common";
import {
  constructPixelBlockOutline,
  constructPixelBaseBlockAllRandom,
} from "../../../lib/generator/pixel-block-generator";
import { generatorInfo } from "./DiagramGenerator";

interface Props {}

export const BaseBlock: FC<Props> = () => {
  const id = "pixel-base-block";

  useEffect(() => {
    const { ctx } = prepareCanvas(id, generatorInfo);
    constructPixelBaseBlockAllRandom(ctx, generatorInfo, 10, 10);
    constructPixelBlockOutline(ctx, generatorInfo, 10, 10);
  }, []);

  return (
    <div>
      <canvas id={id} />
    </div>
  );
};
