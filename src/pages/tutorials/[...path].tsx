import { FC, ReactElement, useRef } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { CH } from "@code-hike/mdx/components";
import { join } from "path";
import glob from "fast-glob";
import remarkDirective from "remark-directive";
import { remarkCodeHike } from "@code-hike/mdx";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import { h } from "hastscript";
import { readFile } from "fs/promises";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkFrontmatter from "remark-frontmatter";
import { remark } from "remark";

import {
  ContentContainer,
  HorizontalLine,
  LastEditedInfo,
  PageBase,
  PageHead,
  PageHero,
  TableOfContent,
} from "@/components/ui";
import {
  TutorialPipeline,
  TutorialSimilarUseCases,
  TutorialTableOfContent,
  TutorialThemeImage,
} from "@/components/tutorial";

import { RightSidebarProps } from "@/components/docs";
import { remarkInfoBlock } from "@/lib/markdown/remark-info-block.mjs";
import { remarkYoutube } from "@/lib/markdown/remark-youtube.mjs";
import {
  infoBlockHeader,
  infoBlockChildren,
} from "@/lib/markdown/rehype-info-block-handler.mjs";
import { remarkGetHeaders } from "@/lib/markdown/remark-get-headers.mjs";
import { getCommitMeta } from "@/lib/github";
import { Nullable, TutorialMeta } from "@/types/instill";
import { getCvTaskIconAndLabel } from "@/lib/instill";
import { useElementDimension } from "@/hooks/useElementDimension";
import { prepareTutorial } from "@/lib/instill/prepareTutorial";
import { CommitMeta } from "@/lib/github/type";

type TutorialPageProps = {
  mdxSource: MDXRemoteSerializeResult;
  headers: RightSidebarProps["headers"];
  tutorials: TutorialMeta[];
  commitMeta: CommitMeta;
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

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      useDynamicImport: true,
      remarkRehypeOptions: { handlers: { infoBlockHeader, infoBlockChildren } },
      remarkPlugins: [
        [
          remarkCodeHike,
          {
            theme,
            lineNumbers: false,
            showCopyButton: true,
            autoImport: false,
          },
        ],
        remarkDirective,
        remarkInfoBlock,
        [remarkYoutube, { validateYoutubeLink: true }],
        remarkGfm,
      ],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            properties: { class: "heading-anchor" },
            content() {
              return h("span", { class: "heading-anchor-hash" }, ["#"]);
            },
          },
        ],
      ],
    },
  });

  // Access GitHub API to retrieve the info of Committer

  const commitMeta = await getCommitMeta({
    org: "instill-ai",
    repo: "instill.tech",
    path: "docs/" + relativePath + ".mdx",
  });

  // We use remark to get the headers

  let headers = [] as RightSidebarProps["headers"];

  await remark()
    .use(remarkFrontmatter)
    .use(remarkGetHeaders, { headers })
    .process(source);

  // We need all the tutorials data
  const tutorials = await prepareTutorial();

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

  return (
    <>
      <PageHead
        pageTitle={
          mdxSource.frontmatter
            ? `${mdxSource.frontmatter.title} | Documentation`
            : "Documentation"
        }
        pageDescription={
          mdxSource.frontmatter ? mdxSource.frontmatter.description : ""
        }
        pageType="main"
        additionMeta={
          <>
            <meta name="docsearch:language" content="en" />
            <meta name="docsearch:version" content="3.0.0" />
          </>
        }
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <div className="mx-auto flex w-full flex-col xl:max-w-[800px]">
          <TutorialThemeImage
            imgSrc={mdxSource.frontmatter?.themeImgSrc || null}
            placeholderColor={
              mdxSource.frontmatter?.placeholderColor || "bg-instillBlue50"
            }
            marginBottom="mb-10"
          />
          <TutorialPipeline
            icon={icon}
            label={label}
            sourceConnector={mdxSource.frontmatter?.sourceConnector || null}
            destinationConnector={
              mdxSource.frontmatter?.destinationConnector || null
            }
          />
          <PageHero
            headline={mdxSource.frontmatter ? mdxSource.frontmatter.title : ""}
            subHeadline={
              <p>
                {mdxSource.frontmatter ? mdxSource.frontmatter.description : ""}
              </p>
            }
            marginBottom="mb-[120px] xl:mb-40"
            width="max-w-[1127px]"
            position="mr-auto"
            headerColor="text-instillGrey95"
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
          <LastEditedInfo meta={commitMeta} marginBottom="mb-8" />
          <HorizontalLine bgColor="bg-instillGrey20" marginBottom="mb-20" />
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
          <TutorialTableOfContent headers={headers} />
        </div>
      </ContentContainer>
    </>
  );
};

TutorialPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default TutorialPage;
