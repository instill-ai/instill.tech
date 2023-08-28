import { useState } from "react";
import { Section } from "./Section";
import { Sidebar } from "@/types/docs";
import cn from "clsx";

export type LeftSidebarProps = {
  leftSidebar: Sidebar["leftSidebar"];
};

export const LeftSidebar = ({ leftSidebar }: LeftSidebarProps) => {
  return (
    <>
      <style>
        {`
        .leftsidebar-logo {
          min-height: var(--docs-left-sidebar-logo-height);
          margin-bottom: var(--docs-left-sidebar-logo-margin-bottom)
        }
        .left-sidebar {
          max-width: var(--docs-left-sidebar-max-width);
          height: calc(100vh - 65px)
        }

        @media screen and (max-width: 768px){
          .left-sidebar {
            height : 100vh
          }
        }
      `}
      </style>
      <div
        className={cn(
          "left-sidebar flex w-96 flex-col overflow-auto px-8 pb-10 pt-5 md:sticky md:top-0 md:ml-auto"
        )}
      >
        {leftSidebar.sections.map((section) => (
          <div key={section.text} className="w-full">
            <Section
              items={section.items}
              text={section.text}
              collapsible={section.collapsible}
              link={section.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};
