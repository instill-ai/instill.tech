import { PageHero } from "../ui";

export type BlogHeroProps = {
  marginBottom?: string;
};

export const BlogHero = ({ marginBottom }: BlogHeroProps) => {
  return (
    <PageHero
      headline="INSTILL BLOG"
      subHeadline={
        <p>Share updates, stories, learnings and insights along our journey</p>
      }
      marginBottom={marginBottom}
      headerUppercase={true}
    />
  );
};
