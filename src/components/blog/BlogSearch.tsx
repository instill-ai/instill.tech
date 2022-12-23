import cn from "clsx";
import { BlogArticleMeta, Nullable, TutorialMeta } from "@/types/instill";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Fuse from "fuse.js";

export type BlogSearchProps = {
  articles: BlogArticleMeta[];
  setSearchResult: Dispatch<SetStateAction<BlogArticleMeta[]>>;
  marginBottom?: string;
};

export const BlogSearch = ({
  articles,
  setSearchResult,
  marginBottom,
}: BlogSearchProps) => {
  const [searchTerm, setSearchTerm] = useState<Nullable<string>>(null);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResult(articles);
    } else {
      const fuse = new Fuse(articles, {
        keys: ["title"],
        includeMatches: true,
        threshold: 0.5,
      });

      const result = fuse
        .search<BlogArticleMeta[]>(searchTerm)
        .map((e) => e.item)
        .flat();

      setSearchResult(result);
    }
  }, [articles, setSearchResult, searchTerm]);

  return (
    <div className={cn("flex", marginBottom)}>
      <input
        placeholder="Search"
        className="w-full bg-instillNeonBlue bg-opacity-10 px-4 py-3 text-instill-body-normal focus:outline-instillSkyBlue"
        onChange={async (e) => {
          const { value } = e.currentTarget;
          setSearchTerm(value);
        }}
      />
    </div>
  );
};
