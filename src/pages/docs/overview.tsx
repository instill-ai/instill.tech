import React, { FC, ReactElement } from "react";
import { GetStaticProps } from "next";
import { PageHead } from "@/components/ui";
import { DocsLayout } from "@/components/docs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
  locales: string[];
};

type GetLayOutProps = {
  page: ReactElement;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

const OverviewPage: FC & {
  getLayout?: FC<GetLayOutProps>;
} = () => {
  return (
    <React.Fragment>
      <PageHead
        pageTitle={"Overview"}
        pageDescription={null}
        pageType="docs"
        additionMeta={
          <React.Fragment>
            <meta name="docsearch:language" content="en" />
            <meta name="docsearch:version" content="3.0.0" />
          </React.Fragment>
        }
        currentArticleMeta={null}
        commitMeta={null}
        jsonLd={null}
      />
      <div className="grid grid-cols-8">
        <div className="col-span-8 px-6 pb-10 xl:col-span-6 xl:px-8 max:px-16">
          <h1 className="mb-10 font-sans text-[38px] font-semibold text-black dark:text-instillGrey15">
            Welcome to the Instill documentation
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

OverviewPage.getLayout = (page) => {
  return <DocsLayout hasSidebar={false}>{page}</DocsLayout>;
};

export default OverviewPage;
