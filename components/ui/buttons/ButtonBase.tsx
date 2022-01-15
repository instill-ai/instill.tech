import { FC, ReactElement } from "react";
import * as classNames from "classnames";

interface Props {
  variant: "text" | "contained" | "outlined" | "icon" | "link";
  styleName?: string;
  color: "primary" | "secondary" | "error" | "success" | "white" | "lightWhite";
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
      buttonStyle = "px-[17px] py-2.5 bg-instillBlue10";
      break;
    }
    case "outlined": {
      break;
    }
    case "text": {
      buttonStyle = "hover:text-instillBlue70";
      break;
    }
    case "icon": {
      buttonStyle = "";
    }
  }

  switch (color) {
    case "primary": {
      buttonColor = "bg-instillBlue30 text-instillGray05";
      break;
    }
    case "white": {
      buttonColor = "text-instillBlue70";
      break;
    }
    case "lightWhite": {
      buttonColor = "text-instillBlue30";
      break;
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
