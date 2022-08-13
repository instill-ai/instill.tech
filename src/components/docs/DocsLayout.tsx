import { FC, useState, useEffect, useMemo } from "react";
import LeftSidebar from "./LeftSidebar";
import { useRouter } from "next/router";
import RightSidebar from "./RightSidebar";
import Nav from "./Nav";
import { Frontmatter, SidebarItem } from "@/types/docs";
import { PageHead } from "../ui";
import cn from "clsx";
import ArticleNavigationButton from "./ArticleNavigationButton";
import { Nullable } from "@/types/instill";
import { getRepoFileCommits, getRepoFileContent } from "@/lib/github";
import docsConfig from "../../../docs.config";

export type DocsLayoutProps = {
  meta: Frontmatter;
};

// When screen exceed min-width:1440px we want to center the docs-content and make left sidebar
// expand to the left edge of the docs-content. In order to accomplish this task, left sidebar's
// container's position will be fixed at the leftside and have its width determined by the max-width
// of docs container.

const DocsLayout: FC<DocsLayoutProps> = ({ children, meta }) => {
  const router = useRouter();
  const [headers, setHeaders] = useState<{ slug: string; text: string }[]>([]);
  const [leftSidebarIsOpen, setLeftSidebarIsOpen] = useState(false);
  const [lastEditedTime, setLastEditedTime] = useState<Nullable<string>>(null);
  const [author, setAuthor] = useState<Nullable<string>>(null);
  const [authorGithubUrl, setAuthorGithubUrl] =
    useState<Nullable<string>>(null);

  const nextArticle = useMemo(() => {
    const sidebarLinks: SidebarItem[] = [].concat(
      ...docsConfig.sidebar.leftSidebar.sections.map((e) => e.items)
    );

    const currentPageIndex = sidebarLinks.findIndex(
      (e) => e.link === router.asPath
    );

    if (currentPageIndex + 1 > sidebarLinks.length) return null;

    return sidebarLinks[currentPageIndex + 1];
  }, [docsConfig.sidebar]);

  const prevArticle = useMemo(() => {
    const sidebarLinks: SidebarItem[] = [].concat(
      ...docsConfig.sidebar.leftSidebar.sections.map((e) => e.items)
    );

    const currentPageIndex = sidebarLinks.findIndex(
      (e) => e.link === router.asPath
    );

    if (currentPageIndex - 1 < 0) return null;

    return sidebarLinks[currentPageIndex - 1];
  }, [docsConfig.sidebar]);

  useEffect(() => {
    let newHeaders = [];
    const headersEl = document.querySelectorAll(
      docsConfig.sidebar.rightSidebar.tableOfContentHeaders
        .map((e) => `#content ${e}`)
        .join(",")
    );

    headersEl.forEach((el) => {
      newHeaders.push({
        slug: el.id,
        text: el.textContent.replace("#", ""),
      });
    });

    setHeaders(newHeaders);

    // const anchorClickHandler = function (e: Event) {
    //   e.preventDefault();

    //   document.querySelector(this.getAttribute("href")).scrollIntoView({
    //     behavior: "smooth",
    //   });

    //   window.location.replace(this.getAttribute("href"));
    // };

    // const anchors = document.querySelectorAll('a.heading-anchor[href^="#"]');

    // anchors.forEach((anchor) => {
    //   anchor.addEventListener("click", anchorClickHandler);
    // });

    // return () =>
    //   anchors.forEach((anchor) =>
    //     anchor.removeEventListener("click", anchorClickHandler)
    //   );
  }, [docsConfig.sidebar]);

  useEffect(() => {
    const fetchCommit = async () => {
      const commits = await getRepoFileCommits(
        "instill-ai",
        "instill.tech",
        "src/pages" + router.asPath + ".mdx"
      );

      if (commits.length > 0) {
        const time = new Date(commits[0].commit.author.date).toLocaleString();
        const author = commits[0].commit.author.name;

        setLastEditedTime(time);
        setAuthor(author);
        setAuthorGithubUrl(commits[0].author.html_url);
      }
    };

    fetchCommit();
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media screen and (min-width: 1440px) {
            .docs-left-sidebar {
              width: calc((100vw - 1140px + 300px) / 2);
            }

            .docs-content {
              margin-left: calc((100vw - 1140px + 300px) / 2);
              margin-right: calc((100vw - 1140px) / 2);
              max-width: var(--docs-content-max-width);
            }
          }
        `}
      </style>
      <PageHead
        pageTitle={`${meta.title} | Documentation`}
        pageDescription={meta.description}
      />
      <main className="w-screen grid grid-flow-col grid-cols-12 max:block">
        <aside
          className={cn(
            "docs-left-sidebar fixed md:sticky h-full md:flex md:col-span-3 max:fixed top-0 z-30 bg-instillGrey05 transform md:transform-none transition-transform",
            leftSidebarIsOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <LeftSidebar
            leftSidebar={docsConfig.sidebar.leftSidebar}
            currentPagePath={router.pathname}
          />
        </aside>

        {leftSidebarIsOpen ? (
          <div
            onClick={() => setLeftSidebarIsOpen((prev) => !prev)}
            className="fixed top-0 bottom-0 left-0 right-0 bg-instillGrey70 opacity-80 z-20"
          />
        ) : null}

        <div className="docs-content flex flex-col col-span-12 md:col-span-9 max:col-span-12 pb-40 w-full">
          <Nav
            setLeftSidebarIsOpen={setLeftSidebarIsOpen}
            navbar={docsConfig.sidebar}
          />
          <div className="grid grid-cols-8">
            <div className="col-span-8 xl:col-span-6 px-6 md:px-8 max:px-16">
              <h1 className="font-sans font-semibold text-3xl mb-10">
                {meta.title}
              </h1>
              <article
                id="content"
                className="prose prose-black max-w-none mb-20"
              >
                {children}
              </article>
              <div className="flex flex-row gap-x-2 w-full pb-6 mb-8 border-b">
                {lastEditedTime && author ? (
                  <>
                    <p className="ml-auto text-sm text-instillGrey70">
                      {`Last updated: ${lastEditedTime}`}
                    </p>
                    <div className="flex flex-row gap-x-1 text-sm ">
                      <p className="text-instillGrey70">by</p>
                      <a
                        className="text-instillBlue50 underline"
                        href={authorGithubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {author}
                      </a>
                    </div>
                  </>
                ) : null}
              </div>
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

            <aside className="col-span-2 hidden xl:block">
              <RightSidebar
                githubEditUrl={
                  "https://github.com/instill-ai/instill.tech/edit/main/src/pages" +
                  router.asPath +
                  ".mdx"
                }
                headers={headers}
              />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default DocsLayout;
