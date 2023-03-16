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
    <Link
      className="flex w-full flex-col hover:shadow-instill-solid-10"
      href={`/blog/${article.slug}`}
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

        // eslint-disable-next-line @next/next/no-img-element
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
      <div className="flex w-full flex-1 flex-col bg-instillGrey05 p-5">
        <h3 className="mb-2 break-words text-instillGrey90 text-instill-h3-medium">
          {article.title}
        </h3>
        <p className="mb-10 w-full text-ellipsis font-sans text-base font-normal text-instillGrey70 line-clamp-3 xl:line-clamp-4">
          {article.description}
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
                  src={article.authorAvatarSrc}
                  alt={`${article.title}'s author's github avatar`}
                  className="h-5 w-5 rounded-full object-cover"
                  onError={() => {
                    setAuthorAvatarIsError(true);
                  }}
                />
              )}
            </div>
            <p className="pt-[3px] font-mono text-xs font-normal text-instillGrey50">
              {article.author}
            </p>
          </div>
          <div className="flex pt-0.5">
            <div className="my-auto min-h-[6px] min-w-[6px] rounded-full bg-instillGrey50 pt-[2.5px]" />
          </div>
          <div className="flex">
            <p className="pt-[3px] font-mono text-xs font-normal text-instillGrey50">
              {article.publishedOn
                ? new Date(article.publishedOn).toLocaleDateString()
                : ""}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
