import { PageHero } from "../ui";

export type TutorialHeroProps = {
  marginBottom?: string;
};

export const TutorialHero = ({ marginBottom }: TutorialHeroProps) => {
  return (
    <PageHero
      headline="Explore popular use cases to empower your teams"
      subHeadline={
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est proin
          ac, est. Consectetur risus montes, etiam ipsum.
        </p>
      }
      marginBottom={marginBottom}
    />
  );
};
