import { TutorialMeta } from "@/types/instill";
import { TutorialBlock } from "./TutorialBlock";

export type TutorialListProps = {
  tutorials: TutorialMeta[];
};

export const TutorialList = ({ tutorials }: TutorialListProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
      {tutorials.map((e) => (
        <TutorialBlock key={e.title} tutorial={e} />
      ))}
    </div>
  );
};
