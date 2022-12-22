import { GetStaticProps } from "next";
import { ContentContainer, PageBase, PageHead } from "@/components/ui";
import { FC, ReactElement, useMemo, useState } from "react";
import { BlogArticleMeta } from "@/types/instill";
import { prepareBlogArticles } from "@/lib/instill/prepareBlogArticles";
import { BlogArticleList, BlogHero, BlogSearch } from "@/components/blog";
import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav/BlogCategoryNav";
import { BlogCategory } from "../../../content.config";

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

type GetLayOutProps = {
  page: ReactElement;
};

type BlogIndexPageProps = {
  articles: BlogArticleMeta[];
};

const BlogIndexPage: FC<BlogIndexPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ articles }) => {
  const [searchedBlogArticles, setSearchedBlogArticles] = useState<
    BlogArticleMeta[]
  >([]);

  const [selectedCategory, setSelectedCategory] =
    useState<BlogCategory>("Home");

  const selectedArticles = useMemo(() => {
    if (selectedCategory === "Home") {
      return articles;
    } else {
      return articles.filter((e) => e.category === selectedCategory);
    }
  }, [articles, selectedCategory]);

  return (
    <>
      <PageHead
        pageTitle="Blog | Instill AI"
        pageDescription=""
        pageType="main"
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
    </>
  );
};

BlogIndexPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default BlogIndexPage;
