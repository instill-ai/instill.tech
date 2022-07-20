import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect } from "react";
import { PageBase, PageHead, PolicyPageLayout } from "@/components/layouts";
import { useAmplitudeCtx } from "../contexts/AmplitudeContext";
import { sendAmplitudeData } from "../lib/amplitude";
import { getMDFileContent } from "../lib/file";

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
  const router = useRouter();
  const { amplitudeIsInit } = useAmplitudeCtx();

  useEffect(() => {
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_privacy_policy_page", { type: "navigation" });
    }
  }, [router.isReady, amplitudeIsInit]);

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
