import { PageHead } from "@/components/ui";
import { Separator } from "@instill-ai/design-system";
import React from "react";

export default function Custom404() {
  return (
    <React.Fragment>
      <PageHead
        pageType="main"
        pageTitle="404 | Not found"
        pageDescription={null}
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />

      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-row">
          <h1 className="my-auto font-sans text-[24px] font-medium">404</h1>
          <div className="my-auto h-[50px]">
            <Separator
              orientation="vertical"
              className="mx-4 !bg-[#0000004d]"
            />
          </div>
          <p className="my-auto font-sans text-[14px] font-normal">
            This page could not be found.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
