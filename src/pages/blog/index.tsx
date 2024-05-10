import { GetStaticProps } from "next";
import { ContentContainer, PageBase, PageHead } from "@/components/ui";
import * as React from "react";
import { BlogArticleMeta } from "@/types/instill";
import { prepareBlogArticles } from "@/lib/instill/prepareBlogArticles";
import { BlogArticleList, BlogHero } from "@/components/blog";
import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav/BlogCategoryNav";
import { BlogCategory } from "../../../content.config";
import { NextPageWithLayout } from "../_app";

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
  const articles = await prepareBlogArticles();

  return {
    props: {
      articles: articles.sort((a, b) => {
        return (
          new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime()
        );
      }),
    },
  };
};

type BlogIndexPageProps = {
  articles: BlogArticleMeta[];
};

const BlogIndexPage: NextPageWithLayout<BlogIndexPageProps> = ({
  articles,
}) => {
  const [searchedBlogArticles, setSearchedBlogArticles] = React.useState<
    BlogArticleMeta[]
  >([]);

  const [selectedCategory, setSelectedCategory] =
    React.useState<BlogCategory>("Home");

  const selectedArticles = React.useMemo(() => {
    if (selectedCategory === "Home") {
      return articles;
    } else {
      return articles.filter((e) => e.category === selectedCategory);
    }
  }, [articles, selectedCategory]);

  return (
    <React.Fragment>
      <PageHead
        pageType="main"
        pageTitle="Blog | Instill AI"
        pageDescription={null}
        commitMeta={null}
        currentArticleMeta={null}
        additionMeta={null}
        jsonLd={null}
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[960px]"
      >
        <BlogHero marginBottom="mb-10 xl:mb-[120px]" />
        <BlogCategoryNav
          articles={selectedArticles}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSearchResult={setSearchedBlogArticles}
          marginBottom="mb-10 xl:mb-[120px]"
        />
        <BlogArticleList
          articles={searchedBlogArticles}
          marginBottom="mb-10 xl:mb-[120px]"
        />
      </ContentContainer>
    </React.Fragment>
  );
};

BlogIndexPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default BlogIndexPage;
