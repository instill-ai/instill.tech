/* eslint-disable react/display-name, react/no-multi-comp */

import { CvTask, Nullable } from "@/types/instill";
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

export type getCvTaskIconAndLabelProps = {
  cvTask: CvTask;
};

export type getCvTaskIconAndLabelReturn = {
  label: string;
  icon: Nullable<(iconStyle: IconStyle) => ReactElement>;
};

export const getCvTaskIconAndLabel = ({
  cvTask,
}: getCvTaskIconAndLabelProps): getCvTaskIconAndLabelReturn => {
  let icon: Nullable<(iconStyle: IconStyle) => ReactElement> = null;
  let label: string = "";

  switch (cvTask) {
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
