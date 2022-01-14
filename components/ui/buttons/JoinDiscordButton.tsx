import { FC } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { ButtonBase } from "./ButtonBase";

interface Props {}

export const JoinDiscordButton: FC<Props> = () => {
  return (
    <ButtonBase
      variant="contained"
      color="white"
      startIcon={<DiscordIcon styleName="w-5" />}
    >
      Join our Discord
    </ButtonBase>
  );
};
