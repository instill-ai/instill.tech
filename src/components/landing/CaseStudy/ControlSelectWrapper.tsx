import cn from "clsx";
import {
  BasicSingleSelect,
  SingleSelectOption,
} from "@instill-ai/design-system";

export type ControlSelectWrapperProps = {
  id: string;
  label: string;
  isActive: boolean;
  options: SingleSelectOption[];
  disabled: boolean;
  onFocus?: () => void;
};

const ControlSelectWrapper = ({
  id,
  label,
  isActive,
  disabled,
  options,
  onFocus,
}: ControlSelectWrapperProps) => {
  return (
    <div className="relative">
      <BasicSingleSelect
        key={id}
        id={id}
        instanceId={id}
        label={label}
        options={options}
        value={options[0]}
        onFocus={onFocus}
        required={true}
        disabled={disabled}
      />
      {disabled ? (
        <div
          className={cn(
            "absolute top-0 bottom-0 right-0 left-0 border-2",
            isActive ? "border-instillLightGreen" : "border-instillGrey20"
          )}
        />
      ) : null}
    </div>
  );
};

export default ControlSelectWrapper;
