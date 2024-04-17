import { BlogArticleMeta, ArticleMeta } from "@/types/instill";
import { ArticleBlock } from "./ArticleBlock";
import React from "react";

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
        {articles.slice(2, articles.length).map((e) =>
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
    </div>
  );
};
