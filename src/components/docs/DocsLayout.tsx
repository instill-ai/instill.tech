import { ReactNode, useEffect, useState } from "react";
import cn from "clsx";

import { LeftSidebar } from "./LeftSidebar";
import { docsConfig } from "../../../content.config";
import { Nav } from "./Nav";
import { Footer } from "../ui";
import { useRouter } from "next/router";
import { getApplicationType } from "@/lib/instill";
import { useInstillAICtx } from "@/contexts/InstillAIContext";

export type DocsLayoutProps = {
  children?: ReactNode;
};

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const router = useRouter();
  const { isDark } = useInstillAICtx();
  const [leftSidebarIsOpen, setLeftSidebarIsOpen] = useState(false);
  const [footerViewHeight, setFooterViewHeight] = useState(0);

  const docsConfigration = docsConfig(
    getApplicationType(router.asPath),
    isDark
  );

  //  the bellow useEffect is added to calculated the sidebar height acording to the footer vissible in view screen
  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        const { top, height } = footerElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visiblePortion = Math.max(
          0,
          Math.min(height, windowHeight - top)
        );
        setFooterViewHeight(visiblePortion);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // return (
  //   // We use this layout to persist the state of the left sidebar. The right
  //   // sidebar will stay in the children, not in this layout.
  //   <>
  //     <style jsx>
  //       {`
  //         @media screen and (min-width: 1440px) {
  //           .docs-left-sidebar {
  //             width: calc((100vw - 1540px + 300px) / 2);
  //           }

  //           .docs-content {
  //             margin-left: calc((100vw - 1540px + 300px) / 2);
  //             margin-right: calc((100vw - 1540px) / 2);
  //             max-width: var(--docs-content-max-width);
  //           }
  //         }
  //       `}
  //     </style>
  //     <style global jsx>
  //       {`
  //         html {
  //           scroll-behavior: smooth;
  //         }

  //         img {
  //           border-radius: 5px;
  //         }
  //       `}
  //     </style>
  //     {/*
  //       min-h-screen and min-w-screen are essential to make the page had
  //       correct height and width
  //     */}

  //     <main className="flex flex-col">
  //       <div>
  //         <Nav
  //           setLeftSidebarIsOpen={setLeftSidebarIsOpen}
  //           nav={docsConfigration.nav}
  //         />
  //       </div>
  //       <div className="max-w-screen grid min-h-screen grid-flow-col grid-cols-12 bg-white dark:bg-instillGrey95 max:block">
  //         <aside
  //           className={cn(
  //             "docs-left-sidebar fixed top-0 z-30 transform bg-instillGrey05 transition-transform dark:bg-instillGrey90 md:sticky md:col-span-3 md:flex md:transform-none max:fixed",
  //             leftSidebarIsOpen ? "translate-x-0" : "-translate-x-full"
  //           )}
  //         >
  //           <LeftSidebar
  //             leftSidebar={docsConfigration.sidebar.leftSidebar}
  //             footerViewHeight={footerViewHeight}
  //           />
  //         </aside>

  //         {/*
  //         Filler area outside of LeftSidebar at mobile view.
  //       */}

  //         {leftSidebarIsOpen ? (
  //           <div
  //             onClick={() => setLeftSidebarIsOpen((prev) => !prev)}
  //             className="fixed bottom-0 left-0 right-0 top-0 z-20 bg-instillGrey70 opacity-80"
  //           />
  //         ) : null}

  //         {/*
  //         The main content of the documentation.
  //       */}

  //         {children}
  //       </div>
  //       {/*
  //         In order to have correct stacking context, we wrap the footer in a flex-col position
  //         div element.
  //       */}
  //       <div className="z-50 w-full" id="footer">
  //         <Footer />
  //       </div>
  //     </main>
  //   </>
  // );

  return (
    <>
      <style jsx>
        {`
          @media screen and (min-width: 1440px) and (max-width: 1599px) {
            .docs-content {
              margin-left: calc((100vw - 1340px + 300px) / 2);
              margin-right: calc((100vw - 1340px) / 2);
            }
          }
          @media screen and (min-width: 1600px) and (max-width: 2000px) {
            .docs-content {
              margin-left: calc((100vw - 1540px + 300px) / 2);
              margin-right: calc((100vw - 1540px) / 2);
            }
          }
        `}
      </style>

      <div className="flex min-h-screen flex-col">
        <Nav
          setLeftSidebarIsOpen={setLeftSidebarIsOpen}
          nav={docsConfigration.nav}
        />

        <div className="flex flex-grow dark:bg-instillGrey95">
          <aside
            className={cn(
              "docs-left-sidebar fixed top-0 z-30 transform border-r border-gray-300 bg-instillGrey05 transition-transform dark:bg-instillGrey95 md:sticky md:top-0 md:col-span-3 md:flex md:transform-none xl:top-[72px] max:fixed",
              leftSidebarIsOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <LeftSidebar leftSidebar={docsConfigration.sidebar.leftSidebar} />
          </aside>

          <div className="docs-content pt-8">{children}</div>
        </div>

        {leftSidebarIsOpen ? (
          <div
            onClick={() => setLeftSidebarIsOpen((prev) => !prev)}
            className="fixed bottom-0 left-0 right-0 top-0 z-20 bg-instillGrey70 opacity-80"
          />
        ) : null}
      </div>
    </>
  );
};
