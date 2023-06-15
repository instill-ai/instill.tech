import { ReactNode, useEffect, useState } from "react";
import cn from "clsx";

import { LeftSidebar } from "./LeftSidebar";
import { docsConfig } from "../../../content.config";
import { Nav } from "./Nav";
import { Footer } from "../ui";
import { useRouter } from "next/router";
import { getApplicationType } from "@/lib/instill";

export type DocsLayoutProps = {
  children?: ReactNode;
};

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const router = useRouter();
  const [leftSidebarIsOpen, setLeftSidebarIsOpen] = useState(false);

  const docsConfigration = docsConfig(getApplicationType(router.asPath));

  return (
    // We use this layout to persist the state of the left sidebar. The right
    // sidebar will stay in the children, not in this layout.
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

          img {
            border-radius: 5px;
          }
        `}
      </style>
      {/* 
        min-h-screen and min-w-screen are essential to make the page had 
        correct height and width
      */}
      <main className="min-w-screen grid min-h-screen grid-flow-col grid-cols-12 bg-white dark:bg-instillGrey95 max:block">
        <aside
          className={cn(
            "docs-left-sidebar fixed top-0 z-30 transform bg-instillGrey05 transition-transform dark:bg-instillGrey90 md:sticky md:col-span-3 md:flex md:transform-none max:fixed",
            leftSidebarIsOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <LeftSidebar leftSidebar={docsConfigration.sidebar.leftSidebar} />
        </aside>

        {/* 
          Filler area outside of LeftSidebar at mobile view.
        */}

        {leftSidebarIsOpen ? (
          <div
            onClick={() => setLeftSidebarIsOpen((prev) => !prev)}
            className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-instillGrey70 opacity-80"
          />
        ) : null}

        {/* 
          The main content of the documentation.
        */}

        <div className="docs-content col-span-12 flex flex-col pb-40 md:col-span-9 max:col-span-12">
          <Nav
            setLeftSidebarIsOpen={setLeftSidebarIsOpen}
            nav={docsConfigration.nav}
          />
          {children}
        </div>

        {/* 
          In order to have correct stacking context, we wrap the footer in a relative position 
          div element.
        */}
        <div className="relative z-50 w-full">
          <Footer />
        </div>
      </main>
    </>
  );
};
