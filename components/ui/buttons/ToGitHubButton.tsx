import { FC, useCallback } from "react";
import { sendAmplitudeData } from "../../../lib/amplitude";
import { ButtonBase } from "./ButtonBase";

interface Props {}

export const ToGitHubButton: FC<Props> = () => {
  const handleClick = useCallback(() => {
    sendAmplitudeData("to_github", { type: "navigation" });
    window.open("https://github.com/instill-ai", "_blank");
  }, []);

  return (
    <ButtonBase onClick={handleClick} variant="text" color="gray">
      GitHub
    </ButtonBase>
  );
};
