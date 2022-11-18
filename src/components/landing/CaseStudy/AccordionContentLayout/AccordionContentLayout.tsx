import cn from "clsx";
import { Nullable } from "@/types/instill";
import { ArrowRightIcon, ModelIcon } from "@instill-ai/design-system";
import { ReactElement } from "react";

export type AccordionContentLayoutProps = {
  icon: ReactElement;
  title: string;
  source: string;
  destination: string;
  description: string;
  showcases: ReactElement[];
  currentFrame: number;
  focusedShowcaseFrame: Nullable<number>;
  getCurrentItem: () => "source" | "model" | "destination" | null;
};

export const AccordionContentLayout = ({
  icon,
  title,
  source,
  destination,
  description,
  showcases,
  currentFrame,
  focusedShowcaseFrame,
  getCurrentItem,
}: AccordionContentLayoutProps) => {
  return (
    <div className="z-20 flex w-full flex-col gap-y-5 bg-[#285863] p-10 xl:flex-row xl:gap-y-0 xl:gap-x-5">
      <div className="flex w-full flex-col xl:w-6/12">
        <div className="mb-5 flex flex-row gap-x-5">
          <div className="my-auto flex">{icon}</div>
          <div className="my-auto text-lg font-semibold uppercase text-white">
            {title}
          </div>
        </div>
        <svg
          className="mb-5 w-[120px] stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 1"
        >
          <line x1="0" x2="16" y1="0.5" y2="0.5" strokeWidth={0.6} />
        </svg>
        <div className="mr-auto mb-5 flex flex-row gap-x-2">
          <div
            className={cn(
              "my-auto text-sm font-normal",
              getCurrentItem() === "source"
                ? "text-instillNatureGreen"
                : "text-white"
            )}
          >
            {source}
          </div>
          <ArrowRightIcon
            width="w-4"
            height="h-4"
            color="fill-white"
            position="m-auto"
          />
          <ModelIcon
            width="w-6"
            height="h-6"
            color={
              getCurrentItem() === "model"
                ? "fill-instillNatureGreen"
                : "fill-white"
            }
            position="m-auto"
          />
          <ArrowRightIcon
            width="w-4"
            height="h-4"
            color="fill-white"
            position="m-auto"
          />
          <div
            className={cn(
              "my-auto text-sm font-normal",
              getCurrentItem() === "destination"
                ? "text-instillNatureGreen"
                : "text-white"
            )}
          >
            {destination}
          </div>
        </div>
        <div className="mr-auto flex text-base font-normal text-white">
          {description}
        </div>
      </div>
      <div className="relative mr-auto flex xl:mr-0 xl:ml-auto">
        {showcases.map((showcase, i) => (
          <div
            key={showcase.key}
            className={cn(
              "transition delay-150 ease-in-out",
              focusedShowcaseFrame !== null
                ? i === focusedShowcaseFrame
                  ? ""
                  : "hidden"
                : i === currentFrame
                ? ""
                : "hidden"
            )}
          >
            {showcase}
          </div>
        ))}
      </div>
    </div>
  );
};
