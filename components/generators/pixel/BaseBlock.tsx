import { FC, useEffect } from "react";
import { prepareCanvas } from "../../../lib/generator/rect-block-generator";
import { GeneratorInfo } from "../../../types/generator";

interface Props {}

const generatorInfo: GeneratorInfo = {
  blockSize: 200,
  blockTypeCount: 5,
  baseStrokeColor: "#000000",
  baseStrokeWidth: 4,
  rowCount: 3,
  columnCount: 3,
  canvasPadding: 10,
  colorArray: ["#FFFF1A", "#FCB21B", "#27FC86", "#3EEDFF", "#F75FFF", "#C65AFF"],
}

export const BaseBlock: FC<Props> = () => {
  const id = "pixel-base-block";

  useEffect(() => {
    const { ctx } = prepareCanvas(id, generatorInfo)
  }, [])

  return (
    <div>
      <canvas id={id}></canvas>
    </div>
  )
}
