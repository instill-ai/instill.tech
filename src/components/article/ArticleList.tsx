import { BlogArticleMeta, ArticleMeta } from "@/types/instill";
import { ArticleBlock } from "./ArticleBlock";
import React from "react";
import { GitHubIcon, Separator } from "@instill-ai/design-system";
import Link from "next/link";

export type ArticleListProps = {
  articles: ArticleMeta[] | BlogArticleMeta[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      <div className="grid w-full grid-flow-row auto-rows-fr grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2">
        {articles.slice(0, 2).map((e) =>
          articles.length <= 2 ? (
            // This additional wrapper will stop the ArticleBlock from
            // expanding its height to fill the whole container.
            <div key={e.title}>
              <ArticleBlock article={e} />
            </div>
          ) : (
            <ArticleBlock key={e.title} article={e} />
          )
        )}
      </div>
      <div className="mt-5 grid w-full grid-flow-row auto-rows-fr grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">
        {articles.slice(2, 5).map((e) =>
          articles.length <= 2 ? (
            // This additional wrapper will stop the ArticleBlock from
            // expanding its height to fill the whole container.
            <div key={e.title}>
              <ArticleBlock article={e} />
            </div>
          ) : (
            <ArticleBlock key={e.title} article={e} />
          )
        )}
      </div>

      {articles.slice(5, articles.length).length ? (
        <div className="mt-5 w-full rounded-sm px-4 pt-5 shadow-lg">
          <p className="px-4 font-sans text-[18px] font-semibold text-[#101828]">
            More news
          </p>
          <Separator orientation="horizontal" className="mb-2 mt-5" />

          {articles.slice(5, articles.length).map((article, index) => (
            <React.Fragment key={article.slug}>
              <div className="flex flex-row">
                <div className="my-auto w-1/2 p-6">
                  <Link href={`${article.slug}`}>
                    <p className="font-sans text-[14px] font-medium leading-5 text-[#101828]">
                      {article.title}
                    </p>
                  </Link>
                </div>

                <div className="my-auto w-1/4 p-6">
                  <p className="font-sans text-[14px] font-normal leading-5 text-[#475467]">
                    {article.type}
                  </p>
                </div>

                <div className="my-auto w-1/6 p-6">
                  <p className="font-sans text-[14px] font-normal leading-5 text-[#475467]">
                    {article.publishedOn
                      ? new Date(article.publishedOn).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "2-digit",
                            year: "numeric",
                          }
                        )
                      : ""}
                  </p>
                </div>

                <div className="my-auto flex w-1/6 justify-end p-6">
                  {!article.authorAvatarSrc ? (
                    <GitHubIcon
                      color="fill-instillGrey50"
                      width="w-8"
                      height="h-8"
                      position="my-auto"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={article.authorAvatarSrc}
                      alt={`${article.title}'s author's github avatar`}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  )}
                </div>
              </div>
              {index + 6 !== articles.length && (
                <Separator orientation="horizontal" />
              )}
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </div>
  );
};
