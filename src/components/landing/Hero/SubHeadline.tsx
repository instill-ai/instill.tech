import cn from "clsx";

export type SubHeadlineProps = {
  marginBottom?: string;
};

const SubHeadline = ({ marginBottom }: SubHeadlineProps) => {
  return (
    <div
      className={cn(
        "text-left font-sans text-lg font-light text-instillGrey05 sm:text-2xl",
        marginBottom
      )}
    >
      Empower modern data stack, tapping the value of unstructured visual data
      with our open source community.
    </div>
  );
};

export default SubHeadline;
