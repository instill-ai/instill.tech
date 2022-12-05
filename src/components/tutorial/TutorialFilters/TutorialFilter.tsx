import { SingleSelectCheckbox, SingleSelectCheckboxProps } from "../../ui";

export type TutorialFilterProps = {
  title: string;
} & SingleSelectCheckboxProps;

export const TutorialFilter = ({
  id,
  title,
  options,
  value,
  setValue,
}: TutorialFilterProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      <h3 className="text-black text-instill-h3-medium">{title}</h3>
      <SingleSelectCheckbox
        id={id}
        options={options}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};
