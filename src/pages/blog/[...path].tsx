import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { join } from "path";
import glob from "fast-glob";
import { readFile } from "fs/promises";
import remarkFrontmatter from "remark-frontmatter";
import { remark } from "remark";
import { CH } from "@code-hike/mdx/components";
import { RightSidebarProps } from "@/components/docs";
import { remarkGetHeaders } from "@/lib/markdown/remark-get-headers.mjs";
import { getCommitMeta } from "@/lib/github";
import { BlogArticleJsonLD, BlogArticleMeta, Nullable } from "@/types/instill";
import { useElementDimension } from "@/hooks/useElementDimension";
import { CommitMeta } from "@/lib/github/type";
import { serializeMdxRemote } from "@/lib/markdown";
import {
  ArticlePublishInfo,
  ArticleRightSidebar,
  ArticleSimilarPosts,
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
import { BlogArticleCard } from "@/components/blog/BlogArticleCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPageWithLayout } from "../_app";
import { GeneralRecord } from "@instill-ai/toolkit";

type BlogPageProps = {
  mdxSource: MDXRemoteSerializeResult;
  headers: RightSidebarProps["headers"];
  articles: BlogArticleMeta[];
  commitMeta: Nullable<CommitMeta>;
  blogMeta: Nullable<BlogArticleMeta>;
  source: string;
};

export const getStaticPaths: GetStaticPaths = async ({ locales = [] }) => {
  const blogDir = join(process.cwd(), "blog");
  const blogRelativePaths = glob.sync("**/*.mdx", { cwd: blogDir });

  const paths: { params: GeneralRecord }[] = [];

  blogRelativePaths.forEach((path) =>
    locales?.forEach((locale) => {
      if (path.includes(`${locale}/`)) {
        paths.push({
          params: {
            path: path.replace(".mdx", "").split("/"),
            locale,
          },
        });
      }
    })
  );

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  params,
  locale,
  locales,
}) => {
  if (!params || !params.path) {
    return {
      notFound: true,
    };
  }

  let fullPath: string;
  let relativePath: string;

  if (Array.isArray(params.path)) {
    fullPath = join(process.cwd(), "blog", ...params.path);
    relativePath = join(...params.path);
  } else {
    fullPath = join(process.cwd(), "blog", params.path);
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
      path: "blog/" + relativePath + ".mdx",
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
      blogMeta: articles.find((e) => e.slug === relativePath) || null,
      source,
    },
  };
};

const BlogPage: NextPageWithLayout<BlogPageProps> = ({
  mdxSource,
  commitMeta,
  headers,
  articles,
  blogMeta,
  source,
}) => {
  const [articleContainerRef, articleContainerDimension] =
    useElementDimension();

  const similarArticles = React.useMemo(() => {
    if (!blogMeta) return [];

    return articles.filter(
      (e) => e.category === blogMeta.category && e.title !== blogMeta.title
    );
  }, [articles, blogMeta]);

  const getJsonLd = (
    blogMeta: Nullable<BlogArticleMeta>
  ): Nullable<BlogArticleJsonLD> => {
    if (!blogMeta) {
      return null;
    }
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blogMeta.title,
      image: process.env.NEXT_PUBLIC_BASE_URL + blogMeta.themeImgSrc,
      url: process.env.NEXT_PUBLIC_BASE_URL + "/blog/" + blogMeta.slug,
      dateCreated: blogMeta.publishedOn,
      datePublished: blogMeta.publishedOn,
      inLanguage: blogMeta.lang,
      isFamilyFriendly: true,
      keywords: [],
      articleBody: source,
      author: {
        "@type": "Person",
        name: blogMeta.author,
        url: blogMeta.authorGitHubUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Instill AI",
        url: process.env.NEXT_PUBLIC_BASE_URL || "",
      },
    };
  };

  return (
    <React.Fragment>
      <PageHead
        pageType="blog"
        pageTitle={
          mdxSource.frontmatter
            ? `${mdxSource.frontmatter.title} | Blog`
            : "Blog"
        }
        pageDescription={
          mdxSource.frontmatter ? mdxSource.frontmatter.description : ""
        }
        commitMeta={commitMeta}
        currentArticleMeta={blogMeta}
        additionMeta={null}
        jsonLd={getJsonLd(blogMeta)}
      />
      <ContentContainer
        margin="mt-[60px] mb-[120px] xl:my-40"
        contentMaxWidth="xl:max-w-[1127px]"
      >
        <div className="mx-auto flex w-full flex-col xl:max-w-[800px]">
          <BackToPreviousPageLink url="/blog" marginBottom="mb-5 xl:mb-10" />
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

        {/* 
          The section for Similar use cases
        */}

        <div>
          {blogMeta?.category ? (
            <ArticleSimilarPosts
              sectionTitle="Similar Articles"
              similarArticles={similarArticles}
              getCardElement={(source, key) => {
                return (
                  <BlogArticleCard
                    key={key}
                    article={source as BlogArticleMeta}
                  />
                );
              }}
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
          <ArticleRightSidebar
            headers={headers}
            maxWidth="max-w-[300px]"
            type="blog"
          />
        </div>
      </ContentContainer>
    </React.Fragment>
  );
};

BlogPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default BlogPage;
