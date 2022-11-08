import cn from "clsx";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import {
  BasicSingleSelect,
  SingleSelectOption,
} from "@instill-ai/design-system";
import { Nullable } from "@/types/instill";

export type ControlSelectWrapperProps = {
  customizable: boolean;
  id: string;
  label: string;
  isActive: boolean;
  options: SingleSelectOption[];
  wrapperOnClick?: () => void;
  selectOnFocus?: () => void;
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
}: ControlSelectWrapperProps) => {
  const [selectOption, setSelectOption] = useState<SingleSelectOption>(
    options[0]
  );

  const onChange = useCallback((option: SingleSelectOption) => {
    setSelectOption(option);
  }, []);

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
        onChange={customizable ? onChange : undefined}
        onFocus={selectOnFocus}
        required={true}
        disabled={customizable ? false : true}
      />
      {customizable ? null : (
        <div
          className={cn(
            "absolute top-0 bottom-0 right-0 left-0 border-2",
            isActive ? "border-instillNatureGreen" : "border-instillGrey20"
          )}
        />
      )}
    </div>
  );
};
