import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/docs/start-here/getting-started",
      permanent: false,
    },
  };
};

const DocsIndex = () => {
  return <div />;
};

export default DocsIndex;
