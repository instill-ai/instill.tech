import { GetStaticProps } from "next";
import { FC, ReactElement } from "react";
import { PageHead, PolicyPageLayout } from "@/components/layouts";
import { getMDFileContent } from "../lib/file";
import { PageBase } from "@/components/ui";

interface Props {
  content: string;
}

export const getStaticProps: GetStaticProps = () => {
  const content = getMDFileContent("privacy.md");
  return {
    props: {
      content,
    },
  };
};

interface GetLayOutProps {
  page: ReactElement;
}

const CookiePage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ content }) => {
  return (
    <>
      <PageHead
        pageTitle="Privacy policy | Instill AI"
        pageDescription="Instill AI's cookie policy."
      />
      <PolicyPageLayout content={content} />
    </>
  );
};

CookiePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CookiePage;
