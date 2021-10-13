import { FC, useEffect } from "react";

interface Props {}

const blockSize = 200;
const blockTypeAmount = 5;
const baseStrokeColor = "#000000";
const baseStrokeWidth = 4;
const colorNum = 6;
const rowSize = 3;
const columnSize = 3;


const color = {
  yellowSun: "#FFFF1A",
  brightYellow: "#FCB21B",
  guppieGreen: "#27FC86",
  fluorescentBlue: "#3EEDFF",
  shockingPink: "#F75FFF",
  heliotrope: "#C65AFF",
};

const colorArray = ["#FFFF1A", "#FCB21B", "#27FC86", "#3EEDFF", "#F75FFF", "#C65AFF"];

export const RectBlock: FC<Props> = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement = getCanvasElementById("generator-canvas");

    console.log(generateTargetMetric(rowSize, columnSize))

    canvas.width = 610;
    canvas.height = 610;

    const ctx: CanvasRenderingContext2D = getCanvasRendering2DContext(canvas);

    let randNum: number = getRandomInt(6);
    let x;
    let y;

    const newPoint = constructSlashTriangleBlock(ctx, 5, 5);
    x = newPoint.x;
    y = newPoint.y;

    const newpoint2 = constructHorizontalRectBlock(ctx, x, y);
    x = newpoint2.x;
    y = newpoint2.y;

    constructBackslashTriangleBlock(ctx, x, y);

    // ctx.fillStyle = colorArray[randNum];
    // console.log(colorArray[randNum]);
    // ctx.fillRect(5, 5, 100, 200);

    // ctx.lineWidth = 4;
    // ctx.strokeStyle = "#000000";
    // ctx.strokeRect(5, 5, 100, 200);

    // randNum = getRandomInt(6);

    // ctx.fillStyle = colorArray[randNum];
    // console.log(colorArray[randNum]);
    // ctx.fillRect(105, 5, 100, 200);

    // ctx.lineWidth = 4;
    // ctx.strokeStyle = "#000000";
    // ctx.strokeRect(105, 5, 100, 200);

    // randNum = getRandomInt(6);
    // ctx.fillStyle = colorArray[randNum];
    // ctx.beginPath();
    // ctx.moveTo(205, 5);
    // ctx.lineTo(205, 205);
    // ctx.lineTo(405, 205);
    // ctx.lineTo(205, 5);
    // ctx.fill();
  }, []);

  return <canvas id="generator-canvas"></canvas>;
};

const getCanvasElementById = (id: string): HTMLCanvasElement => {
  const canvas = document.getElementById(id);

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error(
      `The element of id "${id}" is not a HTMLCanvasElement. Make sure a <canvas id="${id}""> element is present in the document.`
    );
  }

  return canvas;
};

const getCanvasRendering2DContext = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const context = canvas.getContext("2d");

  if (context === null) {
    throw new Error("This browser does not support 2-dimensional canvas rendering contexts.");
  }

  return context;
};

const getRandomInt = (max: number): number => {
  // If max = 2, it will return 0 or 1
  return Math.floor(Math.random() * max);
};

const constructVerticalRectBlock = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  const width = blockSize / 2;
  const height = blockSize;

  // Build fillRect first to make sure stroke won't cover by fillRect
  let randNum: number = getRandomInt(colorNum - 1);
  ctx.fillStyle = colorArray[randNum];
  ctx.fillRect(x, y, width, height);

  randNum = getRandomInt(colorNum - 1);
  ctx.fillStyle = colorArray[randNum];
  ctx.fillRect(x + width, y, width, height);

  // Build strokeRect

  ctx.lineWidth = baseStrokeWidth;
  ctx.strokeStyle = baseStrokeColor;
  ctx.strokeRect(x, y, width, height);

  ctx.lineWidth = baseStrokeWidth;
  ctx.strokeStyle = baseStrokeColor;
  ctx.strokeRect(x + width, y, width, height);

  return {
    x: x + blockSize,
    y: y,
  };
};

const constructHorizontalRectBlock = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  const width = blockSize;
  const height = blockSize / 2;

  let randNum: number = getRandomInt(colorNum - 1);
  ctx.fillStyle = colorArray[randNum];
  ctx.fillRect(x, y, width, height);

  randNum = getRandomInt(colorNum - 1);
  ctx.fillStyle = colorArray[randNum];
  ctx.fillRect(x, y + height, width, height);

  ctx.lineWidth = baseStrokeWidth;
  ctx.strokeStyle = baseStrokeColor;
  ctx.strokeRect(x, y, width, height);

  ctx.lineWidth = baseStrokeWidth;
  ctx.strokeStyle = baseStrokeColor;
  ctx.strokeRect(x, y + height, width, height);

  return {
    x: x + blockSize,
    y: y,
  };
};

const constructBackslashTriangleBlock = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  const width = blockSize;
  const height = blockSize;

  // In order to avoid fillrect cover stroke, we draw fillRect then strokeRect

  let randNum: number = getRandomInt(colorNum - 1);
  ctx.fillStyle = colorArray[randNum];
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.fill();

  randNum = getRandomInt(colorNum - 1);
  ctx.fillStyle = colorArray[randNum];
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width, y + height);
  ctx.fill();

  ctx.lineWidth = baseStrokeWidth;
  ctx.strokeStyle = baseStrokeColor;
  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x, y);
  ctx.stroke();

  ctx.lineWidth = baseStrokeWidth;
  ctx.strokeStyle = baseStrokeColor;
  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width, y + height);
  ctx.moveTo(x, y);
  ctx.stroke();
};

const constructSlashTriangleBlock = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  const width = blockSize;
  const height = blockSize;

  let randNum: number = getRandomInt(colorNum - 1);
  ctx.fillStyle = colorArray[randNum];
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width, y);
  ctx.fill();

  randNum = getRandomInt(colorNum - 1);
  ctx.fillStyle = colorArray[randNum];
  ctx.beginPath();
  ctx.moveTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x + width, y);
  ctx.fill();

  ctx.lineWidth = baseStrokeWidth;
  ctx.strokeStyle = baseStrokeColor;
  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x, y);
  ctx.stroke();

  ctx.lineWidth = baseStrokeWidth;
  ctx.strokeStyle = baseStrokeColor;
  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x, y + height);
  ctx.stroke();

  return {
    x: x + blockSize,
    y: y,
  };
};

const constructBlankBLock = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  const width = blockSize;
  const height = blockSize;

  let randNum: number = getRandomInt(colorNum - 1);
  ctx.fillStyle = colorArray[randNum];
  ctx.fillRect(x, y, width, height);

  ctx.lineWidth = baseStrokeWidth;
  ctx.strokeStyle = baseStrokeColor;
  ctx.strokeRect(x, y, width, height);

  return {
    x: x + blockSize,
    y: y,
  };
};

const generateTargetMetric = (rowSize: number, columnSize: number) => {
  let row = [];
  for (let i = 0; i < rowSize; i++) {
    let column = [];
    for (let j = 0; j < columnSize; j++) {
      column[j] = getRandomInt(blockTypeAmount);
    }
    row[i] = column;
  }
  return row
};
