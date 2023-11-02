import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { join } from "path";
import glob from "fast-glob";
import { useRouter } from "next/router";
import remarkFrontmatter from "remark-frontmatter";
import { remark } from "remark";
import { HorizontalLine, LastEditedInfo, PageHead } from "@/components/ui";
import { DocsLayout, RightSidebar, RightSidebarProps } from "@/components/docs";
import { docsConfig, getSections } from "../../../content.config";
import { remarkGetHeaders } from "@/lib/markdown/remark-get-headers.mjs";
import { SidebarItem } from "@/types/docs";
import { ArticleNavigationButton } from "@/components/docs";
import { Nullable } from "@/types/instill";
import { serializeMdxRemote } from "@/lib/markdown";
import { CommitMeta } from "@/lib/github/type";
import { getApplicationType, getApplicationVersion } from "@/lib/instill";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCommitMeta } from "@/lib/github";
import { readFile } from "fs/promises";

type DocsPageProps = {
  mdxSource: MDXRemoteSerializeResult;
  nextArticle: Nullable<SidebarItem>;
  prevArticle: Nullable<SidebarItem>;
  headers: RightSidebarProps["headers"];
  commitMeta: Nullable<CommitMeta>;
};

type Props = {
  locales: string[];
};

export const getStaticPaths: GetStaticPaths<Props> = async ({
  locales = [],
}) => {
  const docsDir = join(process.cwd(), "docs");
  const docsPaths = glob.sync("**/*.mdx", { cwd: docsDir });

  const paths: any = [];

  docsPaths.forEach((path) => {
    locales.forEach((locale) => {
      if (path.includes(`.${locale}.`)) {
        paths.push({
          params: {
            path: path.replace(`.${locale}.mdx`, "").split("/"),
            locale,
          },
        });
      }
    });
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<DocsPageProps> = async ({
  params,
  locale,
}) => {
  if (!params || !params.path) {
    return {
      notFound: true,
    };
  }

  let fullPath: string;
  let relativePath: string;

  if (Array.isArray(params.path)) {
    fullPath = join(process.cwd(), "docs", ...params.path);
    relativePath = join(...params.path);
  } else {
    fullPath = join(process.cwd(), "docs", params.path);
    relativePath = join(params.path);
  }

  const source = fs.readFileSync(fullPath + "." + locale + ".mdx", "utf8");

  // Prepare the codeHike theme

  const theme = JSON.parse(
    await readFile(
      join(process.cwd(), "src", "styles", "rose-pine-moon.json"),
      {
        encoding: "utf-8",
      }
    )
  );

  // Serialize the mdx file for the client
  const mdxSource = await serializeMdxRemote(source, true, theme);

  // Get prev and next links from sidebar config
  const sidebars = getSections(getApplicationVersion(params.path, "core"));

  const sidebarLinks: SidebarItem[] = [];
  sidebars.forEach((e) => {
    if (e.link) {
      sidebarLinks.push({ link: e.link, text: e.text });
    }
    if (e.items) {
      sidebarLinks.push(...e.items.flat());
    }
  });

  const currentPageIndex = sidebarLinks.findIndex(
    (e) => e.link === `/docs/${relativePath}`
  );

  const nextArticle =
    currentPageIndex + 1 >= sidebarLinks.length
      ? null
      : sidebarLinks[currentPageIndex + 1];

  const prevArticle =
    currentPageIndex - 1 < 0 ? null : sidebarLinks[currentPageIndex - 1];

  let commitMeta: Nullable<CommitMeta> = null;

  try {
    commitMeta = await getCommitMeta({
      org: "instill-ai",
      repo: "instill.tech",
      path: "docs/" + relativePath + "." + locale + ".mdx",
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

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      mdxSource,
      nextArticle,
      prevArticle,
      headers,
      commitMeta,
    },
  };
};

type GetLayOutProps = {
  page: FC;
};

const DocsPage: FC<DocsPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ mdxSource, nextArticle, prevArticle, commitMeta, headers }) => {
  const router = useRouter();

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
        currentArticleMeta={null}
        commitMeta={null}
        jsonLd={null}
      />
      <div className="grid grid-cols-8">
        <div className="col-span-8 px-6 pb-10 xl:col-span-6 xl:px-8 max:px-16">
          <h1 className="mb-10 font-sans text-[38px] font-semibold text-black dark:text-instillGrey15">
            {mdxSource.frontmatter
              ? mdxSource.frontmatter.title
              : "Documentation"}
          </h1>
          <article
            id="content"
            className="DocSearch-content prose mb-20 max-w-none dark:prose-white dark:bg-instillGrey90"
          >
            {mdxSource ? <MDXRemote {...mdxSource} /> : null}
          </article>
          {commitMeta ? (
            <LastEditedInfo marginBottom="mb-8" meta={commitMeta} />
          ) : null}
          <HorizontalLine
            marginBottom="mb-8"
            bgColor="bg-instillGrey20 dark:bg-instillGrey30"
          />
          <div className="grid grid-flow-row grid-cols-2 gap-x-5">
            {prevArticle ? (
              <ArticleNavigationButton
                type="prev"
                link={prevArticle.link}
                text={prevArticle.text}
              />
            ) : (
              <div />
            )}
            {nextArticle ? (
              <ArticleNavigationButton
                type="next"
                link={nextArticle.link}
                text={nextArticle.text}
              />
            ) : (
              <div />
            )}
          </div>
        </div>

        <aside className="hidden pb-10 xl:col-span-2 xl:block">
          {headers ? (
            <RightSidebar
              githubEditUrl={
                "https://github.com/instill-ai/instill.tech/edit/main" +
                router.asPath +
                `.${router.locale}` +
                ".mdx"
              }
              feedbackUrl={
                "https://github.com/instill-ai/community/issues/new/choose"
              }
              headers={headers}
            />
          ) : null}
        </aside>
      </div>
    </>
  );
};

DocsPage.getLayout = (page) => {
  return <DocsLayout hasSidebar={true}>{page}</DocsLayout>;
};

export default DocsPage;
