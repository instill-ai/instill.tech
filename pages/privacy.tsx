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

const CookiePage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ content }) => {
  return (
    <PageHead
      pageTitle="Privacy policy | Instill AI"
      pageDescription="Instill AI's cookie policy."
    >
      <PolicyPageLayout content={content} />
    </PageHead>
  );
};

CookiePage.getLayout = (page) => {
  return <PageBase withMaxWidth={true}>{page}</PageBase>;
};

export default CookiePage;

export const getStaticProps: GetStaticProps = () => {
  const content = getMDFileContent("privacy.md");
  return {
    props: {
      content,
    },
  };
};
