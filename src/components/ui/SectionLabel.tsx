import cn from "clsx";

export type SectionLabelProps = {
  text: string;
  position: string;
  marginBottom?: string;
};

export const SectionLabel = ({
  text,
  position,
  marginBottom,
}: SectionLabelProps) => {
  return (
    <div
      className={cn(
        "flex flex-shrink bg-[#02D085] py-[5px] px-2.5",
        position,
        marginBottom
      )}
    >
      <div className="my-auto text-base font-normal uppercase text-instillGrey90">
        {text}
      </div>
    </div>
  );
};
