import { BlogArticleMeta, TutorialMeta } from "@/types/instill";
import { ReactElement, useMemo } from "react";

export type ArticleSimilarPostsProps = {
  sectionTitle: string;
  similarArticles: TutorialMeta[] | BlogArticleMeta[];
  getCardElement: (
    source: TutorialMeta | BlogArticleMeta,
    key: string
  ) => ReactElement;
};

export const ArticleSimilarPosts = ({
  sectionTitle,
  similarArticles,
  getCardElement,
}: ArticleSimilarPostsProps) => {
  return similarArticles.length !== 0 ? (
    <div className="flex flex-col">
      <h3 className="mx-auto mb-20 border-b pb-5 font-mono text-3xl text-instillGrey90 ">
        {sectionTitle}
      </h3>
      <div className="grid gap-x-5 xl:grid-flow-col xl:grid-cols-3">
        {similarArticles.length >= 3 ? (
          similarArticles.map((e) => getCardElement(e, e.slug))
        ) : (
          <>
            {similarArticles.map((e) => getCardElement(e, e.slug))}
            {Array.from(Array(3 - similarArticles.length).keys()).map((e) => (
              <div
                className="block"
                key={`tutorial-similar-use-case-skeleton-${e}`}
              />
            ))}
          </>
        )}
      </div>
    </div>
  ) : null;
};
