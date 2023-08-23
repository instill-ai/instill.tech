import { Section } from "./Section";
import { Sidebar } from "@/types/docs";

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
        }
      `}
      </style>
      <div className="left-sidebar flex h-screen w-96 flex-col overflow-auto px-8 pb-10 md:sticky md:top-0 md:ml-auto">
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
