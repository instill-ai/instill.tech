import { FC, ReactElement, HTMLAttributes } from "react";
import * as classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: "text" | "contained" | "outlined" | "icon" | "link";
  styleName?: string;
  color:
    | "primary"
    | "secondary"
    | "error"
    | "success"
    | "white"
    | "lightWhite"
    | "transparent"
    | "gray";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  itemDirection?: "horizontal" | "vertical";
}

export const ButtonBase: FC<Props> = ({
  children,
  variant,
  styleName,
  color,
  startIcon,
  endIcon,
  onClick,
  itemDirection,
  ...props
}) => {
  let buttonStyle: string;
  let buttonColor: string;

  switch (variant) {
    case "contained": {
      buttonStyle = "px-[17px] py-2.5";
      break;
    }
    case "outlined": {
      buttonStyle =
        "px-[17px] py-2.5 flex border border-instillBlue30 hover:bg-[#3C3C3C]";
      break;
    }
    case "text": {
      buttonStyle = "";
      break;
    }
    case "icon": {
      buttonStyle = "";
    }
  }

  switch (color) {
    case "primary": {
      buttonColor = "bg-instillBlue30 text-instillGray05 hover:bg-[#236698]";
      break;
    }
    case "white": {
      buttonColor = "text-instillBlue30";
      break;
    }
    case "lightWhite": {
      buttonColor = "text-instillBlue30 hover:text-[#236698]";
      break;
    }
    case "transparent": {
      buttonColor = "text-instillBlue30";
      break;
    }
    case "gray": {
      buttonColor = "text-instillGray30 hover:text-instillGray05";
      break;
    }
  }

  return (
    <button
      className={classNames.default(
        "instill-text-body group flex justify-center rounded-[1px]",
        buttonStyle,
        buttonColor,
        styleName,
        itemDirection === "horizontal" ? "flex-row" : "flex-col"
      )}
      onClick={onClick}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
