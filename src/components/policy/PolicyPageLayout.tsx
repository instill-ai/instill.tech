import { ReactNode } from "react";
import { PageBase, PageHead } from "../ui";

export type PolicyPageLayoutProps = {
  meta: {
    title: string;
    description: string;
  };
  children?: ReactNode | undefined;
};

export const PolicyPageLayout = ({ meta, children }: PolicyPageLayoutProps) => {
  return (
    <PageBase>
      <PageHead
        pageTitle={meta.title}
        pageDescription={meta.description}
        pageType="main"
      />
      <div className="flex w-full bg-white">
        <div className="max-w-[1440px] xl:mx-auto xl:grid xl:w-10/12 xl:grid-cols-3">
          <article className="prose mx-5 mt-[180px] mb-[60px] max-w-none xl:col-span-2 xl:mx-0">
            {children}
          </article>
          <div className="relative xl:col-span-1 xl:mt-[180px]">
            <div className="mb-40 flex flex-col gap-y-2 px-4 pt-40 xl:sticky xl:top-0 xl:mb-0 xl:px-16">
              <p className="text-instillGrey90">
                We&apos;re happy to hear from you. Get in touch at
              </p>
              <a
                className="flex text-instillSkyBlue"
                href="mailto:hello@instill.tech"
              >
                hello@instill.tech
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageBase>
  );
};
