import cn from "clsx";

export type SubHeadlineProps = {
  marginBottom?: string;
};

export const SubHeadline = ({ marginBottom }: SubHeadlineProps) => {
  return (
    <div
      className={cn(
        "font-['IBM Plex Sans'] text-lg font-light leading-7 text-zinc-800",
        marginBottom
      )}
    >
      <span className="font-bold">Unstructured Data Pipelines</span> and{" "}
      <span className="font-bold">Gen AI Apps</span> within minutes; with
      no-code. We provide the{" "}
      <span className="font-bold">Model Infrastructure</span> and{" "}
      <span className="font-bold">Production-Ready</span> Services.{" "}
      <span className="font-bold">Scale</span> with just a few lines of
      auto-generated code.
    </div>
  );
};
