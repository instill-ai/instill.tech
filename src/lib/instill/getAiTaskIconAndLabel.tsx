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
} from "@instill-ai/design-system";

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
    case "ocr":
      icon = (iconStyle: IconStyle) => (
        <OpticalCharacterRecognitionIcon {...iconStyle} />
      );
      label = "OCR (optical character recognition)";
      break;
    case "imageClassification":
      icon = (iconStyle: IconStyle) => (
        <ImageClassificationIcon {...iconStyle} />
      );
      label = "Image Classification";
      break;
    case "instanceSegmentation":
      icon = (iconStyle: IconStyle) => (
        <InstanceSegmentationIcon {...iconStyle} />
      );
      label = "Instance Segmentation";
      break;
    case "keypointDetection":
      icon = (iconStyle: IconStyle) => <KeypointDetectionIcon {...iconStyle} />;
      label = "Keypoint Detection (Pose Estimation)";
      break;
    case "objectDetection":
      icon = (iconStyle: IconStyle) => <ObjectDetectionIcon {...iconStyle} />;
      label = "Object Detection";
      break;
    case "semanticSegmentation":
      icon = (iconStyle: IconStyle) => (
        <SemanticSegmentationIcon {...iconStyle} />
      );
      label = "Semantic Segmentation";
      break;
    default:
      icon = null;
  }

  return { icon, label };
};
