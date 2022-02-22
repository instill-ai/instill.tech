import { FC, useCallback } from "react";
import { sendAmplitudeData } from "../../../lib/amplitude";
import { ButtonBase } from "./ButtonBase";

interface Props {}

export const ToBlogButton: FC<Props> = () => {
  const handleClick = useCallback(() => {
    sendAmplitudeData("to_blog", { type: "navigation" });
    window.open("https://blog.instill.tech", "_blank");
  }, []);

  return (
    <ButtonBase onClick={handleClick} variant="text" color="gray">
      Blog
    </ButtonBase>
  );
};
