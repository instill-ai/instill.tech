import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/docs/core/1.3.7/welcome",
      permanent: false,
    },
  };
};

const DocsIndex = () => {
  return <div />;
};

export default DocsIndex;
