import { FC, ReactElement } from "react";
import { CaseStudyProps } from "@/components/landing";
import { PageHead } from "@/components/ui";
import { GetStaticProps } from "next";
import { getRepoFileContent } from "@/lib/github";

import { BaseLayout, Hero } from "@/components/hacktoberfest";
// to detect language and automatically redirect to the approprate/[locale] page

export const getStaticProps: GetStaticProps<HacktoberfestPageProps> =
  async () => {
    const destinationDefinitions = await getRepoFileContent(
      "instill-ai",
      "connector-destination",
      "pkg/airbyte/config/seed/definitions.json"
    );

    const buf = Buffer.from(destinationDefinitions.content, "base64").toString(
      "utf-8"
    );

    const destinationArray: Record<string, string>[] = JSON.parse(buf);

    return {
      props: {
        destinations: destinationArray.map((e) => {
          return {
            name: e.title,
            icon: e.icon ?? null,
          };
        }),
      },
    };
  };

type HacktoberfestPageProps = {
  destinations: CaseStudyProps["destinations"];
};

interface GetLayOutProps {
  page: ReactElement;
}

const HacktoberfestPage: FC<HacktoberfestPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ destinations }) => {
  return (
    <>
      <PageHead
        pageType="main"
        pageTitle="Instill AI"
        pageDescription="Empower modern data stack, tapping the value of unstructured data with our open source community."
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />
      <div className="flex flex-col">
        <div className="mx-auto flex w-full max-w-[1127px] flex-col px-4 xl:px-0">
          <Hero />
        </div>
      </div>
    </>
  );
};

HacktoberfestPage.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default HacktoberfestPage;
