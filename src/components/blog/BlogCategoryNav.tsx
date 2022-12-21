import cn from "clsx";
import { BlogArticleMeta } from "@/types/instill";
import { Dispatch, SetStateAction } from "react";
import { BlogCategories, BlogCategory } from "../../../content.config";
import { BlogSearch } from "./BlogSearch";

export type BlogCategoryNavProps = {
  selectedCategory: BlogCategory;
  setSelectedCategory: Dispatch<SetStateAction<BlogCategory>>;
  articles: BlogArticleMeta[];
  setSearchResult: Dispatch<SetStateAction<BlogArticleMeta[]>>;
  marginBottom?: string;
};

export const BlogCategoryNav = ({
  articles,
  setSearchResult,
  setSelectedCategory,
  marginBottom,
}: BlogCategoryNavProps) => {
  return (
    <div className={cn("flex w-full border-y-2 py-4", marginBottom)}>
      <div className="mx-auto flex flex-row gap-x-10">
        {BlogCategories.map((category) => (
          <button
            key={`blog categories nav - ${category}`}
            onClick={() => setSelectedCategory(category)}
            className="my-auto flex text-lg text-instillGrey90"
          >
            {category}
          </button>
        ))}
        <BlogSearch articles={articles} setSearchResult={setSearchResult} />
      </div>
    </div>
  );
};
