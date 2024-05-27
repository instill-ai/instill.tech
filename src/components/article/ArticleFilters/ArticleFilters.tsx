import cn from "clsx";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FilterIcon, XIcon } from "@instill-ai/design-system";

import { SingleSelectCheckboxProps } from "@/components/ui";
import { getAiTaskIconAndLabel } from "@/lib/instill";
import { AiTask, ArticleMeta } from "@/types/instill";
import { ArticleLabel } from "../ArticleLabel";
import { ArticleFilter } from "./ArticleFilter";
import { useWindowSize } from "@/hooks/useWindowSize";
import { getAiTaskIconAndLabelReturn } from "@/lib/instill/getAiTaskIconAndLabel";

type Filters = {
  aiTask: AiTask | "All";
  connector: string;
  useCase: string;
};

export type ArticleFiltersProps = {
  articles: ArticleMeta[];
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

export const ArticleFilters = ({
  articles,
  filters,
  setFilters,
}: ArticleFiltersProps) => {
  const windowSize = useWindowSize();

  const connectorOptions = useMemo<SingleSelectCheckboxProps["options"]>(() => {
    const options: SingleSelectCheckboxProps["options"] = [
      { label: "All", value: "All" },
    ];

    return options;
  }, [articles]);

  const aiTaskFilterLabel = useMemo<{
    icon: getAiTaskIconAndLabelReturn["icon"];
    label: string;
  }>(() => {
    if (filters.aiTask === "All") {
      return {
        icon: null,
        label: "All",
      };
    } else {
      return getAiTaskIconAndLabel({
        aiTask: filters.aiTask,
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
    <React.Fragment>
      {/* 
        This component is complicated. It serves two things, the first one
        is the normal filter view when the window size is bigger than 1127.
        The second one is when at the mobile view (width < 1127px) It need 
        to act like a full screen popup. You could separate these two by 
        observing the breakpoint xl.
      */}
      <div
        className={cn(
          "fixed left-0 top-0 z-[60] flex h-screen w-full flex-col gap-y-10 bg-white px-4 py-5 xl:static xl:z-auto xl:h-full xl:px-0 xl:py-0",
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
        <ArticleFilter
          id="aiTask"
          title="AI task"
          value={filters.aiTask || ""}
          setValue={(value) =>
            setFilters((prev) => ({
              ...prev,
              aiTask: value as Filters["aiTask"],
            }))
          }
          options={[
            { label: "All", value: "All" },
            { label: "Image Classification", value: "ImageClassification" },
            { label: "Instance Segmentation", value: "InstanceSegmentation" },
            {
              label: "Keypoint Detection (Pose Estimation)",
              value: "KeypointDetection",
            },
            {
              label: "Object Detection",
              value: "ObjectDetection",
            },
            {
              label: "OCR (Optical Character Recognition)",
              value: "Ocr",
            },
            {
              label: "Visual Question Answering",
              value: "VisualQuestionAnswering",
            },
            {
              label: "Semantic Segmentation",
              value: "SemanticSegmentation",
            },
            {
              label: "Text to Image",
              value: "TextToImage",
            },
            {
              label: "Text Generation",
              value: "TextGeneration",
            },
          ]}
        />
        <ArticleFilter
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
            <p className="font-sans text-base font-medium">AI task:</p>
            <ArticleLabel
              icon={
                aiTaskFilterLabel.icon
                  ? aiTaskFilterLabel.icon({
                      color: "fill-instillGrey80",
                      width: "w-5",
                      height: "h-5",
                      position: "my-auto",
                    })
                  : undefined
              }
              label={aiTaskFilterLabel.label}
              labelTextStyle="font-mono text-xs font-normal text-instillGrey80"
              labelBgColor="bg-instillGrey05"
              labelPadding="py-1 px-2"
            />
          </div>
          <div className="flex flex-row gap-x-5">
            <p className="font-sans text-base font-medium">Connector:</p>
            <ArticleLabel
              icon={undefined}
              label={filters.connector}
              labelTextStyle="font-mono text-xs font-normal text-instillGrey80"
              labelBgColor="bg-instillGrey05"
              labelPadding="py-1 px-2"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
