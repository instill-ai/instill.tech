import { Nullable } from "@/types/instill";
import {
  DataDestinationIcon,
  DataSourceIcon,
  ModelIcon,
  PipelineIcon,
} from "@instill-ai/design-system";
import cn from "clsx";
import { ReactNode } from "react";
import { Resource, SetResource } from "../CodeShowcase";

export type ResourceBlockProps = {
  resource: Resource;
  currentResource: Resource;
  setCurrentResource: SetResource;
};

const ResourceBlock = ({
  resource,
  currentResource,
  setCurrentResource,
}: ResourceBlockProps) => {
  let borderColor: Nullable<string> = null;
  let title: Nullable<string> = null;
  let description: Nullable<string> = null;
  let icon: Nullable<ReactNode> = null;
  let iconStyle = {
    width: "w-[30px]",
    height: "h-[30px]",
    color: "fill-instillGrey90",
    position: "my-auto",
  };

  switch (resource) {
    case "pipeline":
      borderColor =
        resource === currentResource
          ? "border-instillBlue50"
          : "border-instillBlue10";
      title = "Pipeline";
      description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui a sit mauris posuere elementum non sit. ";
      icon = <PipelineIcon {...iconStyle} />;
      break;
    case "model":
      borderColor =
        resource === currentResource
          ? "border-instillYellow50"
          : "border-instillYellow10";
      title = "Model";
      description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui a sit mauris posuere elementum non sit. ";
      icon = <ModelIcon {...iconStyle} />;
      break;
    case "destination":
      borderColor =
        resource === currentResource
          ? "border-instillWarmOrange50"
          : "border-instillWarmOrange05";
      title = "Destination";
      description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui a sit mauris posuere elementum non sit. ";
      icon = <DataDestinationIcon {...iconStyle} />;
      break;
    default:
      borderColor =
        resource === currentResource
          ? "border-instillGreen50"
          : "border-instillGreen10";
      title = "Source";
      description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui a sit mauris posuere elementum non sit. ";
      icon = <DataSourceIcon {...iconStyle} />;
      break;
  }

  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col gap-y-2.5 border-l-[5px] py-5 px-10",
        borderColor
      )}
      onClick={() => setCurrentResource(resource)}
    >
      <div className="flex flex-row gap-x-2.5">
        {icon}
        <h3 className="font-sans text-2xl font-medium text-instillGrey90">
          {title}
        </h3>
      </div>
      <p className="text-base font-normal text-instillGrey90">{description}</p>
    </div>
  );
};

export default ResourceBlock;
