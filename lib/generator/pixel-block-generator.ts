import { GeneratorInfo } from "../../types/generator";
import { getRandomInt } from "../utilities";

// Method: choose how many pixel a block have -> choose the position
// Method2: randomize 0, 1 with all the block

export const constructPixelBaseBlockAllRandom = (
  ctx: CanvasRenderingContext2D,
  generatorInfo: GeneratorInfo
): void => {
  let metric = [];

  //const pixelAmount = getRandomInt(9)
  for (let i = 0; i < 9; i++) {
    metric[i] = getRandomInt(2);
  }

  for (let j = 1; j <= metric.length; j++) {
    if (metric[j] === 1) {
      const row = Math.ceil(j / 3);
      const column = j % 3 === 0 ? 3 : j % 3;
      const pixelSize = generatorInfo.blockSize / 3;

      console.log(j, row, column);

      const x = (column - 1) * pixelSize + generatorInfo.canvasPadding;
      const y = (row - 1) * pixelSize + generatorInfo.canvasPadding;

      ctx.fillStyle = "#000000";
      ctx.fillRect(x, y, pixelSize, pixelSize);
    }
  }
};
