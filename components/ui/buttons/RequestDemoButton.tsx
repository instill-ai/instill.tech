import { FC } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {}

export const RequestDemoButton: FC<Props> = () => {
  return (
    <ButtonBase variant="contained" color="primary">
      Request a demo
    </ButtonBase>
  );
};
