import { TutorialMeta } from "@/types/instill";
import { TutorialBlock } from "./TutorialBlock";

export type TutorialListProps = {
  tutorials: TutorialMeta[];
};

export const TutorialList = ({ tutorials }: TutorialListProps) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      {tutorials.map((e) => (
        <TutorialBlock key={e.title} tutorial={e} />
      ))}
    </div>
  );
};
