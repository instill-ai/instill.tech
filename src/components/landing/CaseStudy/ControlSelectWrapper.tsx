import cn from "clsx";
import {
  BasicSingleSelect,
  SingleSelectOption,
} from "@instill-ai/design-system";
import { useCallback, useState } from "react";

export type ControlSelectWrapperProps = {
  customizable: boolean;
  id: string;
  label: string;
  isActive: boolean;
  options: SingleSelectOption[];
  onFocus?: () => void;
  minWidth: string;
  menuPlacement?: "top" | "bottom" | "auto";
};

const ControlSelectWrapper = ({
  customizable,
  id,
  label,
  isActive,
  options,
  onFocus,
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
    <div className={cn("relative w-full", minWidth)}>
      <BasicSingleSelect
        menuPlacement={menuPlacement ?? "auto"}
        key={id}
        id={id}
        instanceId={id}
        label={label}
        options={options}
        value={customizable ? selectOption : options[0]}
        onChange={customizable ? onChange : undefined}
        onFocus={onFocus}
        required={true}
        disabled={customizable ? false : true}
      />
      {customizable ? null : (
        <div
          className={cn(
            "absolute top-0 bottom-0 right-0 left-0 border-2",
            isActive ? "border-instillLightGreen" : "border-instillGrey20"
          )}
        />
      )}
    </div>
  );
};

export default ControlSelectWrapper;
