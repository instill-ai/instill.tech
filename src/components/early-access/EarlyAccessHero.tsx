import cn from "clsx";

export type EarlyAccessHeroProps = {
  marginBottom?: string;
};

export const EarlyAccessHero = ({ marginBottom }: EarlyAccessHeroProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col gap-y-5 xl:w-8/12",
        marginBottom
      )}
    >
      <h1 className="w-full text-left font-mono text-5xl font-semibold uppercase text-instillSkyBlue xl:text-instill-h1">
        Get Early Access
      </h1>
      <p className="font-sans text-lg font-light text-instillGrey70 xl:text-2xl">
        We&apos;re now in private alpha. Join and see first-hand how Instill AI
        can help adopt Vision AI in your company.
      </p>
    </div>
  );
};
