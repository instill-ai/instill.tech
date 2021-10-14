import { FC, useEffect } from "react";
import {
  constructHorizontalRectBlock,
  prepareCanvas,
} from "../../lib/generator/rect-block-generator";
import { rectGeneratorInfo } from "./RectGenerator";

interface Props {}

export const HorizontalRectBlock: FC<Props> = () => {
  const id = "generator-canvas-horizontal-rect-block";
  useEffect(() => {
    const { ctx } = prepareCanvas(id, rectGeneratorInfo);
    constructHorizontalRectBlock(
      ctx,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo
    );
  }, []);

  return <canvas id={id} />;
};
