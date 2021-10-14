import { FC, useEffect } from "react";
import {
  constructSlashTriangleBlock,
  prepareCanvas,
} from "../../lib/generator/rect-block-generator";
import { rectGeneratorInfo } from "./RectGenerator";

interface Props {}

export const SlashBlock: FC<Props> = () => {
  useEffect(() => {
    const { ctx } = prepareCanvas("generator-canvas-slash-block", rectGeneratorInfo);
    constructSlashTriangleBlock(
      ctx,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo
    );
  }, []);

  
  return <canvas id="generator-canvas-slash-block"></canvas>;
};
