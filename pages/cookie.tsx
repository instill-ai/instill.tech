import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect } from "react";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
import { PolicyPageLayout } from "../components/layouts/PolicyPageLayout";
import { sendAmplitudeData } from "../lib/amplitude";
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
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      sendAmplitudeData("hit_cookie_policy_page", { type: "navigation" });
    }
  }, [router.isReady]);

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
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
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
