import { FC, useEffect } from "react";
import {
  generateTargetMetric,
  getCanvasElementById,
  getCanvasRendering2DContext,
  switchBlockConstructor,
} from "../../lib/generator/rect-block-generator";
import { RectGeneratorInfo } from "../../types/generator";

interface Props {}

const rectGeneratorInfo: RectGeneratorInfo = {
  blockSize: 200,
  blockTypeCount: 5,
  baseStrokeColor: "#000000",
  baseStrokeWidth: 4,
  rowCount: 3,
  columnCount: 3,
  canvasPadding: 10,
  colorArray: ["#FFFF1A", "#FCB21B", "#27FC86", "#3EEDFF", "#F75FFF", "#C65AFF"],
};

export const RectGeneratorColor = {
  yellowSun: "#FFFF1A",
  brightYellow: "#FCB21B",
  guppieGreen: "#27FC86",
  fluorescentBlue: "#3EEDFF",
  shockingPink: "#F75FFF",
  heliotrope: "#C65AFF",
};

export const RectBlock: FC<Props> = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement = getCanvasElementById("generator-canvas");
    const metric = generateTargetMetric(rectGeneratorInfo);
    canvas.width =
      rectGeneratorInfo.blockSize * rectGeneratorInfo.columnCount +
      rectGeneratorInfo.canvasPadding * 2;
    canvas.height =
      rectGeneratorInfo.blockSize * rectGeneratorInfo.rowCount +
      rectGeneratorInfo.canvasPadding * 2;

    const ctx: CanvasRenderingContext2D = getCanvasRendering2DContext(canvas);

    for (let i = 0; i < metric.length; i++) {
      const row = metric[i];
      let x = rectGeneratorInfo.canvasPadding;
      let y = i * rectGeneratorInfo.blockSize + rectGeneratorInfo.canvasPadding;
      for (let j = 0; j < row.length; j++) {
        switchBlockConstructor(row[j], ctx, x, y, rectGeneratorInfo);
        if (j !== row.length - 1) {
          x = rectGeneratorInfo.blockSize * (j + 1) + rectGeneratorInfo.canvasPadding;
        }
      }
    }
  }, []);

  return <canvas id="generator-canvas"></canvas>;
};
