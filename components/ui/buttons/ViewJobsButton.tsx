import { FC } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {
  /** Tailwind format - position of this button */
  styleName?: string;
}

export const ViewJobsButton: FC<Props> = ({ styleName }) => {
  return (
    <ButtonBase styleName={styleName} variant="contained" color="primary">
      View Jobs
    </ButtonBase>
  );
};
