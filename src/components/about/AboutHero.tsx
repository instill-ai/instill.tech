import { PageHero } from "../ui";

export type AboutHeroProps = {
  marginBottom?: string;
};

export const AboutHero = ({ marginBottom }: AboutHeroProps) => {
  return (
    <PageHero
      marginBottom={marginBottom}
      headline="Make AI Accessible to Everyone"
      headerUppercase={true}
    />
  );
};
