import { SingleSelectCheckboxProps } from "@/components/ui";
import { TutorialMeta } from "@/types/instill";
import { Dispatch, SetStateAction, useMemo } from "react";
import { TutorialFilter, TutorialFilterProps } from "./TutorialFilter";

export type TutorialFiltersProps = {
  tutorials: TutorialMeta[];
  filters: {
    cvTask: string;
    connector: string;
  };
  setFilters: Dispatch<
    SetStateAction<{
      cvTask: string;
      connector: string;
    }>
  >;
};

export const TutorialFilters = ({
  tutorials,
  filters,
  setFilters,
}: TutorialFiltersProps) => {
  const connectorOptions = useMemo<SingleSelectCheckboxProps["options"]>(() => {
    let options: SingleSelectCheckboxProps["options"] = [
      { label: "all", value: "all" },
    ];

    for (const tutorial of tutorials) {
      let existSourceIndex = options.findIndex(
        (e) => e.value === tutorial.sourceConnector
      );

      if (existSourceIndex === -1) {
        options.push({
          label: tutorial.sourceConnector,
          value: tutorial.sourceConnector,
        });
      }

      let existDestinationIndex = options.findIndex(
        (e) => e.value === tutorial.destinationConnector
      );

      if (existDestinationIndex === -1) {
        options.push({
          label: tutorial.destinationConnector,
          value: tutorial.destinationConnector,
        });
      }
    }

    return options;
  }, [tutorials]);

  return (
    <div className="flex flex-col gap-y-10">
      <TutorialFilter
        id="cvTask"
        title="CV Task"
        value={filters.cvTask || ""}
        setValue={(value) => setFilters((prev) => ({ ...prev, cvTask: value }))}
        options={[
          { label: "all", value: "all" },
          { label: "Image Classification", value: "imageClassification" },
          { label: "Instance Segmentation", value: "instanceSegmentation" },
          {
            label: "Keypoint Detection (Pose Estimation)",
            value: "keypointDetection",
          },
          {
            label: "Object Detection",
            value: "objectDetection",
          },
          {
            label: "OCR (optical character recognition)",
            value: "ocr",
          },
          {
            label: "Semantic Segmentation",
            value: "semanticSegmentation",
          },
        ]}
      />
      <TutorialFilter
        id="connector"
        title="Connector"
        value={filters.connector || ""}
        setValue={(value) =>
          setFilters((prev) => ({ ...prev, connector: value }))
        }
        options={connectorOptions}
      />
    </div>
  );
};
