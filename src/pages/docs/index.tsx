import { GetServerSideProps } from "next";
import { LATEST_VERSION } from "../../../version.mjs";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `/docs/core/${LATEST_VERSION}/welcome`,
      permanent: false,
    },
  };
};

const DocsIndex = () => {
  return <div />;
};

export default DocsIndex;
