import { GetStaticProps } from "next";
import { join } from "path";
import glob from "fast-glob";
import matter from "gray-matter";
import fs from "fs";
import { ContentContainer, PageBase, PageHead } from "@/components/ui";
import { FC, ReactElement, useState } from "react";
import { TutorialHero, TutorialList } from "@/components/tutorial";
import { Nullable, TutorialMeta } from "@/types/instill";
import { validateTutorialMeta } from "@/lib/markdown/validateTutorialMeta";
import { getCommitMeta } from "@/lib/github";

export const getStaticProps: GetStaticProps<TutorialIndexPageProps> =
  async () => {
    // Glob all tutorials and construct full absolute paths
    const tutorialDir = join(process.cwd(), "tutorials");
    const tutorialRelativePaths = glob.sync("**/*.mdx", { cwd: tutorialDir });

    let turtoialPaths: { absolute: string; relative: string }[] = [];
    let tutorials: TutorialMeta[] = [];

    for (const path of tutorialRelativePaths) {
      turtoialPaths.push({
        relative: path,
        absolute: join(process.cwd(), "tutorials", path),
      });
    }

    // Read the tutorial file's frontmatter and prepare tutorial meta
    for (const path of turtoialPaths) {
      const source = fs.readFileSync(path.absolute, "utf8");
      const { data } = matter(source);

      const commitMeta = await getCommitMeta({
        org: "instill-ai",
        repo: "instill.tech",
        path: "tutorial/" + path.relative + ".mdx",
      });

      console.log(path);

      const validatedMeta = validateTutorialMeta(path.absolute, data);

      tutorials.push({
        ...validatedMeta,
        commit: commitMeta,
        slug: path.relative.split(".")[0],
      });
    }

    console.log(tutorials);

    return {
      props: {
        tutorials,
      },
    };
  };

type GetLayOutProps = {
  page: ReactElement;
};

type TutorialIndexPageProps = {
  tutorials: TutorialMeta[];
};

const TutorialIndexPage: FC<TutorialIndexPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ tutorials }) => {
  const [filteredTutorials, setFilterTutorials] = useState<TutorialMeta[]>([]);
  const [searchedTutorials, setSearchTutorials] = useState<TutorialMeta[]>([]);

  return (
    <>
      <PageHead
        pageTitle="Tutorial | Instill AI"
        pageDescription=""
        pageType="main"
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <TutorialHero marginBottom="mb-[120px] xl:mb-40" />
        <div className="flex flex-col">
          <TutorialList tutorials={tutorials} />
        </div>
      </ContentContainer>
    </>
  );
};

TutorialIndexPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default TutorialIndexPage;
