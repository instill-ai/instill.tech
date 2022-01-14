import { FC, ReactElement } from "react";
import * as classNames from "classnames";

interface Props {
  variant: "text" | "contained" | "outlined";
  styleName?: string;
  color: "primary" | "secondary" | "error" | "success" | "white";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

export const ButtonBase: FC<Props> = ({
  children,
  variant,
  styleName,
  color,
  startIcon,
  endIcon,
}) => {
  let buttonStyle: string;
  let buttonColor: string;

  switch (variant) {
    case "contained": {
      buttonStyle = "px-[17px] py-[7px]";
    }
    case "outlined": {
    }
    case "outlined": {
    }
  }

  switch (color) {
    case "primary": {
      buttonColor = "bg-instillBlue30 text-instillGray05";
      break;
    }
    case "white": {
      buttonColor = "bg-instillBlue10 text-instillBlue70";
    }
    case "secondary": {
    }
  }

  return (
    <button
      className={classNames.default(
        "flex flex-row gap-x-3 rounded-[3px]",
        buttonStyle,
        buttonColor,
        styleName
      )}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
