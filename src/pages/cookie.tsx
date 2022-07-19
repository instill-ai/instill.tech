import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect } from "react";
import { PageBase, PageHead } from "@/components/layouts";
import { PolicyPageLayout } from "../components/layouts/PolicyPageLayout";
import { useAmplitudeCtx } from "../contexts/AmplitudeContext";
import { sendAmplitudeData } from "../lib/amplitude";
import { getMDFileContent } from "../lib/file";

interface Props {
  content: string;
}

interface GetLayOutProps {
  page: ReactElement;
}

export const getStaticProps: GetStaticProps = () => {
  const content = getMDFileContent("cookie.md");
  return {
    props: {
      content,
    },
  };
};

const PrivacyPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ content }) => {
  const router = useRouter();
  const { amplitudeIsInit } = useAmplitudeCtx();

  useEffect(() => {
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_cookie_policy_page", { type: "navigation" });
    }
  }, [router.isReady, amplitudeIsInit]);

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
