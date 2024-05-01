import cn from "clsx";
import { Nullable, ArticleMeta } from "@/types/instill";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Icons, Input } from "@instill-ai/design-system";

export type ArticleSearchProps = {
  articles: ArticleMeta[];
  setResult: Dispatch<SetStateAction<ArticleMeta[]>>;
  marginBottom?: string;
};

export const ArticleSearch = ({
  articles,
  setResult,
  marginBottom,
}: ArticleSearchProps) => {
  const [searchTerm, setSearchTerm] = useState<Nullable<string>>(null);

  useEffect(() => {
    if (!searchTerm) {
      setResult(articles);
    } else {
      const fuse = new Fuse(articles, {
        keys: ["title"],
        includeMatches: true,
        threshold: 0.6,
      });

      const result = fuse
        .search<ArticleMeta[]>(searchTerm)
        .map((e) => e.item)
        .flat();

      setResult(result);
    }
  }, [articles, setResult, searchTerm]);

  return (
    <div
      className={cn(
        "mx-auto flex w-[321px] flex-col pt-4 xl:w-[458px] xl:pt-0",
        marginBottom
      )}
    >
      <Input.Root>
        <Input.LeftIcon>
          <Icons.SearchSm className="my-auto h-5 w-5 cursor-pointer !stroke-semantic-fg-secondary" />
        </Input.LeftIcon>
        <Input.Core
          disabled={false}
          type="text"
          className="!placeholder-semantic-fg-secondary"
          placeholder="Search"
          onChange={async (e) => {
            const { value } = e.currentTarget;
            setSearchTerm(value);
          }}
        />
      </Input.Root>
    </div>
  );
};
