import cn from "clsx";
import { Nullable, TutorialMeta } from "@/types/instill";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Fuse from "fuse.js";

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
      className={cn("flex w-full flex-col xl:mx-auto xl:w-8/12", marginBottom)}
    >
      <input
        placeholder="Search"
        className="mb-2.5 w-full bg-instillNeonBlue bg-opacity-10 px-4 py-3 text-instill-body-normal focus:outline-instillSkyBlue"
        onChange={async (e) => {
          const { value } = e.currentTarget;
          setSearchTerm(value);
        }}
      />
      <div className="flex w-full flex-row">
        <a
          href="https://github.com/instill-ai/community/issues/new?assignees=xiaofei-du,EiffelFly&labels=request+a+tutorial"
          className="px-2.5 py-[5px] font-sans text-lg font-normal text-instillGrey70 hover:text-instillSkyBlue"
        >
          Request a tutorial
        </a>
        <div className="grid w-10 grid-cols-2 py-2">
          <div className="block w-full border-r border-instillGrey30" />
          <div className="block w-full" />
        </div>
        <a
          href="https://github.com/instill-ai/community/issues/new?labels=tutorial%2Cdocumentation%2Cneed-triage&template=tutorial_request.yaml&title=%5BTutorial%5D+%3Ctitle%3E"
          className="px-2.5 py-[5px] font-sans text-lg font-normal text-instillGrey70 hover:text-instillSkyBlue"
        >
          Submit a tutorial
        </a>
      </div>
    </div>
  );
};
