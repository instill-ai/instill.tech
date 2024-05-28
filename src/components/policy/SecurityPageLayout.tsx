import { ReactNode } from "react";
import { ContentContainer, PageBase, PageHead } from "../ui";

export type SecurityPageLayoutProps = {
  meta: {
    title: string;
    description: string;
  };
  children?: ReactNode | undefined;
};

export const SecurityPageLayout = ({
  meta,
  children,
}: SecurityPageLayoutProps) => {
  return (
    <PageBase>
      <PageHead
        pageType="main"
        pageTitle={meta.title}
        pageDescription={meta.description}
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <div className="xl:grid xl:w-10/12 xl:grid-cols-3">
          <article className="prose mx-5 mb-[60px] mt-[180px] max-w-none xl:col-span-2 xl:mx-0">
            {children}
          </article>
          <div className="relative xl:col-span-1 xl:mt-[180px]">
            <div className="mb-40 flex flex-col gap-y-2 px-4 pt-40 xl:sticky xl:top-0 xl:mb-0 xl:px-16">
              <p className="text-instillGrey90">
                At Instill AI, data privacy is our top priority. Contact us at
              </p>
              <a
                className="flex text-instillSkyBlue"
                href="mailto:security@instill.tech"
              >
                security@instill.tech
              </a>
            </div>
          </div>
        </div>
      </ContentContainer>
    </PageBase>
  );
};
