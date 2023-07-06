import cn from "clsx";
import { Select, SingleSelectOption } from "@instill-ai/design-system";
import { Nullable } from "@/types/instill";

export type ControlSelectWrapperProps = {
  customizable: boolean;
  id: string;
  label: Nullable<string>;
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
  isActive,
  options,
  wrapperOnClick,
  minWidth,
  wrapperOnMouseOver,
}: ControlSelectWrapperProps) => {
  return (
    <div
      onClick={wrapperOnClick}
      className={cn("relative w-full", minWidth, {
        "cursor-pointer": wrapperOnClick,
      })}
    >
      <Select.Root defaultValue={options[0].value}>
        <Select.Trigger className="w-full !rounded-none">
          <Select.Value placeholder="Select a connector" />
        </Select.Trigger>
        <Select.Content className="bg-white">
          <Select.Group>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                <div className="flex flex-row gap-x-2">
                  {option.startIcon}
                  <p className="my-auto">{option.label}</p>
                </div>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      {customizable ? null : (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 top-0 cursor-pointer border-2",
            isActive ? "border-instillNatureGreen" : "border-instillGrey20"
          )}
          onMouseOver={wrapperOnMouseOver}
        />
      )}
    </div>
  );
};
