import { FC, useEffect } from "react";
import {
  constructSlashTriangleBlock,
  prepareCanvas,
} from "../../../lib/generator/rect-block-generator";
import { rectGeneratorInfo } from "./RectGenerator";

interface Props {}

export const SlashBlock: FC<Props> = () => {
  const id = "generator-canvas-slash-block"
  useEffect(() => {
    const { ctx } = prepareCanvas(id, rectGeneratorInfo);
    constructSlashTriangleBlock(
      ctx,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo
    );
  }, []);

  
  return <canvas id={id} />;
};
