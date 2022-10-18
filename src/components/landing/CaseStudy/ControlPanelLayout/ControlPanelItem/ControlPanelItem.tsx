import cn from "clsx";
import { ReactElement } from "react";

export type ControlPanelItemProps = {
  icon: ReactElement;
  title: string;
  description: string;
  isActive: boolean;
  controls: ReactElement[];
};

const ControlPanelItem = ({
  icon,
  title,
  description,
  isActive,
  controls,
}: ControlPanelItemProps) => {
  return (
    <div className={cn("flex w-full flex-col")}>
      <div
        className={cn(
          "flex py-2.5",
          isActive ? "bg-instillLightGreen" : "bg-instillGrey30"
        )}
      >
        <div className="mx-auto flex flex-row gap-x-2">
          {icon}
          <p className="my-auto text-sm font-normal uppercase text-white">
            {title}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 bg-white p-5">
        <p
          className={cn(
            "text-sm font-normal",
            isActive ? "text-black" : "text-instillGrey70"
          )}
        >
          {description}
        </p>
        <div className="relative">
          {controls}
          <div
            className={cn(
              "absolute top-0 bottom-0 right-0 left-0 border-2",
              isActive ? "border-instillLightGreen" : "border-instillGrey20"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanelItem;
