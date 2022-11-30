import cn from "clsx";

export type SingleSelectCheckboxProps = {
  options: { label: string; value: string }[];
  id: string;
  setValue: (value: string) => void;
  value: string;
};

export const SingleSelectCheckbox = ({
  id,
  options,
  value,
  setValue,
}: SingleSelectCheckboxProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      {options.map((e) => (
        <div key={e.label} className="flex flex-row gap-x-5">
          <div
            className="my-auto flex min-h-[24px] min-w-[24px] bg-instillGrey05"
            onClick={() => setValue(e.value)}
          >
            <input
              type="checkbox"
              checked={e.value === value}
              onChange={() => setValue(e.value)}
              className="m-auto h-4 w-4 appearance-none rounded-none bg-instillGrey05 outline-none checked:bg-instillSkyBlue"
            />
          </div>
          <p>{e.label}</p>
        </div>
      ))}
    </div>
  );
};
