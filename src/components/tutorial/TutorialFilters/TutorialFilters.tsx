import cn from "clsx";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { FilterIcon, XIcon } from "@instill-ai/design-system";

import { SingleSelectCheckboxProps } from "@/components/ui";
import { getCvTaskIconAndLabel } from "@/lib/instill";
import { CvTask, Nullable, TutorialMeta } from "@/types/instill";
import { TutorialLabel } from "../TutorialLabel";
import { TutorialFilter } from "./TutorialFilter";
import { useWindowSize } from "@/hooks/useWindowSize";
import { getCvTaskIconAndLabelReturn } from "@/lib/instill/getCvTaskIconAndLabel";

type Filters = {
  cvTask: CvTask | "All";
  connector: string;
};

export type TutorialFiltersProps = {
  tutorials: TutorialMeta[];
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

export const TutorialFilters = ({
  tutorials,
  filters,
  setFilters,
}: TutorialFiltersProps) => {
  const windowSize = useWindowSize();

  const connectorOptions = useMemo<SingleSelectCheckboxProps["options"]>(() => {
    let options: SingleSelectCheckboxProps["options"] = [
      { label: "All", value: "All" },
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

  const cvTaskFilterLabel = useMemo<{
    icon: getCvTaskIconAndLabelReturn["icon"];
    label: string;
  }>(() => {
    if (filters.cvTask === "All") {
      return {
        icon: null,
        label: "All",
      };
    } else {
      return getCvTaskIconAndLabel({
        cvTask: filters.cvTask,
      });
    }
  }, [filters]);

  const [filterIsOpen, setFilterIsOpen] = useState(false);

  // When window width is bigger than our max width(1127px) we keep
  // the filter open and close the mobile filter every time the width
  // changed below 1127px

  useEffect(() => {
    if (windowSize?.width) {
      if (windowSize.width > 1127) {
        setFilterIsOpen(true);
      } else {
        setFilterIsOpen(false);
      }
    }
  }, [windowSize?.width]);

  return (
    <>
      {/* 
        This component is complicated. It serves two things, the first one
        is the normal filter view when the window size is bigger than 1127.
        The second one is when at the mobile view (width < 1127px) It need 
        to act like a full screen popup. You could separate these two by 
        observing the breakpoint xl.
      */}
      <div
        className={cn(
          "fixed top-0 left-0 z-[60] flex h-screen w-full flex-col gap-y-10 bg-white py-5 px-4 xl:static xl:z-auto xl:h-full xl:px-0 xl:py-0",
          filterIsOpen ? "" : "hidden"
        )}
      >
        <div
          className="flex w-full cursor-pointer xl:hidden"
          onClick={() => setFilterIsOpen(false)}
        >
          <XIcon
            width="w-[30px]"
            height="h-[30px]"
            color="fill-instillGrey90"
            position="ml-auto"
          />
        </div>
        <TutorialFilter
          id="cvTask"
          title="CV Task"
          value={filters.cvTask || ""}
          setValue={(value) =>
            setFilters((prev) => ({
              ...prev,
              cvTask: value as Filters["cvTask"],
            }))
          }
          options={[
            { label: "All", value: "All" },
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

      {/* 
        This is the button that can open filter popup at mobile view
        and the list of the current filters.
      */}

      <div className="mb-20 flex flex-col xl:hidden">
        <div
          className="mb-2.5 flex flex-row gap-x-2"
          onClick={() => setFilterIsOpen(true)}
        >
          <div className="my-auto flex">
            <FilterIcon
              width="w-[30px]"
              height="h-[30px]"
              color="fill-instillGrey90"
            />
          </div>
          <h3 className="inline-flex items-center text-instillGrey90 text-instill-h3-medium">
            Filter
          </h3>
        </div>
        <div className="flex flex-col gap-y-2.5">
          <div className="flex flex-row gap-x-5">
            <p className="font-sans text-base font-medium">CV task:</p>
            <TutorialLabel
              icon={
                cvTaskFilterLabel.icon
                  ? cvTaskFilterLabel.icon({
                      color: "fill-instillGrey80",
                      width: "w-5",
                      height: "h-5",
                      position: "my-auto",
                    })
                  : undefined
              }
              label={cvTaskFilterLabel.label}
              labelTextStyle="font-mono text-xs font-normal text-instillGrey80"
              labelBgColor="bg-instillGrey05"
              labelPadding="py-1 px-2"
            />
          </div>
          <div className="flex flex-row gap-x-5">
            <p className="font-sans text-base font-medium">Connector:</p>
            <TutorialLabel
              icon={undefined}
              label={filters.connector}
              labelTextStyle="font-mono text-xs font-normal text-instillGrey80"
              labelBgColor="bg-instillGrey05"
              labelPadding="py-1 px-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
