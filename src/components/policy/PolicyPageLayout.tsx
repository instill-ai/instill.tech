import { ReactNode } from "react";
import { PageBase, PageHead } from "../ui";

export type PolicyPageLayoutProps = {
  meta: {
    title: string;
    description: string;
  };
  children?: ReactNode | undefined;
};

const PolicyPageLayout = ({ meta, children }: PolicyPageLayoutProps) => {
  return (
    <PageBase>
      <PageHead
        pageTitle={meta.title}
        pageDescription={meta.description}
        ogImageSrc={`${process.env.NEXT_PUBLIC_BASE_URL}/images/instill-open-graph.png`}
      />
      <div className="flex w-full bg-instillGrey95">
        <div className="max-w-[1440px] md:mx-auto md:grid md:w-10/12 md:grid-cols-3">
          <article className="prose prose-white max-w-none mx-5 md:mx-0 mt-[180px] mb-[60px] md:col-span-2">
            {children}
          </article>
          <div className="relative md:col-span-1 md:mt-[180px]">
            <div className="mb-40 flex flex-col gap-y-2 px-4 pt-40 md:sticky md:top-0 md:mb-0 md:px-16">
              <p className="text-instillGrey05">
                We&apos;re happy to hear from you. Get in touch at
              </p>
              <a
                className="flex text-instillBlue50"
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

export default PolicyPageLayout;
