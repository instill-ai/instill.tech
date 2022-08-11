import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import glob from "fast-glob";

type DocsParams = {
  params: {
    path: string[];
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const docsDir = join(process.cwd(), "docs");
  const docsPaths = glob.sync("**/*.mdx", { cwd: docsDir });

  console.log(docsPaths);

  return {
    paths: docsPaths.map((path) => ({
      params: {
        path: path.replace(".mdx", "").split("/"),
      },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: DocsParams) => {
  const fullPath = join(process.cwd(), "docs", ...params.path);

  console.log(fullPath);

  return {
    props: {},
  };
};

const DocsPage = () => {
  return <div />;
};

export default DocsPage;
