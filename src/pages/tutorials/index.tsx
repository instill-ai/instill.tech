import { GetStaticProps } from "next";
import { ContentContainer, PageBase, PageHead } from "@/components/ui";
import * as React from "react";
import {
  TutorialHero,
  TutorialList,
  TutorialFilters,
  TutorialFiltersProps,
} from "@/components/tutorial";
import { TutorialMeta } from "@/types/instill";
import { TutorialSearch } from "@/components/tutorial/TutorialSearch";
import { prepareTutorials } from "@/lib/instill/prepareTutorials";
import { NextPageWithLayout } from "../_app";

export const getStaticProps: GetStaticProps<TutorialIndexPageProps> =
  async () => {
    const tutorials = await prepareTutorials();

    return {
      props: {
        tutorials: tutorials.sort((a, b) => {
          return (
            new Date(b.publishedOn).getTime() -
            new Date(a.publishedOn).getTime()
          );
        }),
      },
    };
  };

type TutorialIndexPageProps = {
  tutorials: TutorialMeta[];
};

const TutorialIndexPage: NextPageWithLayout<TutorialIndexPageProps> = ({
  tutorials,
}) => {
  const [searchedTutorials, setSearchedTutorials] = React.useState<
    TutorialMeta[]
  >([]);
  const [filters, setFilters] = React.useState<TutorialFiltersProps["filters"]>(
    {
      aiTask: "All",
      connector: "All",
      useCase: "All",
    }
  );

  // We don't need to complicate thing at this stage, once
  // we have many condition to filter we can find a lib to
  // handle it for us.

  const filteredTutorials = React.useMemo(() => {
    const filterAiTask = (
      item: TutorialMeta,
      filters: TutorialFiltersProps["filters"]
    ) => {
      if (filters.aiTask === "All" || filters.aiTask === "Null") {
        return true;
      } else {
        return item.aiTask === filters.aiTask ? true : false;
      }
    };

    const filterConnector = (
      item: TutorialMeta,
      filters: TutorialFiltersProps["filters"]
    ) => {
      if (filters.connector === "All" || filters.connector === "Null") {
        return true;
      } else {
        return false;
      }
    };

    const filterUseCase = (
      item: TutorialMeta,
      filters: TutorialFiltersProps["filters"]
    ) => {
      if (filters.useCase === "All" || filters.useCase === "Null") {
        return true;
      } else {
        return item.useCase === filters.useCase ? true : false;
      }
    };

    let filteredTutorials = tutorials.filter((e) => filterAiTask(e, filters));
    filteredTutorials = filteredTutorials.filter((e) =>
      filterUseCase(e, filters)
    );
    return filteredTutorials.filter((e) => filterConnector(e, filters));
  }, [filters, tutorials]);

  return (
    <React.Fragment>
      <PageHead
        pageType="main"
        pageTitle="Tutorial | Instill AI"
        pageDescription={null}
        commitMeta={null}
        currentArticleMeta={null}
        additionMeta={null}
        jsonLd={null}
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <TutorialHero marginBottom="mb-10 xl:mb-[60px]" />
        <TutorialSearch
          tutorials={filteredTutorials}
          setResult={setSearchedTutorials}
          marginBottom="mb-10 xl:mb-[120px]"
        />
        <div className="flex flex-col xl:flex-row xl:gap-x-10">
          <div className="xl:flex xl:w-3/12">
            <TutorialFilters
              tutorials={tutorials}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <div className="flex xl:w-9/12">
            <TutorialList tutorials={searchedTutorials} />
          </div>
        </div>
      </ContentContainer>
    </React.Fragment>
  );
};

TutorialIndexPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default TutorialIndexPage;
