import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `/docs/welcome`,
      permanent: false,
    },
  };
};

const DocsIndex = () => {
  return <div />;
};

export default DocsIndex;
