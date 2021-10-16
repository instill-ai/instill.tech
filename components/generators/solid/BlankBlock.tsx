import { FC, useEffect } from "react";
import { prepareCanvas } from "../../../lib/generator/common";
import { constructBlankBlock } from "../../../lib/generator/rect-block-generator";
import { rectGeneratorInfo } from "./RectGenerator";

interface Props {}

export const BlankBlock: FC<Props> = () => {
  const id = "generator-canvas-blank-block";
  useEffect(() => {
    const { ctx } = prepareCanvas(id, rectGeneratorInfo);
    constructBlankBlock(
      ctx,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo
    );
  }, []);

  return <canvas id={id} />;
};
