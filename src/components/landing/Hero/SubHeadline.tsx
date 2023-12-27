import cn from "clsx";

export type SubHeadlineProps = {
  marginBottom?: string;
};

export const SubHeadline = ({ marginBottom }: SubHeadlineProps) => {
  return (
    <div
      className={cn(
        "mb-10 text-left font-sans text-lg font-light text-instillGrey90",
        marginBottom
      )}
    >
      Meet Instill Cloud, a no-code/low-code platform that accelerates AI
      application development by 10x. Effortlessly connect to diverse data
      sources, seamlessly integrate AI models, and deploy customized logic for
      your projects, no matter how complex, with lightning speed.
    </div>
  );
};
