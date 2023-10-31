import { Section } from "./Section";
import { Sidebar } from "@/types/docs";
import { DocSearch } from "@docsearch/react";
import { ScrollArea } from "@instill-ai/design-system";

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

      {console.log("leftSidebar.sections", leftSidebar.sections)}

      <ScrollArea.Root className="left-sidebar flex w-96 flex-col overflow-auto px-2 pb-10 pt-5 md:sticky md:top-0 md:ml-auto">
        <div className="mx-0 mb-5">
          <DocSearch
            appId={process.env.NEXT_PUBLIC_ALGOLIA_DOCSEARCH_APP_ID || ""}
            apiKey={process.env.NEXT_PUBLIC_ALGOLIA_DOCSEARCH_APP_KEY || ""}
            indexName="instill"
          />
        </div>

        {leftSidebar.sections.map((section) => (
          <div key={section.text} className="w-full">
            <Section
              items={section.items}
              text={section.text}
              collapsible={section.collapsible}
              link={section.link}
              isHeader={section.isHeader}
            />
          </div>
        ))}
      </ScrollArea.Root>
    </>
  );
};
