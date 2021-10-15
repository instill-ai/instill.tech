import { FC, useEffect } from "react";
import {
  constructVerticalRectBlock,
  prepareCanvas,
} from "../../../lib/generator/rect-block-generator";
import { rectGeneratorInfo } from "./RectGenerator";

interface Props {}

export const VerticalRectBlock: FC<Props> = () => {
  const id = "generator-canvas-vertical-rect-block";
  useEffect(() => {
    const { ctx } = prepareCanvas(id, rectGeneratorInfo);
    constructVerticalRectBlock(
      ctx,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo
    );
  }, []);

  return <canvas id={id} />;
};
