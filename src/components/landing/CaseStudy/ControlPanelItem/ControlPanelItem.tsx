import cn from "clsx";
import { forwardRef, ReactElement } from "react";

export type ControlPanelItemProps = {
  icon: ReactElement;
  title: string;
  description: string;
  isActive: boolean;
  controls: ReactElement[];
};

const ControlPanelItem = forwardRef<HTMLDivElement, ControlPanelItemProps>(
  ({ icon, title, description, isActive, controls }, ref) => {
    return (
      <div ref={ref} className={cn("flex w-full flex-col")}>
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
          {controls}
        </div>
      </div>
    );
  }
);

ControlPanelItem.displayName = "ControlPanelItem";

export default ControlPanelItem;
