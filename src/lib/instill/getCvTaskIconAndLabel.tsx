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

export type getCvTaskIconAndLabelProps = {
  cvTask: CvTask;
  iconStyle: {
    color: string;
    width: string;
    height: string;
    position?: string;
  };
};

export const getCvTaskIconAndLabel = ({
  cvTask,
  iconStyle,
}: getCvTaskIconAndLabelProps) => {
  let icon: Nullable<ReactElement> = null;
  let label: string = "";

  switch (cvTask) {
    case "ocr":
      icon = <OpticalCharacterRecognitionIcon {...iconStyle} />;
      label = "OCR (optical character recognition)";
      break;
    case "imageClassification":
      icon = <ImageClassificationIcon {...iconStyle} />;
      label = "Image Classification";
      break;
    case "instanceSegmentation":
      icon = <InstanceSegmentationIcon {...iconStyle} />;
      label = "Instance Segmentation";
      break;
    case "keypointDetection":
      icon = <KeypointDetectionIcon {...iconStyle} />;
      label = "Keypoint Detection (Pose Estimation)";
      break;
    case "objectDetection":
      icon = <ObjectDetectionIcon {...iconStyle} />;
      label = "Object Detection";
      break;
    case "semanticSegmentation":
      icon = <SemanticSegmentationIcon {...iconStyle} />;
      label = "Semantic Segmentation";
      break;
    default:
      icon = null;
  }

  return { icon, label };
};
