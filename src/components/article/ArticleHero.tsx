import cn from "clsx";

export type ArticleHeroProps = {
  marginBottom?: string;
};

export const ArticleHero = ({ marginBottom }: ArticleHeroProps) => {
  return (
    <div className={cn("flex flex-col space-y-2 text-center", marginBottom)}>
      <h1 className="font-sans text-[56px] font-bold leading-[60px] tracking-[-1.12px]">
        Insights and Updates
      </h1>
      <p className="font-sans text-[18px] font-normal leading-[26px] tracking-[-0.18px] text-[#000000B2]">
        Share updates, stories, learnings and insights along our journey
      </p>
    </div>
  );
};
