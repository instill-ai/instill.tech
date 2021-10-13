import * as React from "react";
import { ChevonDownIcon } from "../../icons/ChevonDownIcon";

interface Props {
  withChevon: boolean;
  name: string;
}

export const HeaderButton: React.FC<Props> = ({ withChevon, name }) => {
  return (
    <button className="flex flex-row gap-x-2">
      <span className="font-sans text-base text-gray-500">{name}</span>
      {withChevon && <ChevonDownIcon styleName={"w-4 h-4 text-gray-500 my-auto"} />}
    </button>
  );
};
