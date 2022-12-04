import { TutorialMeta } from "@/types/instill";
import { TutorialBlock } from "./TutorialBlock";

export type TutorialListProps = {
  tutorials: TutorialMeta[];
};

export const TutorialList = ({ tutorials }: TutorialListProps) => {
  return (
    <div className="grid w-full grid-flow-row auto-rows-fr grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
      {tutorials.map((e) =>
        tutorials.length === 1 ? (
          // This additional wrapper will stop the TutorialBlock from
          // expanding its height to fill the whole container.
          <div>
            <TutorialBlock key={e.title} tutorial={e} />
          </div>
        ) : (
          <TutorialBlock key={e.title} tutorial={e} />
        )
      )}
    </div>
  );
};
