import { FC, useCallback } from "react";
import { sendAmplitudeData } from "../../../lib/amplitude";
import { MediumIcon } from "../icons/MediumIcon";
import { ButtonBase } from "./ButtonBase";

interface Props {}

export const ToMediumButton: FC<Props> = () => {
  const handleClick = useCallback(() => {
    sendAmplitudeData("to_medium", { type: "navigation" });
    window.open("https://medium.com/instill-ai", "_blank");
  }, []);

  return (
    <ButtonBase onClick={handleClick} variant="icon" color="gray">
      <MediumIcon styleName="w-4 h-4 text-instillGray30" />
    </ButtonBase>
  );
};
