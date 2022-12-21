import { BlogArticleMeta, TutorialMeta } from "@/types/instill";
import { BlogArticleCard } from "./BlogArticleCard";

export type BlogArticleListProps = {
  articles: BlogArticleMeta[];
};

export const BlogArticleList = ({ articles }: BlogArticleListProps) => {
  return (
    <div className="grid w-full grid-flow-row auto-rows-fr grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
      {articles.map((e) =>
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
  );
};
