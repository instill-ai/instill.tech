import React, { FC, ReactElement, useMemo } from "react";
import { GetStaticProps } from "next";
import fs from "fs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { join } from "path";
import { readFile } from "fs/promises";
import remarkFrontmatter from "remark-frontmatter";
import { remark } from "remark";
import { CH } from "@code-hike/mdx/components";
import { RightSidebarProps } from "@/components/docs";
import { remarkGetHeaders } from "@/lib/markdown/remark-get-headers.mjs";
import { getCommitMeta } from "@/lib/github";
import { BlogArticleMeta, Nullable } from "@/types/instill";
import { useElementDimension } from "@/hooks/useElementDimension";
import { CommitMeta } from "@/lib/github/type";
import { serializeMdxRemote } from "@/lib/markdown";
import {
  ArticlePublishInfo,
  ArticleRightSidebar,
  ArticleThemeImage,
  BackToPreviousPageLink,
  ContentContainer,
  HorizontalLine,
  LastEditedInfo,
  PageBase,
  PageHead,
  PageHero,
} from "@/components/ui";
import { prepareBlogArticles } from "@/lib/instill/prepareBlogArticles";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type ChangelogPageProps = {
  mdxSource: MDXRemoteSerializeResult;
  headers: RightSidebarProps["headers"];
  articles: BlogArticleMeta[];
  commitMeta: Nullable<CommitMeta>;
  changelogMeta: Nullable<BlogArticleMeta>;
  source: string;
};

export const getStaticProps: GetStaticProps<ChangelogPageProps> = async ({
  params,
  locale,
  locales,
}) => {
  const fullPath: string = join(process.cwd(), "changelog", "index");
  const relativePath: string = join();

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
      path: "changelog/" + relativePath + ".mdx",
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

  // We need all the articles' meta
  const articles = await prepareBlogArticles();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      mdxSource,
      headers,
      articles,
      commitMeta,
      changelogMeta: articles.find((e) => e.slug === relativePath) || null,
      source,
    },
  };
};

type GetLayOutProps = {
  page: ReactElement;
};

const ChangelogPage: FC<ChangelogPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ mdxSource, commitMeta, headers, articles, changelogMeta, source }) => {
  const [articleContainerRef, articleContainerDimension] =
    useElementDimension();

  const similarArticles = useMemo(() => {
    if (!changelogMeta) return [];

    return articles.filter(
      (e) =>
        e.category === changelogMeta.category && e.title !== changelogMeta.title
    );
  }, [articles, changelogMeta]);
  return (
    <React.Fragment>
      <PageHead
        pageType="changelog"
        pageTitle={
          mdxSource.frontmatter
            ? `${mdxSource.frontmatter.title} | Changelog`
            : "Changelog"
        }
        pageDescription={
          mdxSource.frontmatter ? mdxSource.frontmatter.description : ""
        }
        commitMeta={commitMeta}
        currentArticleMeta={changelogMeta}
        additionMeta={null}
        jsonLd={null}
      />
      <ContentContainer
        margin="mt-[60px] mb-[120px] xl:my-40"
        contentMaxWidth="xl:max-w-[1127px]"
      >
        <div className="mx-auto flex w-full flex-col xl:max-w-[800px]">
          <PageHero
            headline={mdxSource.frontmatter ? mdxSource.frontmatter.title : ""}
            subHeadline={
              <div className="flex flex-col gap-y-3">
                <p className="text-2xl font-normal text-instillGrey80">
                  {mdxSource.frontmatter
                    ? mdxSource.frontmatter.description
                    : ""}
                </p>
              </div>
            }
            headerFontFamily="font-sans"
            marginBottom="mb-3"
            width="max-w-[1127px]"
            position="mr-auto"
            headerColor="text-instillGrey95"
            gapY="gap-y-[30px]"
            headerUppercase={false}
          />
          test
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
            <React.Fragment>
              <LastEditedInfo meta={commitMeta} marginBottom="mb-4" />
              <HorizontalLine bgColor="bg-instillGrey20" marginBottom="mb-20" />
            </React.Fragment>
          ) : null}
        </div>

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
          <ArticleRightSidebar headers={headers} maxWidth="max-w-[300px]" />
        </div>
      </ContentContainer>
    </React.Fragment>
  );
};

ChangelogPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default ChangelogPage;
