import { GetStaticProps } from "next";
import { ContentContainer, PageBase, PageHead } from "@/components/ui";
import React, { FC, ReactElement, useMemo, useState } from "react";
import {
  TutorialHero,
  TutorialList,
  TutorialFilters,
  TutorialFiltersProps,
  TutorialAndBlogType,
} from "@/components/tutorial";
import { TutorialMeta } from "@/types/instill";
import { TutorialSearch } from "@/components/tutorial/TutorialSearch";
import { prepareTutorials } from "@/lib/instill/prepareTutorials";
import { Button, Logo } from "@instill-ai/design-system";
import { TutorialBlock } from "@/components/tutorial/TutorialBlock";

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
    aiTask: "All",
    connector: "All",
    useCase: "All",
  });

  // We don't need to complicate thing at this stage, once
  // we have many condition to filter we can find a lib to
  // handle it for us.

  const filteredTutorials = useMemo(() => {
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
        margin="my-[120px] xl:my-[18px]"
        contentMaxWidth="max-w-[1127px]"
      >
        <div
          className="bg-cover bg-no-repeat pt-10"
          style={{ backgroundImage: 'url("/images/tutorials/list-bg-1.svg")' }}
        >
          <TutorialHero />
          <TutorialAndBlogType />
          <TutorialSearch
            tutorials={filteredTutorials}
            setResult={setSearchedTutorials}
            marginBottom="mb-4"
          />
        </div>
      </ContentContainer>
      <div
        className="bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/tutorials/blur-3.svg")',
          backgroundPosition: "bottom left",
          zIndex: "10",
        }}
      >
        <ContentContainer margin="py-0" contentMaxWidth="max-w-[1127px]">
          <div className="flex flex-col xl:flex-row xl:gap-x-10">
            <div className="flex xl:w-full">
              <TutorialList tutorials={searchedTutorials} />
            </div>
          </div>
        </ContentContainer>
      </div>
      <div
        style={{ backgroundImage: 'url("/images/tutorials/glow.png")' }}
        className="rounded-b-sm bg-cover bg-no-repeat pb-16 pt-5"
      >
        <ContentContainer
          margin="my-[120px] xl:my-[18px]"
          contentMaxWidth="max-w-[1127px]"
        >
          <div className="flex flex-col gap-y-5 rounded-sm bg-[#FFFFFF99] p-7 text-center shadow-lg">
            <div className="flex justify-center">
              <Logo variant="colourLogomark" width={32} />
            </div>
            <p className="font-mono text-[16px] leading-5">
              Create an account and start building with Instill
            </p>
            <div className="space-x-2">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="secondaryGrey" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </ContentContainer>
      </div>
    </React.Fragment>
  );
};

TutorialIndexPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default TutorialIndexPage;
