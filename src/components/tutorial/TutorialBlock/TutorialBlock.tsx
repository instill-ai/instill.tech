import { getCvTaskIconAndLabel } from "@/lib/instill";
import { TutorialMeta } from "@/types/instill";
import { GitHubIcon } from "@instill-ai/design-system";
import Link from "next/link";
import { TutorialLabel } from "../TutorialLabel";

export type TutorialBlockProps = {
  tutorial: TutorialMeta;
};

export const TutorialBlock = ({ tutorial }: TutorialBlockProps) => {
  const { icon, label } = getCvTaskIconAndLabel({
    cvTask: tutorial.cvTask,
    iconStyle: {
      color: "fill-instillGrey80",
      width: "w-5",
      height: "h-5",
      position: "m-auto",
    },
  });

  return (
    <Link href={`/tutorials/${tutorial.slug}`}>
      <a className="flex h-[480px] w-full flex-col hover:shadow-instill-solid-10 xl:h-[520px] xl:w-[360px]">
        <div className="min-h-[160px] bg-instillWarmOrange50 xl:min-h-[200px]" />
        <div className="flex h-full w-full flex-col bg-instillGrey05 p-5">
          <TutorialLabel
            icon={icon || undefined}
            label={label}
            position="mr-auto"
            marginBottom="mb-2.5"
            labelTextStyle="font-mono text-xs font-normal text-instillGrey80"
            labelBgColor="bg-instillGrey20"
            labelPadding="py-1 px-2"
          />
          <h3 className="mb-2 break-all text-instillGrey90 text-instill-h3-medium">
            {tutorial.title}
          </h3>
          <p className="mb-auto w-full text-ellipsis font-sans text-lg font-normal text-instillGrey70 line-clamp-3 xl:line-clamp-4">
            {tutorial.description}
          </p>
          <div className="flex flex-row gap-x-2 py-0.5">
            <div className="flex flex-row gap-x-[5px]">
              <div className="flex pt-[1px]">
                <GitHubIcon
                  color="fill-instillGrey50"
                  width="w-5"
                  height="h-5"
                  position="my-auto"
                />
              </div>
              <p className="pt-[3px] font-mono text-xs font-normal text-instillGrey50">
                {tutorial.commit.author}
              </p>
            </div>
            <div className="flex">
              <div className="my-auto min-h-[6px] min-w-[6px] rounded-full bg-instillGrey50 pt-[2.5px]" />
            </div>
            <div className="flex">
              <p className="pt-[3px] font-mono text-xs font-normal text-instillGrey50">
                {tutorial.commit.lastEditedTime
                  ? new Date(
                      tutorial.commit.lastEditedTime?.split(" ")[0]
                    ).toLocaleDateString()
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
