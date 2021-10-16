import { FC, useEffect } from "react";
import { prepareCanvas } from "../../../lib/generator/common";
import { constructPixelDiagram } from "../../../lib/generator/pixel-block-generator";
import { GeneratorInfo } from "../../../types/generator";

interface Props {}

export const generatorInfo: GeneratorInfo = {
  blockSize: 300,
  blockTypeCount: 5,
  baseStrokeColor: "#000000",
  blockBaseColor: "#374151",
  baseStrokeWidth: 50,
  rowCount: 3,
  columnCount: 3,
  canvasPadding: 10,
  colorArray: ["#FFFF1A", "#FCB21B", "#27FC86", "#3EEDFF", "#F75FFF", "#C65AFF"],
};

export const DiagramGenerator: FC<Props> = () => {
  const id = "pixel-block-diagram-generator";
  useEffect(() => {
    const { ctx } = prepareCanvas(id, generatorInfo);
    constructPixelDiagram(ctx, generatorInfo);
  }, []);
  return (
    <div>
      <canvas id={id} />
    </div>
  );
};
