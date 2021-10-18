import { FC, useEffect } from "react";
import { prepareCanvas } from "../../../lib/generator/common";
import {
  constructPixelBlockOutline,
  constructPixelBaseBlock,
  generateTwoLayerRandomPixelMetric,
} from "../../../lib/generator/pixel-block-generator";
import { initGeneratorInfo } from "./DiagramGenerator";

interface Props {}

export const BaseBlock: FC<Props> = () => {
  const id = "pixel-base-block";

  useEffect(() => {
    const { ctx } = prepareCanvas(id, initGeneratorInfo);
    const metric = generateTwoLayerRandomPixelMetric();
    constructPixelBaseBlock(metric, ctx, initGeneratorInfo, 10, 10);
    constructPixelBlockOutline(ctx, initGeneratorInfo, 10, 10);
  }, []);

  return (
    <div>
      <canvas id={id} />
    </div>
  );
};
