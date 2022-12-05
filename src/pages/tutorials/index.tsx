import { GetStaticProps } from "next";
import { ContentContainer, PageBase, PageHead } from "@/components/ui";
import { FC, ReactElement, useMemo, useState } from "react";
import {
  TutorialHero,
  TutorialList,
  TutorialFilters,
  TutorialFiltersProps,
} from "@/components/tutorial";
import { TutorialMeta } from "@/types/instill";
import { TutorialSearch } from "@/components/tutorial/TutorialSearch";
import { prepareTutorial } from "@/lib/instill/prepareTutorial";

export const getStaticProps: GetStaticProps<TutorialIndexPageProps> =
  async () => {
    const tutorials = await prepareTutorial();

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

type GetLayOutProps = {
  page: ReactElement;
};

type TutorialIndexPageProps = {
  tutorials: TutorialMeta[];
};

const TutorialIndexPage: FC<TutorialIndexPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ tutorials }) => {
  const [searchedTutorials, setSearchedTutorials] = useState<TutorialMeta[]>(
    []
  );
  const [filters, setFilters] = useState<TutorialFiltersProps["filters"]>({
    cvTask: "All",
    connector: "All",
    useCase: "All",
  });

  // We don't need to complicate thing at this stage, once
  // we have many conditinon to filter we can find a lib to
  // handle it for us.

  const filteredTutorials = useMemo(() => {
    const filterCvTask = (
      item: TutorialMeta,
      filters: TutorialFiltersProps["filters"]
    ) => {
      if (filters.cvTask === "All") {
        return true;
      } else {
        return item.cvTask === filters.cvTask ? true : false;
      }
    };

    const filterConnector = (
      item: TutorialMeta,
      filters: TutorialFiltersProps["filters"]
    ) => {
      if (filters.connector === "All") {
        return true;
      } else {
        if (
          filters.connector === item.sourceConnector ||
          filters.connector === item.destinationConnector
        ) {
          return true;
        } else {
          return false;
        }
      }
    };

    const filterUseCase = (
      item: TutorialMeta,
      filters: TutorialFiltersProps["filters"]
    ) => {
      if (filters.useCase === "All") {
        return true;
      } else {
        return item.useCase === filters.useCase ? true : false;
      }
    };

    let filteredTutorials = tutorials.filter((e) => filterCvTask(e, filters));
    filteredTutorials = filteredTutorials.filter((e) =>
      filterUseCase(e, filters)
    );
    return filteredTutorials.filter((e) => filterConnector(e, filters));
  }, [filters, tutorials]);

  return (
    <>
      <PageHead
        pageTitle="Tutorial | Instill AI"
        pageDescription=""
        pageType="main"
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
    </>
  );
};

TutorialIndexPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default TutorialIndexPage;
