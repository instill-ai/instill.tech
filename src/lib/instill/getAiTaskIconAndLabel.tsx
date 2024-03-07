/* eslint-disable react/display-name, react/no-multi-comp */

import { AiTask, Nullable } from "@/types/instill";
import { ReactElement } from "react";
import {
  ImageClassificationIcon,
  InstanceSegmentationIcon,
  KeypointDetectionIcon,
  ObjectDetectionIcon,
  OpticalCharacterRecognitionIcon,
  SemanticSegmentationIcon,
  TextToImageIcon,
  TextGenerationIcon,
  Icons,
} from "@instill-ai/design-system";

import cn from "clsx";

type IconStyle = {
  color: string;
  width: string;
  height: string;
  position?: string;
};

export type getAiTaskIconAndLabelProps = {
  aiTask: Nullable<AiTask>;
};

export type getAiTaskIconAndLabelReturn = {
  label: string;
  icon: Nullable<(iconStyle: IconStyle) => ReactElement>;
};

export const getAiTaskIconAndLabel = ({
  aiTask,
}: getAiTaskIconAndLabelProps): getAiTaskIconAndLabelReturn => {
  let icon: Nullable<(iconStyle: IconStyle) => ReactElement> = null;
  let label = "";

  switch (aiTask) {
    case "Ocr":
      icon = (iconStyle: IconStyle) => (
        <OpticalCharacterRecognitionIcon {...iconStyle} />
      );
      label = "OCR (Optical Character Recognition)";
      break;
    case "ImageClassification":
      icon = (iconStyle: IconStyle) => (
        <ImageClassificationIcon {...iconStyle} />
      );
      label = "Image Classification";
      break;
    case "InstanceSegmentation":
      icon = (iconStyle: IconStyle) => (
        <InstanceSegmentationIcon {...iconStyle} />
      );
      label = "Instance Segmentation";
      break;
    case "KeypointDetection":
      icon = (iconStyle: IconStyle) => <KeypointDetectionIcon {...iconStyle} />;
      label = "Keypoint Detection (Pose Estimation)";
      break;
    case "ObjectDetection":
      icon = (iconStyle: IconStyle) => <ObjectDetectionIcon {...iconStyle} />;
      label = "Object Detection";
      break;
    case "SemanticSegmentation":
      icon = (iconStyle: IconStyle) => (
        <SemanticSegmentationIcon {...iconStyle} />
      );
      label = "Semantic Segmentation";
      break;
    case "TextGeneration":
      icon = (iconStyle: IconStyle) => <TextGenerationIcon {...iconStyle} />;
      label = "Text Generation";
      break;
    case "TextToImage":
      icon = (iconStyle: IconStyle) => <TextToImageIcon {...iconStyle} />;
      label = "Text to Image";
      break;
    case "VisualQuestionAnswering":
      icon = (iconStyle: IconStyle) => (
        <Icons.VisualQuestionAnswering
          className={cn(
            "my-auto h-4 w-4",
            iconStyle.color === "fill-instillGrey80"
              ? "stroke-semantic-fg-disabled"
              : "stroke-semantic-fg-on-default"
          )}
        />
      );
      label = "Visual Question Answering";
      break;
    case "Null":
      icon = null;
      label = "General";
      break;
    default:
      icon = null;
  }

  return { icon, label };
};
