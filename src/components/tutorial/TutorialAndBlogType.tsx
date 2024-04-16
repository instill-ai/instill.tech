import { Button } from "@instill-ai/design-system";
import cn from "clsx";
import React from "react";

export const TutorialAndBlogType = () => {
  const [type, setType] = React.useState<string>("all");

  return (
    <div className="my-4 flex flex-row justify-center">
      <div className="space-x-1 rounded-sm border bg-white p-0.5">
        <Button
          variant="secondaryGrey"
          size="lg"
          className={cn(
            "rounded-sm !border-0 !py-2",
            type === "all" ? "shadow-lg" : ""
          )}
          onClick={() => setType("all")}
        >
          All
        </Button>

        <Button
          variant="secondaryGrey"
          size="lg"
          className={cn(
            "rounded-sm !border-0 !py-2",
            type === "tutorial" ? "shadow-lg" : ""
          )}
          onClick={() => setType("tutorial")}
        >
          Tutorials
        </Button>
        <Button
          variant="secondaryGrey"
          size="lg"
          className={cn(
            "rounded-sm !border-0 !py-2",
            type === "blog" ? "shadow-lg" : ""
          )}
          onClick={() => setType("blog")}
        >
          Blog
        </Button>
      </div>
    </div>
  );
};
