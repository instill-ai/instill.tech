import { FC, useEffect, useState, useCallback } from "react";
import { prepareCanvas } from "../../../lib/generator/common";
import {
  generateTargetMetric,
  switchBlockConstructor,
} from "../../../lib/generator/rect-block-generator";
import { GeneratorInfo } from "../../../types/generator";

interface Props {}

export const rectGeneratorInfo: GeneratorInfo = {
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
  const newMetric = generateTargetMetric(rectGeneratorInfo);
  const [metric, setMetric] = useState<number[][]>(newMetric);

  const generateMetric = () => {
    const newMetric = generateTargetMetric(rectGeneratorInfo);
    setMetric(newMetric);
  };

  const generateDiagram = useCallback(() => {
    const { ctx } = prepareCanvas("generator-canvas", rectGeneratorInfo);
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
  }, [metric]);

  useEffect(() => {
    generateDiagram();
  }, [generateDiagram]);

  const refresh = () => {
    generateMetric();
  };

  return (
    <div className="flex flex-col">
      <div className="px-[10px]">
        <button className="px-2 border border-gray-600 text-sm" onClick={refresh}>
          refresh-diagram
        </button>
      </div>
      <div>
        <canvas id="generator-canvas" />
      </div>
    </div>
  );
};
