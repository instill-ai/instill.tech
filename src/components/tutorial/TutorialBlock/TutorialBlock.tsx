import { useElementDimension } from "@/hooks/useElementDimension";
import { getAiTaskIconAndLabel } from "@/lib/instill";
import { TutorialMeta } from "@/types/instill";
import { GitHubIcon } from "@instill-ai/design-system";
import Link from "next/link";
import { useState } from "react";
import { TutorialImagePlaceholder } from "../TutorialImagePlaceholder";
import { TutorialLabel } from "../TutorialLabel";

export type TutorialBlockProps = {
  tutorial: TutorialMeta;
};

export const TutorialBlock = ({ tutorial }: TutorialBlockProps) => {
  const { icon, label } = getAiTaskIconAndLabel({
    aiTask: tutorial.aiTask,
  });
  const [themeImageThumbnailIsError, setThemeImageThumbnailIsError] =
    useState(false);
  const [authorAvatarIsError, setAuthorAvatarIsError] = useState(false);

  const [blockContainerRef, blockContainerDimension] =
    useElementDimension<HTMLAnchorElement>();

  return (
    <Link href={`/tutorials/${tutorial.slug}`}>
      <a
        ref={blockContainerRef}
        className="flex w-full flex-col hover:shadow-instill-solid-10"
      >
        {themeImageThumbnailIsError ? (
          <div
            className="w-full"
            style={{ height: `${(blockContainerDimension.width * 9) / 16}px` }}
          >
            <TutorialImagePlaceholder
              width="w-full"
              height="h-full"
              color={tutorial.placeholderColor}
            />
          </div>
        ) : (
          // The reason we use img not next/Image is because we don't know the
          // given image's size and we need to adjust it according to the width
          // of the TutorialBlock

          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tutorial.themeImgThumbnailSrc}
            alt="The theme of this tutorial"
            style={{ height: `${(blockContainerDimension.width * 9) / 16}px` }}
            className="w-full object-cover"
            onError={() => {
              setThemeImageThumbnailIsError(true);
            }}
          />
        )}
        <div className="flex w-full flex-1 flex-col bg-instillGrey05 p-5">
          <TutorialLabel
            icon={
              icon
                ? icon({
                    color: "fill-instillGrey80",
                    width: "w-5",
                    height: "h-5",
                    position: "m-auto",
                  })
                : undefined
            }
            label={label}
            position="mr-auto"
            marginBottom="mb-2.5"
            labelTextStyle="font-mono text-xs font-normal text-instillGrey80"
            labelBgColor="bg-instillGrey20"
            labelPadding="py-1 px-2"
          />
          <h3 className="mb-2 break-words text-instillGrey90 text-instill-h3-medium">
            {tutorial.title}
          </h3>
          <p className="mb-10 w-full text-ellipsis font-sans text-base font-normal text-instillGrey70 line-clamp-3 xl:line-clamp-4">
            {tutorial.description}
          </p>
          <div className="mt-auto flex flex-row gap-x-2 py-0.5">
            <div className="flex flex-row gap-x-[5px]">
              <div className="flex pt-[1px]">
                {/* 
                  We display the given author avatar if it is present and display
                  GitHub icon if the url has issue.
                */}

                {authorAvatarIsError ? (
                  <GitHubIcon
                    color="fill-instillGrey50"
                    width="w-5"
                    height="h-5"
                    position="my-auto"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={tutorial.authorAvatarSrc}
                    alt={`${tutorial.title}'s author's github avatar`}
                    className="h-5 w-5 rounded-full object-cover"
                    onError={() => {
                      setAuthorAvatarIsError(true);
                    }}
                  />
                )}
              </div>
              <p className="pt-[3px] font-mono text-xs font-normal text-instillGrey50">
                {tutorial.author}
              </p>
            </div>
            <div className="flex pt-0.5">
              <div className="my-auto min-h-[6px] min-w-[6px] rounded-full bg-instillGrey50 pt-[2.5px]" />
            </div>
            <div className="flex">
              <p className="pt-[3px] font-mono text-xs font-normal text-instillGrey50">
                {tutorial.publishedOn
                  ? new Date(tutorial.publishedOn).toLocaleDateString()
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
