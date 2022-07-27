import { FC, useState, useEffect } from "react";
import LeftSidebar from "../LeftSidebar";
import { SIDEBAR, NAVBAR } from "../../../../docs.config";
import { useRouter } from "next/router";
import RightSidebar from "../RightSidebar";
import Navbar from "../Navbar";
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
        .map((e) => `#grid-main ${e}`)
        .join(",")
    );

    headersEl.forEach((el) => {
      newHeaders.push({
        slug: `#${el.id}`,
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
          className="col-span-2 ml-10"
          title="Site Navigation"
        >
          <LeftSidebar
            leftSidebar={SIDEBAR.leftSidebar}
            currentPagePath={router.pathname}
          />
        </aside>
        <div id="grid-main" className="prose col-span-8 mx-auto max-w-4xl">
          {children}
        </div>
        <aside
          id="grid-right"
          className="grid-sidebar col-span-2 mr-10"
          title="Table of Contents"
        >
          <RightSidebar headers={headers} />
        </aside>
      </main>
    </>
  );
};

export default DocsLayout;
