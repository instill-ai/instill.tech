import { FC } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {}

export const GetEarlyAccessButton: FC<Props> = () => {
  return (
    <ButtonBase variant="contained" color="primary">
      Get early access
    </ButtonBase>
  );
};
