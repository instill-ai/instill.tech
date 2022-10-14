import {
  ArrowDownIcon,
  ArrowRightIcon,
  ModelIcon,
} from "@instill-ai/design-system";
import { ReactElement } from "react";

export type AccordionContentLayoutProps = {
  icon: ReactElement;
  title: string;
  source: string;
  destination: string;
  description: string;
  showcase: ReactElement;
};

const AccordionContentLayout = ({
  icon,
  title,
  source,
  destination,
  description,
  showcase,
}: AccordionContentLayoutProps) => {
  return (
    <div className="flex w-full flex-row gap-x-10 bg-[#23C4E7] bg-opacity-30 p-10">
      <div className="flex w-5/12 flex-col">
        <div className="mb-5 flex flex-row gap-x-5">
          <div className="flex">{icon}</div>
          <div className="text-lg font-semibold uppercase text-white">
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
          <div className="mx-auto text-lg font-normal text-white">{source}</div>
          <ArrowRightIcon
            width="w-4"
            height="h-4"
            color="fill-white"
            position="m-auto"
          />
          <ModelIcon
            width="w-6"
            height="h-6"
            color="fill-white"
            position="m-auto"
          />
          <ArrowRightIcon
            width="w-4"
            height="h-4"
            color="fill-white"
            position="m-auto"
          />
          <div className="mx-auto text-lg font-normal text-white">
            {destination}
          </div>
        </div>
        <div className="mr-auto flex text-base font-normal text-instillGrey30">
          {description}
        </div>
      </div>
      <div className="flex w-7/12">{showcase}</div>
    </div>
  );
};

export default AccordionContentLayout;
