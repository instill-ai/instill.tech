import { GeneratorInfo } from "../../types/generator";
import { getRandomInt } from "../utilities";

// Method: choose how many pixel a block have -> choose the position
// Method2: randomize 0, 1 with all the block

export const generateRandomPixelMetric = () => {
  let metric = [];
  for (let i = 0; i < 9; i++) {
    metric[i] = getRandomInt(2);
  }
  return metric;
};

export const constructPixelBaseBlock = (
  metric: number[],
  ctx: CanvasRenderingContext2D,
  generatorInfo: GeneratorInfo,
  currentX: number,
  currentY: number
): void => {
  for (let j = 1; j <= metric.length; j++) {
    if (metric[j] === 1) {
      const row = Math.ceil(j / 3);
      const column = j % 3 === 0 ? 3 : j % 3;
      const pixelSize = generatorInfo.blockSize / 3;

      const x = (column - 1) * pixelSize + currentX;
      const y = (row - 1) * pixelSize + currentY;

      ctx.fillStyle = generatorInfo.blockBaseColor;
      ctx.fillRect(x, y, pixelSize, pixelSize);
    }
  }
};

export const constructPixelBlockOutline = (
  ctx: CanvasRenderingContext2D,
  generatorInfo: GeneratorInfo,
  currentX: number,
  currentY: number
): void => {
  ctx.lineWidth = generatorInfo.baseStrokeWidth;
  ctx.strokeStyle = generatorInfo.baseStrokeColor;
  ctx.strokeRect(
    currentX,
    currentY,
    generatorInfo.blockSize + generatorInfo.baseStrokeWidth,
    generatorInfo.blockSize + generatorInfo.baseStrokeWidth
  );
};

export const constructPixelDiagram = (
  ctx: CanvasRenderingContext2D,
  generatorInfo: GeneratorInfo
): void => {
  let x: number;
  let y: number;

  for (let i = 1; i <= 9; i++) {
    const row = Math.ceil(i / 3);
    const column = i % 3 === 0 ? 3 : i % 3;
    x = (row - 1) * generatorInfo.blockSize + generatorInfo.canvasPadding;
    y = (column - 1) * generatorInfo.blockSize + generatorInfo.canvasPadding;
    const metric = generateRandomPixelMetric();
    constructPixelBaseBlock(metric, ctx, generatorInfo, x, y);
    constructPixelBlockOutline(ctx, generatorInfo, x, y);
  }
};

export const constructOptimizePixelDiagram = (
  ctx: CanvasRenderingContext2D,
  generatorInfo: GeneratorInfo
): void => {
  for (let i = 1; i <= 9; i++) {
    const row = Math.ceil(i / 3);
    const column = i % 3 === 0 ? 3 : i % 3;
    const outlinePosX =
      generatorInfo.canvasPadding +
      (column - 1) * generatorInfo.blockSize +
      (column - 1) * generatorInfo.baseStrokeWidth +
      generatorInfo.baseStrokeWidth / 2;

    const oultinePosY =
      generatorInfo.canvasPadding +
      (row - 1) * generatorInfo.blockSize +
      (row - 1) * generatorInfo.baseStrokeWidth +
      generatorInfo.baseStrokeWidth / 2;

    const blockPosX =
      generatorInfo.canvasPadding +
      (column - 1) * generatorInfo.blockSize +
      column * generatorInfo.baseStrokeWidth;

    const blockPosY =
      generatorInfo.canvasPadding +
      (row - 1) * generatorInfo.blockSize +
      row * generatorInfo.baseStrokeWidth;

    const metric = generateRandomPixelMetric();
    constructPixelBlockOutline(ctx, generatorInfo, outlinePosX, oultinePosY);
    constructPixelBaseBlock(metric, ctx, generatorInfo, blockPosX, blockPosY);
  }
};
