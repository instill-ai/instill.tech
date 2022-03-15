import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect } from "react";
import { PageBase } from "../components/layouts/PageBase";
import { PageHead } from "../components/layouts/PageHead";
import { PolicyPageLayout } from "../components/layouts/PolicyPageLayout";
import { useAmplitudeCtx } from "../context/AmplitudeContext";
import { sendAmplitudeData } from "../lib/amplitude";
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
  const router = useRouter();
  const { amplitudeIsInit } = useAmplitudeCtx();

  useEffect(() => {
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_privacy_policy_page", { type: "navigation" });
    }
  }, [router.isReady, amplitudeIsInit]);

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
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
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
