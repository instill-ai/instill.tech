import { GetStaticProps } from "next";
import { FC, ReactElement } from "react";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
import { ReactMDWrapper } from "../components/ReactMDWrapper";
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
      <ReactMDWrapper
        styleName="mx-5 md:mx-0 mt-[180px] mb-[60px]"
        content={content}
      />
    </PageHead>
  );
};

CookiePage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
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
