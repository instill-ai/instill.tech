import cn from "clsx";

export type AboutHeroProps = {
  marginBottom?: string;
};

export const AboutHero = ({ marginBottom }: AboutHeroProps) => {
  return (
    <div className={cn("mx-auto flex w-full flex-col xl:w-8/12", marginBottom)}>
      <h1 className="w-full text-left font-mono text-5xl font-semibold uppercase text-instillSkyBlue xl:text-instill-h1">
        Make Vision AI Accessible to Everyone
      </h1>
    </div>
  );
};
