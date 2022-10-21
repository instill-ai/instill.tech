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
};

const ControlSelectWrapper = ({
  id,
  label,
  isActive,
  options,
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
        required={true}
        disabled={true}
      />
      <div
        className={cn(
          "absolute top-0 bottom-0 right-0 left-0 border-2",
          isActive ? "border-instillLightGreen" : "border-instillGrey20"
        )}
      />
    </div>
  );
};

export default ControlSelectWrapper;
