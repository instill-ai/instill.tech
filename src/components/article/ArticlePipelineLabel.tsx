import { getAiTaskIconAndLabelReturn } from "@/lib/instill/getAiTaskIconAndLabel";
import { AiTask, Nullable } from "@/types/instill";
import { ArrowRightIcon } from "@instill-ai/design-system";
import cn from "clsx";
import { ArticleLabel } from "./ArticleLabel";

export type ArticlePipelineLabelProps = {
  aiTask: Nullable<AiTask>;
  label: string;
  sourceConnector?: Nullable<string>;
  destinationConnector?: Nullable<string>;
  marginBottom?: string;
  icon?: getAiTaskIconAndLabelReturn["icon"];
};

export const ArticlePipelineLabel = ({
  aiTask,
  marginBottom,
  sourceConnector,
  destinationConnector,
  icon,
  label,
}: ArticlePipelineLabelProps) => {
  if (
    aiTask === "Null" ||
    sourceConnector === "Null" ||
    destinationConnector === "Null"
  ) {
    return <div className={cn("flex flex-col", marginBottom)}></div>;
  }

  return (
    <div className={cn("flex flex-col", marginBottom)}>
      {/* 
        Because the whole pipeline labels will be too long at mobile view,
        we need to break them up to fit into the screen.
      */}
      <div className="mb-5 flex xl:hidden">
        <ArticleLabel
          icon={
            icon
              ? icon({
                  color: "fill-instillGrey05",
                  width: "w-6",
                  height: "h-6",
                  position: "m-auto",
                })
              : undefined
          }
          label={label}
          labelBgColor="bg-instillSkyBlue"
          labelPadding="px-2 py-1"
          labelTextStyle="font-sans text-base text-instillGrey05"
        />
      </div>
      <div className="mb-2 flex flex-row gap-x-4">
        <div className="hidden flex-row gap-x-4 xl:flex">
          <ArticleLabel
            icon={
              icon
                ? icon({
                    color: "fill-instillGrey05",
                    width: "w-6",
                    height: "h-6",
                    position: "m-auto",
                  })
                : undefined
            }
            label={label}
            labelBgColor="bg-instillSkyBlue"
            labelPadding="px-2 py-1"
            labelTextStyle="font-sans text-base text-instillGrey05"
          />
        </div>
      </div>
    </div>
  );
};
