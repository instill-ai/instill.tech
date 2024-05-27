import { ArticleMeta } from "@/types/instill";
import React, { ReactElement } from "react";

export type ArticleSimilarPostsProps = {
  sectionTitle: string;
  similarArticles: ArticleMeta[];
  getCardElement: (source: ArticleMeta, key: string) => ReactElement;
};

export const ArticleSimilarPosts = ({
  sectionTitle,
  similarArticles,
  getCardElement,
}: ArticleSimilarPostsProps) => {
  return similarArticles.length !== 0 ? (
    <div className="flex flex-col">
      <h3 className="mx-auto mb-5 font-sans text-[24px] font-bold text-[#000000B2]">
        {sectionTitle}
      </h3>
      <div className="grid gap-x-5 xl:grid-flow-col xl:grid-cols-3">
        {similarArticles.length > 3 ? (
          similarArticles.slice(0, 3).map((e) => getCardElement(e, e.slug))
        ) : (
          <React.Fragment>
            {similarArticles.map((e) => getCardElement(e, e.slug))}
            {Array.from(Array(3 - similarArticles.length).keys()).map((e) => (
              <div
                className="block"
                key={`tutorial-similar-use-case-skeleton-${e}`}
              />
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  ) : null;
};
