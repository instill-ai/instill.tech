import { GetStaticProps } from "next";
import { ContentContainer, PageBase, PageHead } from "@/components/ui";
import React, { FC, ReactElement, useMemo, useState } from "react";
import {
  ArticleHero,
  ArticleList,
  // ArticleFilters,
  ArticleFiltersProps,
  ArticleType,
  StartBuildingBlock,
} from "@/components/article";
import { ArticleMeta, BlogArticleMeta } from "@/types/instill";
import { ArticleSearch } from "@/components/article/ArticleSearch";
import { prepareArticles } from "@/lib/instill/prepareArticles";
// import { Button, Logo } from "@instill-ai/design-system";
// import { ArticleBlock } from "@/components/tutorial/ArticleBlock";

export const getStaticProps: GetStaticProps<ArticleIndexPageProps> =
  async () => {
    const articles = await prepareArticles();

    return {
      props: {
        articles: articles.sort((a, b) => {
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

type ArticleIndexPageProps = {
  articles: ArticleMeta[];
};

const ArticleIndexPage: FC<ArticleIndexPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ articles }) => {
  const [searchedArticles, setSearchedArticles] = useState<ArticleMeta[]>([]);
  const [filters, setFilters] = useState<string>("All");

  // We don't need to complicate thing at this stage, once
  // we have many condition to filter we can find a lib to
  // handle it for us.

  const filteredArticles = useMemo(() => {
    if (filters != "All") {
      const filteredArticles = articles.filter((e) => e.type === filters);
      // setSearchedArticles(filteredArticles);
      return filteredArticles;
    }
    return articles;
  }, [filters, articles]);

  return (
    <React.Fragment>
      <PageHead
        pageType="main"
        pageTitle="Articles | Instill AI"
        pageDescription={null}
        commitMeta={null}
        currentArticleMeta={null}
        additionMeta={null}
        jsonLd={null}
      />
      <ContentContainer
        margin="my-2 xl:my-[18px]"
        contentMaxWidth="max-w-[1127px]"
      >
        <div
          className="bg-cover bg-no-repeat pt-10"
          style={{ backgroundImage: 'url("/images/articles/list-bg-1.svg")' }}
        >
          <ArticleHero />
          <ArticleType setFilters={setFilters} filterType={filters} />
          <ArticleSearch
            articles={filteredArticles}
            setResult={setSearchedArticles}
            marginBottom="mb-4"
          />
        </div>
      </ContentContainer>
      <div
        className="bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/articles/blur-3.svg")',
          backgroundPosition: "bottom left",
          zIndex: "10",
        }}
      >
        <ContentContainer margin="py-0" contentMaxWidth="max-w-[1127px]">
          <ArticleList articles={searchedArticles} />
        </ContentContainer>
      </div>
      <StartBuildingBlock />
    </React.Fragment>
  );
};

ArticleIndexPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default ArticleIndexPage;
