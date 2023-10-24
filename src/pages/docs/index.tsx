import { GetServerSideProps } from "next";
import { LATEST_VERSIONS } from "../../../version.mjs";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `/docs/${LATEST_VERSIONS["core"]}/welcome`,
      permanent: false,
    },
  };
};

const DocsIndex = () => {
  return <div />;
};

export default DocsIndex;
