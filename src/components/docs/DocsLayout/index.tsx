import { Children, FC, useMemo } from "react";
import LeftSidebar from "../LeftSidebar";
import { SIDEBAR, NAVBAR } from "../../../../docs.config";
import { useRouter } from "next/router";
import RightSidebar from "../RightSidebar";
import Navbar from "../Navbar";
import { Frontmatter } from "@/types/docs";
import { renderToString } from "react-dom/server";

export type DocsLayoutProps = {
  meta: Frontmatter;
};

const DocsLayout: FC<DocsLayoutProps> = ({ children, meta }) => {
  const router = useRouter();

  return (
    <>
      <Navbar navbar={NAVBAR} />
      <main className="mx-auto grid grid-flow-col grid-cols-12 gap-x-5">
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
        <div id="grid-main" className="col-span-8 mx-auto max-w-4xl">
          {children}
        </div>
        <aside
          id="grid-right"
          className="grid-sidebar col-span-2 mr-10"
          title="Table of Contents"
        >
          <RightSidebar headers={[]} rightSidebar={SIDEBAR.rightSidebar} />
        </aside>
      </main>
    </>
  );
};

export default DocsLayout;
