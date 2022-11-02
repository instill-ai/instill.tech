import { NumberCube } from "@/components/ui";

export type ValueBlockProps = {
  number: number;
  title: string;
  description: string;
};

export const ValueBlock = ({ number, title, description }: ValueBlockProps) => {
  return (
    <div className="flex flex-row gap-x-5 xl:gap-x-10">
      <NumberCube
        number={number}
        width="w-10 xl:w-20"
        height="h-10 xl:h-20"
        color="bg-instillNeonBlue"
      />

      <div className="flex flex-col gap-y-2.5 xl:gap-y-[28px]">
        <h3 className="text-left font-sans text-[28px] font-medium text-instillGrey90">
          {title}
        </h3>
        <p className="text-instillGrey90 text-instill-body-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
