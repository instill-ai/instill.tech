import cn from "clsx";
import { GitHubIcon } from "@instill-ai/design-system";
import { useState } from "react";
import { TutorialMeta } from "@/types/instill";
import { Nullable } from "vitest";

export type ArticlePublishInfoProps = {
  author: string;
  authorAvatarSrc: string;
  authorGitHubUrl: string;
  publishedOn: string;
  marginBottom?: string;
  tutorialMeta: Nullable<TutorialMeta>;
};

export const ArticlePublishInfo = ({
  author,
  authorAvatarSrc,
  authorGitHubUrl,
  publishedOn,
  marginBottom,
  tutorialMeta,
}: ArticlePublishInfoProps) => {
  const [authorAvatarIsError, setAuthorAvatarIsError] = useState(false);

  console.log({ tutorialMeta });

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className={cn("flex flex-row gap-x-2", marginBottom)}>
          {authorAvatarIsError ? (
            <GitHubIcon
              color="fill-instillGrey50"
              width="w-8"
              height="h-8"
              position="my-auto"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={authorAvatarSrc}
              alt={`${author}'s github avatar`}
              className="my-auto h-8 w-8 rounded-full object-cover"
              onError={() => {
                setAuthorAvatarIsError(true);
              }}
            />
          )}
          <div className="my-auto flex flex-row gap-x-1 text-base font-normal text-instillGrey70">
            <a href={authorGitHubUrl} className="cursor-pointer">
              {`${author}`}
            </a>
          </div>
        </div>
        <div className="mb-2 flex gap-x-2">
          <p className="my-auto pt-[3px] font-sans text-[14px] font-normal text-instillGrey50">
            {tutorialMeta?.publishedOn
              ? new Date(tutorialMeta?.publishedOn).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  }
                )
              : ""}
          </p>
          <div className="flex pt-0.5">
            <div className="my-auto min-h-[3px] min-w-[3px] rounded-full bg-instillGrey50 pt-[2.5px]" />
          </div>
          <div className="flex pt-0.5">
            <p className="my-auto font-sans text-[14px] font-normal text-instillGrey50">
              {" "}
              Tutorial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
