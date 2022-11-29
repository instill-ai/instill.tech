import { Nullable } from "@/types/instill";
import { Dispatch, SetStateAction } from "react";

export type SingleSelectCheckboxProps = {
  options: { label: string; value: string }[];
  setValue: Dispatch<SetStateAction<Nullable<string>>>;
  value: Nullable<string>;
};

export const SingleSelectCheckbox = ({
  options,
  value,
  setValue,
}: SingleSelectCheckboxProps) => {
  return (
    <div>
      {options.map((e) => (
        <div key={e.label}>
          <input
            type="checkbox"
            checked={e.value === value}
            onChange={() => setValue(e.value)}
          />
        </div>
      ))}
    </div>
  );
};
