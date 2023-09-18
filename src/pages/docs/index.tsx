import { GetServerSideProps } from "next";
import { VERSIONS } from "../../../content.config";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `/docs/core/${VERSIONS["latest"]}/welcome`,
      permanent: false,
    },
  };
};

const DocsIndex = () => {
  return <div />;
};

export default DocsIndex;
