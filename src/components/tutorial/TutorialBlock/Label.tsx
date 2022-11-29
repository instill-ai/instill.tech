import {
  ImageClassificationIcon,
  InstanceSegmentationIcon,
  KeypointDetectionIcon,
  ObjectDetectionIcon,
  OpticalCharacterRecognitionIcon,
  SemanticSegmentationIcon,
} from "@instill-ai/design-system";
import { ReactElement } from "react";
import cn from "clsx";

import { Nullable, TutorialMeta } from "@/types/instill";

export type LabelProps = {
  cvTask: TutorialMeta["cvTask"];
  position?: string;
  marginBottom?: string;
};

export const Label = ({ cvTask, position, marginBottom }: LabelProps) => {
  let icon: Nullable<ReactElement> = null;
  let labelText: Nullable<string> = null;
  let iconStyle = {
    color: "fill-instillGrey80",
    width: "w-5",
    height: "h-5",
    position: "m-auto",
  };

  switch (cvTask) {
    case "ocr":
      icon = <OpticalCharacterRecognitionIcon {...iconStyle} />;
      labelText = "OCR (optical character recognition)";
      break;
    case "imageClassification":
      icon = <ImageClassificationIcon {...iconStyle} />;
      labelText = "Image Classification";
      break;
    case "instanceSegmentation":
      icon = <InstanceSegmentationIcon {...iconStyle} />;
      labelText = "Instance Segmentation";
      break;
    case "keypointDetection":
      icon = <KeypointDetectionIcon {...iconStyle} />;
      labelText = "Keypoint Detection (Pose Estimation)";
      break;
    case "objectDetection":
      icon = <ObjectDetectionIcon {...iconStyle} />;
      labelText = "Object Detection";
      break;
    case "semanticSegmentation":
      icon = <SemanticSegmentationIcon {...iconStyle} />;
      labelText = "Semantic Segmentation";
      break;
    default:
      icon = null;
  }

  return (
    <div
      className={cn(
        "flex flex-row gap-x-[5px] bg-instillGrey20 py-1 px-2",
        position,
        marginBottom
      )}
    >
      <div>{icon}</div>
      <p className="pt-[3px] font-mono text-xs font-normal text-instillGrey80">
        {labelText}
      </p>
    </div>
  );
};
