import { GetServerSideProps } from "next";
import { VERSIONS } from "../../../version.mjs";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `/docs/core/${VERSIONS["core"]}/welcome`,
      permanent: false,
    },
  };
};

const DocsIndex = () => {
  return <div />;
};

export default DocsIndex;
