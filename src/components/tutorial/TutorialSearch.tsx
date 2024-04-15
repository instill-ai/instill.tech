import cn from "clsx";
import { Nullable, TutorialMeta } from "@/types/instill";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Icons, Input } from "@instill-ai/design-system";

export type TutorialSearchProps = {
  tutorials: TutorialMeta[];
  setResult: Dispatch<SetStateAction<TutorialMeta[]>>;
  marginBottom?: string;
};

export const TutorialSearch = ({
  tutorials,
  setResult,
  marginBottom,
}: TutorialSearchProps) => {
  const [searchTerm, setSearchTerm] = useState<Nullable<string>>(null);

  useEffect(() => {
    if (!searchTerm) {
      setResult(tutorials);
    } else {
      const fuse = new Fuse(tutorials, {
        keys: ["title"],
        includeMatches: true,
        threshold: 0.6,
      });

      const result = fuse
        .search<TutorialMeta[]>(searchTerm)
        .map((e) => e.item)
        .flat();

      setResult(result);
    }
  }, [tutorials, setResult, searchTerm]);

  return (
    <div
      className={cn(
        "flex w-full flex-col xl:mx-auto xl:w-[458px]",
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
