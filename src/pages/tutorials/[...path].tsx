import { FC, ReactElement } from "react";
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
  ContributeLinks,
  PageBase,
  PageHead,
  PageHero,
  TableOfContent,
} from "@/components/ui";
import { TutorialLabel } from "@/components/tutorial";

import { DocsLayout, RightSidebar, RightSidebarProps } from "@/components/docs";
import { docsConfig } from "../../../docs.config";
import { remarkInfoBlock } from "@/lib/markdown/remark-info-block.mjs";
import { remarkYoutube } from "@/lib/markdown/remark-youtube.mjs";
import {
  infoBlockHeader,
  infoBlockChildren,
} from "@/lib/markdown/rehype-info-block-handler.mjs";
import { remarkGetHeaders } from "@/lib/markdown/remark-get-headers.mjs";
import { getCommitMeta } from "@/lib/github";
import { Nullable, TutorialMeta } from "@/types/instill";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@instill-ai/design-system";
import { getCvTaskIconAndLabel } from "@/lib/instill";

type TutorialPageProps = {
  mdxSource: MDXRemoteSerializeResult;
  lastEditedTime: Nullable<string>;
  author: Nullable<string>;
  authorGithubUrl: Nullable<string>;
  headers: RightSidebarProps["headers"];
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

  return {
    props: {
      mdxSource,
      headers,
      ...commitMeta,
    },
  };
};

type GetLayOutProps = {
  page: ReactElement;
};

const TutorialPage: FC<TutorialPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ mdxSource, lastEditedTime, author, authorGithubUrl, headers }) => {
  const router = useRouter();

  const { icon, label } = getCvTaskIconAndLabel({
    cvTask: mdxSource.frontmatter?.cvTask as TutorialMeta["cvTask"],
    iconStyle: {
      color: "fill-instillGrey05",
      width: "w-6",
      height: "h-6",
      position: "m-auto",
    },
  });

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
        pageType="docs"
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
        <div className="relative mb-10 h-[500px] w-full bg-instillWarmOrange50">
          <div className="absolute top-5 left-5 flex flex-col gap-y-5">
            <div className="group flex bg-instillGrey80 bg-opacity-20 px-5 py-2 hover:bg-opacity-75">
              <Link href="/tutorials">
                <a className="flex w-full flex-row gap-x-2">
                  <ArrowLeftIcon
                    width="w-5"
                    height="h-5"
                    color="fill-instillGrey20 group-hover:fill-instillGrey05"
                    position="my-auto"
                  />
                  <p className="inline-flex items-center font-mono text-xs font-normal text-instillGrey20 group-hover:text-instillGrey05">
                    Back
                  </p>
                </a>
              </Link>
            </div>
            <div className="bg-instillGrey80 bg-opacity-20 px-5 py-2">
              <TutorialLabel
                icon={icon || undefined}
                label={label}
                position="mr-auto"
                labelTextStyle="font-mono text-xs font-normal text-instillGrey20"
              />
            </div>
          </div>
        </div>
        <div className="mb-2 flex flex-row gap-x-4 pl-1">
          <p className="bg-instillSkyBlue px-2 py-1 text-instillGrey05">
            {mdxSource.frontmatter?.sourceConnector}
          </p>
          <ArrowRightIcon
            width="w-5"
            height="h-5"
            color="fill-instillSkyBlue"
            position="my-auto"
          />
          <p className="bg-instillSkyBlue px-2 py-1 text-instillGrey05">
            {mdxSource.frontmatter?.destinationConnector}
          </p>
        </div>
        <PageHero
          headline={mdxSource.frontmatter ? mdxSource.frontmatter.title : ""}
          subHeadline={
            <p>
              {mdxSource.frontmatter ? mdxSource.frontmatter.description : ""}
            </p>
          }
          marginBottom="mb-[120px] xl:mb-40"
          width="max-w-[1127px] w-10/12"
          position="mr-auto"
          headerColor="text-instillGrey95"
        />
        <div className="relative flex h-full flex-row">
          <article
            id="content"
            className="prose prose-black mb-20 mr-auto w-full max-w-none xl:w-9/12  xl:max-w-[800px]"
          >
            <MDXRemote {...mdxSource} components={{ CH }} />
          </article>
          <div className="hidden w-3/12 xl:block">
            <div className="sticky top-[140px]  pr-4">
              <div className="flex h-full flex-col overflow-auto">
                <TableOfContent headers={headers} />
                <ContributeLinks
                  githubEditUrl={
                    "https://github.com/instill-ai/instill.tech/edit/main" +
                    router.asPath +
                    ".mdx"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

TutorialPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default TutorialPage;
