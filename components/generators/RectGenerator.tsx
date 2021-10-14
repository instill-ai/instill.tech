import { FC, useEffect } from "react";
import {
  prepareCanvas,
  switchBlockConstructor,
} from "../../lib/generator/rect-block-generator";
import { RectGeneratorInfo } from "../../types/generator";

interface Props {}

export const rectGeneratorInfo: RectGeneratorInfo = {
  blockSize: 200,
  blockTypeCount: 5,
  baseStrokeColor: "#000000",
  baseStrokeWidth: 4,
  rowCount: 3,
  columnCount: 3,
  canvasPadding: 10,
  colorArray: ["#FFFF1A", "#FCB21B", "#27FC86", "#3EEDFF", "#F75FFF", "#C65AFF"],
};

export const rectGeneratorColor = {
  yellowSun: "#FFFF1A",
  brightYellow: "#FCB21B",
  guppieGreen: "#27FC86",
  fluorescentBlue: "#3EEDFF",
  shockingPink: "#F75FFF",
  heliotrope: "#C65AFF",
};

export const RectGenerator: FC<Props> = () => {
  useEffect(() => {
    const { ctx, metric } = prepareCanvas("generator-canvas", rectGeneratorInfo);

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
