import { Button } from "@instill-ai/design-system";
import cn from "clsx";
import React, { Dispatch, SetStateAction } from "react";

type ArticleTypeProps = {
  setFilters: Dispatch<SetStateAction<string>>;
  filterType: string;
};

export const ArticleType = ({ setFilters, filterType }: ArticleTypeProps) => {
  return (
    <div className="my-4 flex flex-row justify-center">
      <div className="space-x-1 rounded-sm border bg-white p-0.5">
        <Button
          variant="secondaryGrey"
          size="lg"
          className={cn(
            "rounded-sm !border-0 !py-2",
            filterType === "All" ? "shadow-lg" : ""
          )}
          onClick={() => setFilters("All")}
        >
          All
        </Button>

        <Button
          variant="secondaryGrey"
          size="lg"
          className={cn(
            "rounded-sm !border-0 !py-2",
            filterType === "Tutorial" ? "shadow-lg" : ""
          )}
          onClick={() => setFilters("Tutorial")}
        >
          Tutorials
        </Button>
        <Button
          variant="secondaryGrey"
          size="lg"
          className={cn(
            "rounded-sm !border-0 !py-2",
            filterType === "Blog" ? "shadow-lg" : ""
          )}
          onClick={() => setFilters("Blog")}
        >
          Blog
        </Button>
      </div>
    </div>
  );
};
