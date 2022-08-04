import { FC, useState, useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import { SIDEBAR, NAVBAR } from "../../../docs.config";
import { useRouter } from "next/router";
import RightSidebar from "./RightSidebar";
import Navbar from "./Navbar";
import { Frontmatter } from "@/types/docs";
import { docsBaseStyles } from "@/style/docsBaseStyle";

export type DocsLayoutProps = {
  meta: Frontmatter;
};

const DocsLayout: FC<DocsLayoutProps> = ({ children, meta }) => {
  const router = useRouter();
  const [headers, setHeaders] = useState<{ slug: string; text: string }[]>([]);

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

  console.log(router.pathname.slice(1));

  return (
    <>
      <main className="mx-auto grid grid-flow-col grid-cols-12 gap-x-10">
        <aside
          className="col-span-4 z-10 bg-instillGrey05"
          title="Site Navigation"
        >
          <LeftSidebar
            leftSidebar={SIDEBAR.leftSidebar}
            currentPagePath={router.pathname}
            maxWidth="max-w-[300px]"
          />
        </aside>

        <div className="flex flex-col col-span-7 max-w-[1140px] mr-auto pb-40">
          <Navbar
            navbar={NAVBAR}
            marginBottom={docsBaseStyles.navbarMarginBottom}
          />
          <div className="grid grid-cols-9">
            <div className="col-span-7 px-8">
              <h1 className=" font-sans font-semibold text-3xl mb-10">
                {meta.title}
              </h1>
              <article id="content" className="prose prose-black max-w-none">
                {children}
              </article>
            </div>

            <aside
              className="grid-sidebar col-span-2 pl-8"
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
