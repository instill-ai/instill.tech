import { TutorialMeta } from "@/types/instill";
import { useMemo } from "react";
import { TutorialBlock } from "./TutorialBlock";

export type TutorialSimilarUseCasesProps = {
  tutorials: TutorialMeta[];
  useCase: string;
  currentTitle: string;
};

export const TutorialSimilarUseCases = ({
  tutorials,
  useCase,
  currentTitle,
}: TutorialSimilarUseCasesProps) => {
  const similarTutorials = useMemo(() => {
    return tutorials.filter(
      (e) => e.useCase === useCase && e.title !== currentTitle
    );
  }, [tutorials, useCase, currentTitle]);

  return similarTutorials.length !== 0 ? (
    <div className="flex flex-col">
      <h3 className="mx-auto mb-20 border-b pb-5 text-instillGrey90 xl:font-mono xl:text-3xl ">
        Similar use case
      </h3>
      <div className="grid gap-x-5 xl:grid-flow-col xl:grid-cols-3">
        {similarTutorials.length >= 3 ? (
          similarTutorials.map((e) => (
            <TutorialBlock key={e.title} tutorial={e} />
          ))
        ) : (
          <>
            {similarTutorials.map((e) => (
              <TutorialBlock key={e.slug} tutorial={e} />
            ))}
            {Array.from(Array(3 - similarTutorials.length).keys()).map((e) => (
              <div
                className="block"
                key={`tutorial-similar-use-case-skeleton-${e}`}
              />
            ))}
          </>
        )}
      </div>
    </div>
  ) : null;
};
