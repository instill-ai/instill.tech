import { FC, useState, useEffect } from "react";
import LeftSidebar from "../LeftSidebar";
import { SIDEBAR, NAVBAR } from "../../../../docs.config";
import { useRouter } from "next/router";
import RightSidebar from "../RightSidebar";
import Navbar from "../Navbar";
import { Frontmatter } from "@/types/docs";
import { docsBaseStyles } from "@/style/docsBaseStyle";
import DocsFooter from "../DocsFooter";

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
        .map((e) => `#grid-main ${e}`)
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
      <Navbar
        navbar={NAVBAR}
        maxWidth="max-w-[1440px]"
        marginBottom={docsBaseStyles.navbarMarginBottom}
      />
      <main className="mx-auto grid max-w-[1440px] grid-flow-col grid-cols-12 gap-x-10">
        <aside
          id="grid-left"
          className="col-span-3 ml-10"
          title="Site Navigation"
        >
          <LeftSidebar
            leftSidebar={SIDEBAR.leftSidebar}
            currentPagePath={router.pathname}
          />
        </aside>

        <div id="grid-main" className="flex flex-col col-span-7 max-w-4xl">
          <h1 className=" font-sans font-semibold text-3xl mb-10">
            {meta.title}
          </h1>
          <div className="prose">{children}</div>
        </div>
        <aside
          id="grid-right"
          className="grid-sidebar col-span-2 mr-10"
          title="Table of Contents"
        >
          <RightSidebar headers={headers} />
        </aside>
      </main>
      <DocsFooter />
    </>
  );
};

export default DocsLayout;
