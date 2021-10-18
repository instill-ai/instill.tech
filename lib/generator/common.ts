import { GeneratorInfo } from "../../types/generator";

export const prepareCanvas = (
  id: string,
  generatorInfo: GeneratorInfo
): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } => {
  const canvas: HTMLCanvasElement = getCanvasElementById(id);

  canvas.width =
    generatorInfo.blockSize * generatorInfo.columnCount +
    generatorInfo.canvasPadding * 2 +
    generatorInfo.baseStrokeWidth * 4;

  canvas.height =
    generatorInfo.blockSize * generatorInfo.rowCount +
    generatorInfo.canvasPadding * 2 +
    generatorInfo.baseStrokeWidth * 4;

  const ctx: CanvasRenderingContext2D = getCanvasRendering2DContext(canvas);

  return {
    canvas,
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

export const shuffleArray = (array: any[]): any[] => {
  let shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
};
