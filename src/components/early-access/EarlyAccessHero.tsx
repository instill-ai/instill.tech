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
          We&apos;re now in private alpha. Join as a design partner to adopt AI
          for unstructured data in your company.
        </p>
      }
      headerUppercase={true}
    />
  );
};
