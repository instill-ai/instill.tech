import { GeneratorInfo } from "../../types/generator";
import { getNonDuplicatedRandomInt, getRandomInt } from "../utilities";

export const generateTargetMetric = (rectGeneratorInfo: GeneratorInfo): number[][] => {
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
  rectGeneratorInfo: GeneratorInfo
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
      const newPosition = constructBlankBlock(ctx, x, y, rectGeneratorInfo);
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

export const constructBlankBlock = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: GeneratorInfo
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
  rectGeneratorInfo: GeneratorInfo
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

  randNum = getNonDuplicatedRandomInt(colorLength, randNum);
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

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.strokeRect(x, y, width, height);

  return {
    x: x + rectGeneratorInfo.blockSize,
    y: y,
  };
};

export const constructBackslashTriangleBlock = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: GeneratorInfo
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

  randNum = getNonDuplicatedRandomInt(colorLength, randNum);
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

  ctx.lineWidth = rectGeneratorInfo.baseStrokeWidth;
  ctx.strokeStyle = rectGeneratorInfo.baseStrokeColor;
  ctx.strokeRect(x, y, width, height);

  return {
    x: x + rectGeneratorInfo.blockSize,
    y: y,
  };
};

export const constructVerticalRectBlock = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: GeneratorInfo
) => {
  const width = rectGeneratorInfo.blockSize / 2;
  const height = rectGeneratorInfo.blockSize;
  const colorLength = rectGeneratorInfo.colorArray.length - 1;
  let randNum: number = getRandomInt(colorLength);

  // Build fillRect first to make sure stroke won't cover by fillRect
  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.fillRect(x, y, width, height);

  randNum = getNonDuplicatedRandomInt(colorLength, randNum);
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

export const constructHorizontalRectBlock = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  rectGeneratorInfo: GeneratorInfo
) => {
  const width = rectGeneratorInfo.blockSize;
  const height = rectGeneratorInfo.blockSize / 2;
  const colorLength = rectGeneratorInfo.colorArray.length - 1;

  let randNum: number = getRandomInt(colorLength);
  ctx.fillStyle = rectGeneratorInfo.colorArray[randNum];
  ctx.fillRect(x, y, width, height);

  randNum = getNonDuplicatedRandomInt(colorLength, randNum);
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
