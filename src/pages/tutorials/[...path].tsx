import { FC, ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { CH } from "@code-hike/mdx/components";
import { join } from "path";
import glob from "fast-glob";
import { readFile } from "fs/promises";
import remarkFrontmatter from "remark-frontmatter";
import { remark } from "remark";

import {
  BackToPreviousPageLink,
  ContentContainer,
  ArticlePublishInfo,
  ArticleThemeImage,
  HorizontalLine,
  LastEditedInfo,
  PageBase,
  PageHead,
  PageHero,
} from "@/components/ui";
import {
  TutorialPipelineLabel,
  TutorialSimilarUseCases,
  TutorialTableOfContent,
} from "@/components/tutorial";

import { RightSidebarProps } from "@/components/docs";
import { remarkGetHeaders } from "@/lib/markdown/remark-get-headers.mjs";
import { getCommitMeta } from "@/lib/github";
import { Nullable, TutorialMeta } from "@/types/instill";
import { getCvTaskIconAndLabel } from "@/lib/instill";
import { useElementDimension } from "@/hooks/useElementDimension";
import { prepareTutorials } from "@/lib/instill/prepareTutorials";
import { CommitMeta } from "@/lib/github/type";
import { serializeMdxRemote } from "@/lib/markdown";

type TutorialPageProps = {
  mdxSource: MDXRemoteSerializeResult;
  headers: RightSidebarProps["headers"];
  tutorials: TutorialMeta[];
  commitMeta: Nullable<CommitMeta>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tutorialDir = join(process.cwd(), "tutorials");
  const tutorialRelativePaths = glob.sync("**/*.mdx", { cwd: tutorialDir });

  return {
    paths: tutorialRelativePaths.map((path) => ({
      params: {
        path: path.replace(".mdx", "").split("/"),
      },
    })),

    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<TutorialPageProps> = async ({
  params,
}) => {
  if (!params || !params.path) {
    return {
      notFound: true,
    };
  }

  let fullPath: string;
  let relativePath: string;

  if (Array.isArray(params.path)) {
    fullPath = join(process.cwd(), "tutorials", ...params.path);
    relativePath = join(...params.path);
  } else {
    fullPath = join(process.cwd(), "tutorials", params.path);
    relativePath = join(params.path);
  }

  const source = fs.readFileSync(fullPath + ".mdx", "utf8");

  // Prepare the codeHike theme
  const theme = JSON.parse(
    await readFile(
      join(process.cwd(), "src", "styles", "rose-pine-moon.json"),
      {
        encoding: "utf-8",
      }
    )
  );

  // Serialize the mdx file for client
  const mdxSource = await serializeMdxRemote(source, true, theme);

  // Access GitHub API to retrieve the info of Committer
  let commitMeta: Nullable<CommitMeta> = null;

  try {
    commitMeta = await getCommitMeta({
      org: "instill-ai",
      repo: "instill.tech",
      path: "tutorials/" + relativePath + ".mdx",
    });
  } catch (err) {
    console.log(err);
  }

  // We use remark to get the headers

  const headers = [] as RightSidebarProps["headers"];

  await remark()
    .use(remarkFrontmatter)
    .use(remarkGetHeaders, { headers })
    .process(source);

  // We need all the tutorials data
  const tutorials = await prepareTutorials();

  return {
    props: {
      mdxSource,
      headers,
      tutorials,
      commitMeta,
    },
  };
};

type GetLayOutProps = {
  page: ReactElement;
};

const TutorialPage: FC<TutorialPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ mdxSource, commitMeta, headers, tutorials }) => {
  const { icon, label } = getCvTaskIconAndLabel({
    cvTask: mdxSource.frontmatter?.cvTask as TutorialMeta["cvTask"],
  });

  const [articleContainerRef, articleContainerDimension] =
    useElementDimension();

  console.log(articleContainerDimension);

  return (
    <>
      <PageHead
        pageTitle={
          mdxSource.frontmatter
            ? `${mdxSource.frontmatter.title} | Tutorial`
            : "Tutorial"
        }
        pageDescription={
          mdxSource.frontmatter ? mdxSource.frontmatter.description : ""
        }
        pageType="main"
      />
      <ContentContainer
        margin="mt-[60px] mb-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <div className="mx-auto flex w-full flex-col xl:max-w-[800px]">
          <BackToPreviousPageLink
            url="/tutorials"
            marginBottom="mb-5 xl:mb-10"
          />
          <TutorialPipelineLabel
            icon={icon}
            label={label}
            sourceConnector={mdxSource.frontmatter?.sourceConnector || null}
            destinationConnector={
              mdxSource.frontmatter?.destinationConnector || null
            }
            marginBottom="mb-2"
          />
          <PageHero
            headline={mdxSource.frontmatter ? mdxSource.frontmatter.title : ""}
            subHeadline={
              mdxSource.frontmatter ? mdxSource.frontmatter.description : ""
            }
            headerFontFamily="font-sans"
            marginBottom="mb-3"
            width="max-w-[1127px]"
            position="mr-auto"
            headerColor="text-instillGrey95"
            gapY="gap-y-[30px]"
            headerUppercase={false}
          />
          <ArticlePublishInfo
            author={mdxSource.frontmatter ? mdxSource.frontmatter.author : ""}
            authorAvatarSrc={
              mdxSource.frontmatter ? mdxSource.frontmatter.authorAvatarSrc : ""
            }
            publishedOn={
              mdxSource.frontmatter ? mdxSource.frontmatter.publishedOn : ""
            }
            authorGitHubUrl={
              mdxSource.frontmatter ? mdxSource.frontmatter.authorGitHubUrl : ""
            }
            marginBottom="mb-10"
          />
          <ArticleThemeImage
            imgSrc={mdxSource.frontmatter?.themeImgSrc || null}
            placeholderColor={
              mdxSource.frontmatter?.placeholderColor || "bg-instillBlue50"
            }
            marginBottom="mb-20 xl:mb-40"
          />
          <div
            ref={articleContainerRef}
            className="relative mb-20 flex h-full flex-row"
          >
            <article
              id="content"
              className="prose prose-black mr-auto w-full max-w-none"
            >
              <MDXRemote {...mdxSource} components={{ CH }} />
            </article>
          </div>
          {commitMeta ? (
            <>
              <LastEditedInfo meta={commitMeta} marginBottom="mb-4" />
              <HorizontalLine bgColor="bg-instillGrey20" marginBottom="mb-20" />
            </>
          ) : null}
        </div>

        {/* 
          The section for Similar use cases
        */}

        <div>
          {mdxSource.frontmatter?.useCase ? (
            <TutorialSimilarUseCases
              tutorials={tutorials}
              useCase={mdxSource.frontmatter?.useCase}
              currentTitle={mdxSource.frontmatter?.title}
            />
          ) : null}
        </div>

        {/* 
          In current design, we want to make table of content align with the 
          article container.
        */}

        <div
          className="absolute hidden max:block"
          style={{
            top: `${articleContainerDimension.y}px`,
            left: `${
              articleContainerDimension.x + articleContainerDimension.width + 40
            }px`,
            height: articleContainerDimension.height - 100,
          }}
        >
          <TutorialTableOfContent headers={headers} maxWidth="max-w-[300px]" />
        </div>
      </ContentContainer>
    </>
  );
};

TutorialPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default TutorialPage;
