import React from "react";
import { ComponentMeta } from "@storybook/react";
import {
  DiagramGenerator,
  initGeneratorInfo,
} from "../../../components/generators/pixel/DiagramGenerator";
import { PixelGeneratorInfo } from "../../../types/generator";

export default {
  title: "Components/generator/pixel/DiagramGenerator",
  component: DiagramGenerator,
  argTypes: {
    blockSize: {
      defaultValue: 300,
      control: { type: "range", min: 120, max: 600, step: 30 },
    },
    blockBaseColor: {
      defaultValue: "#000000",
      control: {
        type: "color",
        presetColors: [
          {
            color: "#000000",
            title: "black",
          },
        ],
      },
    },
    baseStrokeColor: {
      defaultValue: "#374151",
      control: {
        type: "color",
        presetColors: [
          {
            color: "#374151",
            title: "black",
          },
        ],
      },
    },
    baseStrokeWidth: {
      defaultValue: 10,
      control: { type: "range", min: 1, max: 50, step: 1 },
    },
    // rowCount: {
    //   control: {
    //     type: "number",
    //   },
    // },
    // columnCount: {
    //   control: {
    //     type: "number",
    //   },
    // },
    canvasPadding: {
      defaultValue: 20,
      control: { type: "range", min: 8, max: 52, step: 4 },
    },
    metricType: {
      defaultValue: "TwoLayerRandom",
      options: ["FullRandom", "TwoLayerRandom"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof DiagramGenerator>;

const Template = ({
  blockSize,
  blockBaseColor,
  baseStrokeColor,
  baseStrokeWidth,
  rowCount,
  columnCount,
  canvasPadding,
  metricType,
  args,
}) => {
  const generatorInfo: PixelGeneratorInfo = {
    blockSize: blockSize,
    blockBaseColor: blockBaseColor,
    baseStrokeColor: baseStrokeColor,
    baseStrokeWidth: baseStrokeWidth,
    rowCount: initGeneratorInfo.rowCount,
    columnCount: initGeneratorInfo.columnCount,
    canvasPadding: canvasPadding,
    colorArray: initGeneratorInfo.colorArray,
    metricType: metricType,
    blockTypeCount: initGeneratorInfo.blockTypeCount,
  };

  return <DiagramGenerator generatorInfo={generatorInfo} />;
};

export const Default = Template.bind({});
