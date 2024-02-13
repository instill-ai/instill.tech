import cn from "clsx";

export type SectionLabelProps = {
  text: string;
  position: string;
  marginBottom?: string;
  textClass?: string;
};

export const SectionLabel = ({
  text,
  position,
  marginBottom,
  textClass,
}: SectionLabelProps) => {
  return (
    <div
      className={cn(
        "flex flex-shrink bg-[#02D085] px-2.5 py-[5px]",
        position,
        marginBottom
      )}
    >
      <div
        className={cn(
          "my-auto text-base font-normal uppercase text-instillGrey90",
          textClass
        )}
      >
        {text}
      </div>
    </div>
  );
};
