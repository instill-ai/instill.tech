import { FC } from "react";
import { HeaderButtonType } from "../../types/buttons";
import { HeaderButton } from "../ui/buttons/HeaderButton";

interface Props {
  gapStyle: string;
  buttons: HeaderButtonType[];
}

export const HeaderButtonGroup: FC<Props> = ({ gapStyle, buttons }) => {
  return (
    <div className={"flex flex-row my-auto " + gapStyle}>
      {buttons.map((button) => (
        <HeaderButton key={button.name} withChevon={button.withChevon} name={button.name} />
      ))}
    </div>
  );
};
