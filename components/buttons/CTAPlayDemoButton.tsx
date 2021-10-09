import { FC } from "react";
import { PlayIcon } from "../icons/PlayIcon";

interface Props {}

export const CTAPlayDemoButton: FC<Props> = () => {
  return (
    <button className="flex flex-row gap-x-3 px-7 py-4 rounded-lg border border-[#D0D5DD]">
      <PlayIcon />
      <span className="font-sans text-[#344054] font-medium text-lg">Demo</span>
    </button>
  );
};
