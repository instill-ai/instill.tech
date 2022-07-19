export interface GeneratorInfo {
  baseStrokeWidth: number;
  baseStrokeColor: string;
  colorArray: string[];
  blockSize: number;
  blockTypeCount: number;
  rowCount: number;
  columnCount: number;
  canvasPadding: number;
}

export interface PixelGeneratorInfo extends GeneratorInfo {
  blockBaseColor: string;
  metricType: "FullRandom" | "TwoLayerRandom";
  downloadWhenGenerate: boolean;
}
