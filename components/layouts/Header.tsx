import { FC } from "react";
import { HeaderButtonType } from "../../types/buttons";
import { InstillLogo } from "../InstillLogo";
import { TestAvatar } from "../TestAvatar";
import { HeaderButtonGroup } from "./HeaderButtonGroup";

export interface Props {
  buttons?: HeaderButtonType[];
}

const defaultButtons = [
  {
    name: "Home",
    withChevon: false,
  },
  {
    name: "Products",
    withChevon: true,
  },
  {
    name: "Resources",
    withChevon: true,
  },
  {
    name: "Pricing",
    withChevon: false,
  },
];

export const Header: FC<Props> = ({ buttons = defaultButtons }) => {
  return (
    <div className="flex flex-row h-20 mb-24">
      <div className="flex flex-row mr-auto my-auto">
        <InstillLogo styleName={"mr-10 my-auto"} />
        <HeaderButtonGroup buttons={buttons} gapStyle={"gap-x-8"} />
      </div>
      <div className="ml-auto my-auto">
        <TestAvatar sizeStyle={"w-10 h-10"} />
      </div>
    </div>
  );
};
