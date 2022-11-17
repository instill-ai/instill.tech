import cn from "clsx";
import { useCallback, useState } from "react";
import {
  BasicSingleSelect,
  SingleSelectOption,
} from "@instill-ai/design-system";

export type ControlSelectWrapperProps = {
  customizable: boolean;
  id: string;
  label: string;
  isActive: boolean;
  options: SingleSelectOption[];
  wrapperOnClick?: () => void;
  wrapperOnMouseOver?: () => void;
  selectOnFocus?: () => void;
  onChange?: (option: SingleSelectOption) => void;
  minWidth: string;
  menuPlacement?: "top" | "bottom" | "auto";
};

export const ControlSelectWrapper = ({
  customizable,
  id,
  label,
  isActive,
  options,
  wrapperOnClick,
  selectOnFocus,
  minWidth,
  menuPlacement,
  onChange,
  wrapperOnMouseOver,
}: ControlSelectWrapperProps) => {
  const [selectOption, setSelectOption] = useState<SingleSelectOption>(
    options[0]
  );

  const onChangehandler = useCallback(
    (option: SingleSelectOption) => {
      if (onChange) onChange(option);
      setSelectOption(option);
    },
    [onChange]
  );

  return (
    <div
      onClick={wrapperOnClick}
      className={cn("relative w-full", minWidth, {
        "cursor-pointer": wrapperOnClick,
      })}
    >
      <BasicSingleSelect
        menuPlacement={menuPlacement ?? "auto"}
        key={id}
        id={id}
        instanceId={id}
        label={label}
        options={options}
        value={customizable ? selectOption : options[0]}
        onChange={onChangehandler}
        onFocus={selectOnFocus}
        required={true}
        disabled={customizable ? false : onChange ? false : true}
      />
      {customizable ? null : (
        <div
          className={cn(
            "absolute top-0 bottom-0 right-0 left-0 cursor-pointer border-2",
            isActive ? "border-instillNatureGreen" : "border-instillGrey20"
          )}
          onMouseOver={wrapperOnMouseOver}
        />
      )}
    </div>
  );
};
