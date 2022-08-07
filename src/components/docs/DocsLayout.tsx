import { FC, useState, useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import { SIDEBAR, NAVBAR } from "../../../docs.config";
import { useRouter } from "next/router";
import RightSidebar from "./RightSidebar";
import Nav from "./Nav";
import { Frontmatter } from "@/types/docs";
import { PageHead } from "../ui";
import cn from "clsx";

export type DocsLayoutProps = {
  meta: Frontmatter;
};

const DocsLayout: FC<DocsLayoutProps> = ({ children, meta }) => {
  const router = useRouter();
  const [headers, setHeaders] = useState<{ slug: string; text: string }[]>([]);
  const [leftSidebarIsOpen, setLeftSidebarIsOpen] = useState(false);

  useEffect(() => {
    let newHeaders = [];
    const headersEl = document.querySelectorAll(
      SIDEBAR.rightSidebar.tableOfContentHeaders
        .map((e) => `#content ${e}`)
        .join(",")
    );

    headersEl.forEach((el) => {
      newHeaders.push({
        slug: el.id,
        text: el.textContent,
      });
    });

    setHeaders(newHeaders);
  }, []);

  return (
    <>
      <style jsx>{``}</style>
      <PageHead
        pageTitle={`${meta.title} | Documentation`}
        pageDescription={meta.description}
      />
      <main className="mx-auto grid grid-flow-col grid-cols-12 gap-x-10">
        <aside
          className={cn(
            "fixed md:sticky h-full md:flex top-0 md:col-span-4 z-30 bg-instillGrey05 transform md:transform-none transition-transform",
            leftSidebarIsOpen ? "translate-x-0" : "-translate-x-full"
          )}
          title="Site Navigation"
        >
          <LeftSidebar
            leftSidebar={SIDEBAR.leftSidebar}
            currentPagePath={router.pathname}
            maxWidth="max-w-[300px]"
          />
        </aside>

        {leftSidebarIsOpen ? (
          <div
            onClick={() => setLeftSidebarIsOpen((prev) => !prev)}
            className="fixed top-0 bottom-0 left-0 right-0 bg-instillGrey70 opacity-80 z-20"
          />
        ) : null}

        <div className="flex flex-col col-span-12 md:col-span-8 mr-auto pb-40 w-full max-w-[1140px]">
          <Nav
            setLeftSidebarIsOpen={setLeftSidebarIsOpen}
            navbar={NAVBAR}
            marginBottom="md:mb-4"
          />
          <div className="grid grid-cols-8">
            <div className="col-span-8 xl:col-span-6 px-8">
              <h1 className="font-sans font-semibold text-3xl mb-10">
                {meta.title}
              </h1>
              <article id="content" className="prose prose-black max-w-none">
                {children}
              </article>
            </div>

            <aside
              className="grid-sidebar col-span-2 pl-8 hidden md:block max-w-[300px]"
              title="Table of Contents"
            >
              <RightSidebar headers={headers} />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default DocsLayout;
