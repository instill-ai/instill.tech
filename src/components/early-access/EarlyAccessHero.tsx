import { PageHero } from "../ui";

export type EarlyAccessHeroProps = {
  marginBottom?: string;
};

export const EarlyAccessHero = ({ marginBottom }: EarlyAccessHeroProps) => {
  return (
    <PageHero
      marginBottom={marginBottom}
      headline="Get Early Access"
      subHeadline={
        <p>
          We&apos;re now in private alpha. Join and see first-hand how Instill
          AI can help adopt Vision AI in your company.
        </p>
      }
    />
  );
};
