import { RectGeneratorInfo } from "../../types/generator";
import { getRandomInt } from "../utilities";

export const prepareCanvas = (
  id: string,
  rectGeneratorInfo: RectGeneratorInfo
): { canvas: HTMLCanvasElement; metric: number[][]; ctx: CanvasRenderingContext2D } => {
  const canvas: HTMLCanvasElement = getCanvasElementById(id);
  const metric = generateTargetMetric(rectGeneratorInfo);

  canvas.width =
    rectGeneratorInfo.blockSize * rectGeneratorInfo.columnCount +
    rectGeneratorInfo.canvasPadding * 2;

  canvas.height =
    rectGeneratorInfo.blockSize * rectGeneratorInfo.rowCount + rectGeneratorInfo.canvasPadding * 2;

  const ctx: CanvasRenderingContext2D = getCanvasRendering2DContext(canvas);

  return {
    canvas,
    metric,
    ctx,
  };
};

export const getCanvasElementById = (id: string): HTMLCanvasElement => {
  const canvas = document.getElementById(id);

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error(
      `The element of id "${id}" is not a HTMLCanvasElement. Make sure a <canvas id="${id}""> element is present in the document.`
    );
  }

  return canvas;
};

export const getCanvasRendering2DContext = (
  canvas: HTMLCanvasElement
): CanvasRenderingContext2D => {
  const context = canvas.getContext("2d");

  if (context === null) {
    throw new Error("This browser does not support 2-dimensional canvas rendering contexts.");
  }

  return context;
};

export const generateTargetMetric = (rectGeneratorInfo: RectGeneratorInfo): number[][] => {
  let row = [];
  for (let i = 0; i < rectGeneratorInfo.rowCount; i++) {
    let column = [];
    for (let j = 0; j < rectGeneratorInfo.columnCount; j++) {
      column[j] = getRandomInt(rectGeneratorInfo.blockTypeCount);
    }
    row[i] = column;
  }
  return row;
};

export const switchBlockConstructor = (
  typeNum: number,
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: RectGeneratorInfo
) => {
  switch (typeNum) {
    case 0: {
      const newPosition = constructVerticalRectBlock(ctx, x, y, rectGeneratorInfo);
      return {
        x: newPosition.x,
        y: newPosition.y,
      };
    }
    case 1: {
      const newPosition = constructHorizontalRectBlock(ctx, x, y, rectGeneratorInfo);
      return {
        x: newPosition.x,
        y: newPosition.y,
      };
    }
    case 2: {
      const newPosition = constructBackslashTriangleBlock(ctx, x, y, rectGeneratorInfo);
      return {
        x: newPosition.x,
        y: newPosition.y,
      };
    }
    case 3: {
      const newPosition = constructSlashTriangleBlock(ctx, x, y, rectGeneratorInfo);
      return {
        x: newPosition.x,
        y: newPosition.y,
      };
    }
    case 4: {
      const newPosition = constructBlankBLock(ctx, x, y, rectGeneratorInfo);
      return {
        x: newPosition.x,
        y: newPosition.y,
      };
    }
    default: {
      throw new Error(
        `Something went wrong when generate the random num for block metric, there is a invalid index: ${typeNum}`
      );
    }
  }
};

export const constructBlankBLock = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: RectGeneratorInfo
) => {
  const width = rectGeneratorInfo.blockSize;
  const height = rectGeneratorInfo.blockSize;
  const colorLength = rectGeneratorInfo.colorArray.length - 1;
  let randNum: number = getRandomInt(colorLength);

  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.fillRect(x, y, width, height);

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.strokeRect(x, y, width, height);

  return {
    x: x + rectGeneratorInfo.blockSize,
    y: y,
  };
};

export const constructSlashTriangleBlock = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: RectGeneratorInfo
) => {
  const width = rectGeneratorInfo.blockSize;
  const height = rectGeneratorInfo.blockSize;
  const colorLength = rectGeneratorInfo.colorArray.length - 1;
  let randNum: number = getRandomInt(colorLength);

  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width, y);
  ctx.fill();

  randNum = getRandomInt(colorLength);
  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.beginPath();
  ctx.moveTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x + width, y);
  ctx.fill();

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x, y);
  ctx.stroke();

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x, y + height);
  ctx.stroke();

  return {
    x: x + rectGeneratorInfo.blockSize,
    y: y,
  };
};

export const constructBackslashTriangleBlock = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: RectGeneratorInfo
) => {
  const width = rectGeneratorInfo.blockSize;
  const height = rectGeneratorInfo.blockSize;
  const colorLength = rectGeneratorInfo.colorArray.length - 1;

  // In order to avoid fillrect cover stroke, we draw fillRect then strokeRect

  let randNum: number = getRandomInt(colorLength);
  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.fill();

  randNum = getRandomInt(colorLength);
  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width, y + height);
  ctx.fill();

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x, y);
  ctx.stroke();

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width, y + height);
  ctx.moveTo(x, y);
  ctx.stroke();

  return {
    x: x + rectGeneratorInfo.blockSize,
    y: y,
  };
};

const constructVerticalRectBlock = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: RectGeneratorInfo
) => {
  const width = rectGeneratorInfo.blockSize / 2;
  const height = rectGeneratorInfo.blockSize;
  const colorLength = rectGeneratorInfo.colorArray.length - 1;
  let randNum: number = getRandomInt(colorLength);

  // Build fillRect first to make sure stroke won't cover by fillRect
  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.fillRect(x, y, width, height);

  randNum = getRandomInt(colorLength);
  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.fillRect(x + width, y, width, height);

  // Build strokeRect

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.strokeRect(x, y, width, height);

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.strokeRect(x + width, y, width, height);

  return {
    x: x + rectGeneratorInfo.blockSize,
    y: y,
  };
};

const constructHorizontalRectBlock = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: RectGeneratorInfo
) => {
  const width = rectGeneratorInfo.blockSize;
  const height = rectGeneratorInfo.blockSize / 2;
  const colorLength = rectGeneratorInfo.colorArray.length - 1;
  let randNum: number = getRandomInt(colorLength);

  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.fillRect(x, y, width, height);

  randNum = getRandomInt(colorLength);
  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.fillRect(x, y + height, width, height);

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.strokeRect(x, y, width, height);

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.strokeRect(x, y + height, width, height);

  return {
    x: x + rectGeneratorInfo.blockSize,
    y: y,
  };
};
