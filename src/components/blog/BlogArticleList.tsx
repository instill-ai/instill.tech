import cn from "clsx";
import { BlogArticleMeta } from "@/types/instill";
import { BlogArticleCard } from "./BlogArticleCard";

export type BlogArticleListProps = {
  articles: BlogArticleMeta[];
  marginBottom?: string;
};

export const BlogArticleList = ({
  articles,
  marginBottom,
}: BlogArticleListProps) => {
  // When the nextjs compile this line at server side, it will evaluate it
  // with the initial value (which is empty array). In this case firstArticle
  // and remainingArticle will be undefinded. So we need to check whether they
  // exist or not.
  const [firstArticle, ...remainingArticles] = articles;

  return (
    <div className="flex w-full flex-col gap-y-6">
      {firstArticle ? <BlogArticleCard article={firstArticle} /> : null}
      {remainingArticles ? (
        <div
          className={cn(
            "grid w-full grid-flow-row auto-rows-fr grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2",
            marginBottom
          )}
        >
          {remainingArticles.map((e) =>
            articles.length <= 2 ? (
              // This additional wrapper will stop the TutorialBlock from
              // expanding its height to fill the whole container.
              <div key={e.title}>
                <BlogArticleCard article={e} />
              </div>
            ) : (
              <BlogArticleCard key={e.title} article={e} />
            )
          )}
        </div>
      ) : null}
    </div>
  );
};
