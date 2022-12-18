import { FC, ReactElement } from "react";
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
import { Nullable, TutorialMeta } from "@/types/instill";
import { getCvTaskIconAndLabel } from "@/lib/instill";
import { useElementDimension } from "@/hooks/useElementDimension";
import { CommitMeta } from "@/lib/github/type";
import { serializeMdxRemote } from "@/lib/markdown";
import {
  ArticlePublishInfo,
  ArticleThemeImage,
  BackToPreviousPageLink,
  ContentContainer,
  HorizontalLine,
  LastEditedInfo,
  PageBase,
  PageHead,
  PageHero,
} from "@/components/ui";

type BlogPageProps = {
  mdxSource: MDXRemoteSerializeResult;
  headers: RightSidebarProps["headers"];
  blogs: TutorialMeta[];
  commitMeta: Nullable<CommitMeta>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogDir = join(process.cwd(), "blog");
  const blogRelativePaths = glob.sync("**/*.mdx", { cwd: blogDir });

  return {
    paths: blogRelativePaths.map((path) => ({
      params: {
        path: path.replace(".mdx", "").split("/"),
      },
    })),

    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
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
  let headers = [] as RightSidebarProps["headers"];

  await remark()
    .use(remarkFrontmatter)
    .use(remarkGetHeaders, { headers })
    .process(source);

  return {
    props: {
      mdxSource,
      headers,
      blogs: [],
      commitMeta,
    },
  };
};

type GetLayOutProps = {
  page: ReactElement;
};

const BlogPage: FC<BlogPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ mdxSource, commitMeta, headers, blogs }) => {
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
            ? `${mdxSource.frontmatter.title} | Blog`
            : "Blog"
        }
        pageDescription={
          mdxSource.frontmatter ? mdxSource.frontmatter.description : ""
        }
        pageType="main"
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
            <>
              <LastEditedInfo meta={commitMeta} marginBottom="mb-4" />
              <HorizontalLine bgColor="bg-instillGrey20" marginBottom="mb-20" />
            </>
          ) : null}
        </div>
      </ContentContainer>
    </>
  );
};

BlogPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default BlogPage;
