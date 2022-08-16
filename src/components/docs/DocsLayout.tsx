import { ReactNode, useState } from "react";
import cn from "clsx";
import LeftSidebar from "./LeftSidebar";
import docsConfig from "../../../docs.config";
import Nav from "./Nav";

export type DocsLayoutProps = {
  children?: ReactNode;
};

const DocsLayout = ({ children }: DocsLayoutProps) => {
  const [leftSidebarIsOpen, setLeftSidebarIsOpen] = useState(false);
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
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <main className="w-screen grid grid-flow-col grid-cols-12 max:block">
        <aside
          className={cn(
            "docs-left-sidebar fixed md:sticky h-full md:flex md:col-span-3 max:fixed top-0 z-30 bg-instillGrey05 transform md:transform-none transition-transform",
            leftSidebarIsOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <LeftSidebar leftSidebar={docsConfig.sidebar.leftSidebar} />
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
            navbar={docsConfig.nav}
          />
          {children}
        </div>
      </main>
    </>
  );
};

export default DocsLayout;
