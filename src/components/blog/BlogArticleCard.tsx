import { useElementDimension } from "@/hooks/useElementDimension";
import { BlogArticleMeta } from "@/types/instill";
import { GitHubIcon } from "@instill-ai/design-system";
import Link from "next/link";
import { useState } from "react";
import { ArticleImagePlaceholder } from "@/components/ui/ArticleImagePlaceholder";

export type BlogArticleCardProps = {
  article: BlogArticleMeta;
};

export const BlogArticleCard = ({ article }: BlogArticleCardProps) => {
  const [themeImageThumbnailIsError, setThemeImageThumbnailIsError] =
    useState(false);
  const [authorAvatarIsError, setAuthorAvatarIsError] = useState(false);

  const [blockContainerRef, blockContainerDimension] =
    useElementDimension<HTMLAnchorElement>();

  return (
    <div className="rounded-sm p-4 shadow-lg">
      <Link
        className="flex w-full flex-col"
        href={`${article.slug}`}
        ref={blockContainerRef}
      >
        {themeImageThumbnailIsError ? (
          <div
            className="w-full"
            style={{ height: `${(blockContainerDimension.width * 9) / 16}px` }}
          >
            <ArticleImagePlaceholder
              width="w-full"
              height="h-full"
              color={article.placeholderColor}
            />
          </div>
        ) : (
          // The reason we use img not next/Image is because we don't know the
          // given image's size and we need to adjust it according to the width
          // of the TutorialBlock

          <img
            src={article.themeImgThumbnailSrc}
            alt="The theme of this tutorial"
            style={{ height: `${(blockContainerDimension.width * 9) / 16}px` }}
            className="w-full object-cover"
            onError={() => {
              setThemeImageThumbnailIsError(true);
            }}
          />
        )}
        <div className="flex w-full flex-1 flex-col bg-instillGrey05 py-2">
          <div className="mb-2 mt-auto flex flex-row gap-x-2 py-0.5">
            <div className="flex flex-row gap-x-4">
              <div className="flex pt-[1px]">
                {/* 
                  We display the given author avatar if it is present and display
                  GitHub icon if the url has issue.
                */}

                {authorAvatarIsError ? (
                  <GitHubIcon
                    color="fill-instillGrey50"
                    width="w-8"
                    height="h-8"
                    position="my-auto"
                  />
                ) : (
                  <img
                    src={article.authorAvatarSrc}
                    alt={`${article.title}'s author's github avatar`}
                    className="h-8 w-8 rounded-full object-cover"
                    onError={() => {
                      setAuthorAvatarIsError(true);
                    }}
                  />
                )}
              </div>
              <p className="my-auto pt-[3px] font-sans text-[14px] font-normal text-instillGrey50">
                {article.author}
              </p>
            </div>
          </div>
          <div className="mb-2 flex gap-x-2">
            <p className="my-auto pt-[3px] font-sans text-[14px] font-normal text-instillGrey50">
              {article.publishedOn
                ? new Date(article.publishedOn).toLocaleDateString("en-US", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })
                : ""}
            </p>
            <div className="flex pt-0.5">
              <div className="my-auto min-h-[3px] min-w-[3px] rounded-full bg-instillGrey50 pt-[2.5px]" />
            </div>
            <div className="flex pt-0.5">
              <p className="font-sans text-[14px] font-normal text-instillGrey50">
                {" "}
                Blog
              </p>
            </div>
          </div>
          <h3 className="mb-2 break-words font-sans text-[16px] font-medium leading-6">
            {article.title}
          </h3>
          <p className="mb-2 w-full text-ellipsis font-sans text-[14px] font-normal text-[#605A57]">
            {article.description}
          </p>
        </div>
      </Link>
    </div>
  );
};
