import cn from "clsx";
import { BlogArticleMeta } from "@/types/instill";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { BlogCategories, BlogCategory } from "../../../../content.config";
import { BlogSearch } from "../BlogSearch";
import { ArrowDownIcon, ArrowRightIcon } from "@instill-ai/design-system";
import { CategoryButton } from "./CategoryButton";

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
  selectedCategory,
  setSelectedCategory,
  marginBottom,
}: BlogCategoryNavProps) => {
  const [mobileCategoriesIsOpen, setMobileCategoriesIsOpen] = useState(false);

  const desktopView = useMemo(() => {
    return (
      <div className="mx-auto hidden flex-row gap-x-10 xl:flex">
        {BlogCategories.map((category) => (
          <CategoryButton
            key={`blog categories nav - ${category}`}
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
        <BlogSearch articles={articles} setSearchResult={setSearchResult} />
      </div>
    );
  }, [BlogCategories, articles, setSearchResult]);

  const mobileView = useMemo(() => {
    const arrowStyle = {
      position: "my-auto",
      color: "fill-instillGrey90",
      width: "w-5",
      height: "h-5",
    };

    return (
      <div className="flex w-full flex-col xl:hidden">
        <button
          className="mb-5 flex flex-row gap-x-5"
          onClick={() => setMobileCategoriesIsOpen((prev) => !prev)}
        >
          <p>View all categories</p>
          {mobileCategoriesIsOpen ? (
            <ArrowDownIcon {...arrowStyle} />
          ) : (
            <ArrowRightIcon {...arrowStyle} />
          )}
        </button>
        <div
          className={cn(
            "mb-10 flex flex-col gap-y-4 transition-opacity",
            mobileCategoriesIsOpen ? "flex" : "hidden"
          )}
        >
          {BlogCategories.map((category) => (
            <CategoryButton
              key={`blog categories nav - ${category}`}
              category={category}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </div>
        <BlogSearch articles={articles} setSearchResult={setSearchResult} />
      </div>
    );
  }, [mobileCategoriesIsOpen]);

  return (
    <div className={cn("flex w-full border-y-2 py-4", marginBottom)}>
      {desktopView}
      {mobileView}
    </div>
  );
};
