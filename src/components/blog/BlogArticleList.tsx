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
  const [firstArticle, ...remainingArticles] = articles;

  return (
    <div className="flex w-full flex-col gap-y-6">
      <BlogArticleCard article={firstArticle} />
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
    </div>
  );
};
