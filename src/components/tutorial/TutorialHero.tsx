import { PageHero } from "../ui";

export type TutorialHeroProps = {
  marginBottom?: string;
};

export const TutorialHero = ({ marginBottom }: TutorialHeroProps) => {
  return (
    <PageHero
      headline="EXPLORE INNOVATIVE USE CASES FOR UNSTRUCTURED DATA ETL"
      subHeadline={
        <p>
          VDP streamlines end-to-end unstructured data processing to empower
          your team and solve your business problems.
        </p>
      }
      marginBottom={marginBottom}
      headerUppercase={true}
    />
  );
};
