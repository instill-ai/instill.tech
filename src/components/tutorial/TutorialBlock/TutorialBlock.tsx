import { TutorialMeta } from "@/types/instill";
import { GitHubIcon } from "@instill-ai/design-system";
import Link from "next/link";
import { Label } from "./Label";

export type TutorialBlockProps = {
  tutorial: TutorialMeta;
};

export const TutorialBlock = ({ tutorial }: TutorialBlockProps) => {
  return (
    <Link href={`/tutorials/${tutorial.slug}`}>
      <a className="flex w-[340px] flex-col hover:shadow-instill-solid-10 xl:w-[360px]">
        <div className="h-[160px] bg-instillWarmOrange50 xl:h-[200px]" />
        <div className="flex w-full flex-col bg-instillGrey05 p-5">
          <Label
            cvTask={tutorial.cvTask}
            position="mr-auto"
            marginBottom="mb-2.5"
          />
          <h3 className="mb-2 break-all text-instillGrey90 text-instill-h3-medium">
            {tutorial.title}
          </h3>
          <p className="mb-5 w-full flex-1 text-ellipsis font-sans text-lg font-normal text-instillGrey70">
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
