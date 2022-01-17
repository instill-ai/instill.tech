import { GetStaticProps } from "next";
import { FC, ReactElement } from "react";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
import { PolicyPageLayout } from "../components/layouts/PolicyPageLayout";
import { getMDFileContent } from "../lib/file";

interface Props {
  content: string;
}

interface GetLayOutProps {
  page: ReactElement;
}

const PrivacyPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ content }) => {
  return (
    <PageHead
      pageTitle="Cookie policy | Instill AI"
      pageDescription="Instill AI's privacy policy."
    >
      <PolicyPageLayout content={content} />
    </PageHead>
  );
};

PrivacyPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default PrivacyPage;

export const getStaticProps: GetStaticProps = () => {
  const content = getMDFileContent("cookie.md");
  return {
    props: {
      content,
    },
  };
};
