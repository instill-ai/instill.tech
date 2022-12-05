import cn from "clsx";
import { PageHero } from "../ui";

export type AboutHeroProps = {
  marginBottom?: string;
};

export const AboutHero = ({ marginBottom }: AboutHeroProps) => {
  return (
    <PageHero
      marginBottom={marginBottom}
      headline="Make Vision AI Accessible to Everyone"
      headerUppercase={true}
    />
  );
};
