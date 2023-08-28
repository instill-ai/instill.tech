import { ReactNode, useState } from "react";
import cn from "clsx";
import { LeftSidebar } from "./LeftSidebar";
import { docsConfig } from "../../../content.config";
import { Nav } from "./Nav";
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

  const docsConfigration = docsConfig(
    getApplicationType(router.asPath),
    isDark
  );

  return (
    <>
      <style jsx>
        {`
          @media screen and (min-width: 769px) and (max-width: 900px) {
            .docs-content {
              margin-left: calc((100vw - 600px + 300px) / 2);
              margin-right: calc((100vw - 700px) / 2);
            }
          }
          @media screen and (min-width: 901px) and (max-width: 1199px) {
            .docs-content {
              margin-left: calc((100vw - 750px + 300px) / 2);
              margin-right: calc((100vw - 700px) / 2);
            }
          }
          @media screen and (min-width: 1200px) and (max-width: 1439px) {
            .docs-content {
              margin-left: calc((100vw - 1000px + 300px) / 2);
              margin-right: calc((100vw - 1000px) / 2);
            }
          }
          @media screen and (min-width: 1440px) and (max-width: 1599px) {
            .docs-content {
              margin-left: calc((100vw - 1340px + 300px) / 2);
              margin-right: calc((100vw - 1340px) / 2);
            }

            .docs-content {
              margin-left: calc((100vw - 1340px + 300px) / 2);
              margin-right: calc((100vw - 1340px) / 2);
            }
          }
          @media screen and (min-width: 1600px) and (max-width: 2000px) {
            .docs-left-sidebar {
              width: calc((100vw - 1430px + 300px) / 2);
            }
            .docs-content {
              margin-left: calc((100vw - 1440px + 300px) / 2);
              margin-right: calc((100vw - 1720px) / 2);
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
              "docs-left-sidebar fixed z-30 transform border-r border-gray-300 bg-instillGrey05 transition-transform dark:border-gray-900 dark:bg-instillGrey95 sm:top-0 md:fixed md:top-[65px] md:col-span-3 md:flex md:transform-none xl:top-[65px] max:fixed",
              leftSidebarIsOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <LeftSidebar leftSidebar={docsConfigration.sidebar.leftSidebar} />
          </aside>

          <div className="docs-content md:pd-20 sm:pt-25 xs:pt-30 pt-32 lg:pt-20 xl:pt-20">
            {children}
          </div>
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
