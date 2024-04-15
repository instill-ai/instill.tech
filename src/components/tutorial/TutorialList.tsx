import { TutorialMeta } from "@/types/instill";
import { TutorialBlock } from "./TutorialBlock";

export type TutorialListProps = {
  tutorials: TutorialMeta[];
};

export const TutorialList = ({ tutorials }: TutorialListProps) => {
  return (
    <div>
      <div className="grid w-full grid-flow-row auto-rows-fr grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2">
        {tutorials.slice(0, 2).map((e) =>
          tutorials.length <= 2 ? (
            // This additional wrapper will stop the TutorialBlock from
            // expanding its height to fill the whole container.
            <div key={e.title}>
              <TutorialBlock tutorial={e} />
            </div>
          ) : (
            <TutorialBlock key={e.title} tutorial={e} />
          )
        )}
      </div>

      <div className="mt-5 grid w-full grid-flow-row auto-rows-fr grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">
        {tutorials.slice(2, tutorials.length).map((e) =>
          tutorials.length <= 2 ? (
            // This additional wrapper will stop the TutorialBlock from
            // expanding its height to fill the whole container.
            <div key={e.title}>
              <TutorialBlock tutorial={e} />
            </div>
          ) : (
            <TutorialBlock key={e.title} tutorial={e} />
          )
        )}
      </div>
    </div>
  );
};
