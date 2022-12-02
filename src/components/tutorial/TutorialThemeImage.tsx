import { ReactElement } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@instill-ai/design-system";

import { Nullable } from "@/types/instill";
import { TutorialLabel } from "./TutorialLabel";

export type TutorialThemeImageProps = {
  cvTaskIcon: Nullable<ReactElement>;
  cvTaskLabel: string;
};

export const TutorialThemeImage = ({
  cvTaskIcon,
  cvTaskLabel,
}: TutorialThemeImageProps) => {
  return (
    <div className="relative mb-10 h-[450px] w-full bg-instillWarmOrange50">
      <div className="absolute top-5 left-5 flex flex-col gap-y-5">
        <div className="group flex bg-instillGrey80 bg-opacity-20 px-5 py-2 hover:bg-opacity-75">
          <Link href="/tutorials">
            <a className="flex w-full flex-row gap-x-2">
              <ArrowLeftIcon
                width="w-5"
                height="h-5"
                color="fill-instillGrey20 group-hover:fill-instillGrey05"
                position="my-auto"
              />
              <p className="inline-flex items-center font-mono text-xs font-normal text-instillGrey20 group-hover:text-instillGrey05">
                Back
              </p>
            </a>
          </Link>
        </div>
        <div className="bg-instillGrey80 bg-opacity-20 px-5 py-2">
          <TutorialLabel
            icon={cvTaskIcon || undefined}
            label={cvTaskLabel}
            position="mr-auto"
            labelTextStyle="font-mono text-xs font-normal text-instillGrey20"
          />
        </div>
      </div>
    </div>
  );
};
