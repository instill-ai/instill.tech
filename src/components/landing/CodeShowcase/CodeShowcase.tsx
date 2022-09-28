import cn from "clsx";
import { ArrowRightIcon, TextButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";

import ResourceBlock from "./ResourceBlock";
import Terminal from "./Terminal";

export type CodeShowcaseProps = {
  marginBottom?: string;
};

export type Resource = "pipeline" | "source" | "model" | "destination";
export type SetResource = Dispatch<SetStateAction<Resource>>;

const CodeShowcase = ({ marginBottom }: CodeShowcaseProps) => {
  const router = useRouter();
  const [currentResource, setCurrentResource] = useState<Resource>("pipeline");

  return (
    <div className={cn("flex flex-col", marginBottom)}>
      <div className="mb-3 flex flex-col">
        <div className="pl-0.5 font-sans text-base font-normal uppercase text-instillBlue30">
          For researchers & developers
        </div>
        <h2 className="mb-10 font-mono text-4xl font-medium text-instillGrey90">
          Leverage your visual data
        </h2>
        <p className="mb-2 font-sans text-base font-normal text-instillGrey90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
          adipiscing molestie amet, vel blandit ipsum justo non in. Elit
          ultricies dictumst aliquam ultrices imperdiet volutpat.
        </p>
      </div>

      <TextButton
        type="button"
        color="primary"
        itemGapX="gap-x-6"
        padding="pr-2.5 py-[5px]"
        position="mt-auto mb-20"
        onClickHandler={() => router.push("/docs/start-here/getting-started")}
        endIcon={
          <ArrowRightIcon
            position="my-auto"
            width="w-5"
            height="h-5"
            color="fill-instillBlue50"
          />
        }
      >
        See documentation
      </TextButton>
      <div className="flex flex-row">
        <div className="flex w-5/12 flex-col">
          <ResourceBlock
            resource="pipeline"
            currentResource={currentResource}
            setCurrentResource={setCurrentResource}
          />
          <ResourceBlock
            resource="source"
            currentResource={currentResource}
            setCurrentResource={setCurrentResource}
          />
          <ResourceBlock
            resource="model"
            currentResource={currentResource}
            setCurrentResource={setCurrentResource}
          />
          <ResourceBlock
            resource="destination"
            currentResource={currentResource}
            setCurrentResource={setCurrentResource}
          />
        </div>
        <div className="w-7/12">
          <Terminal currectResource={currentResource} />
        </div>
      </div>
    </div>
  );
};

export default CodeShowcase;
