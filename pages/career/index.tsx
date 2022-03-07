import { GetServerSideProps } from "next";
import { FC, ReactElement } from "react";
import { PageBase } from "../../components/layouts/PageBase";
import { PageHead } from "../../components/layouts/PageHead";
import { StayInTheLoopBlock } from "../../components/ui/blocks/StayInTheLoopBlock";
import { CareerGeneralIntro } from "../../components/ui/CareerGeneralIntro";
import { CareerHero } from "../../components/ui/CareerHero";
import { CareerOpenPositionsSection } from "../../components/ui/CareerOpenPositionsSection";
import { listClickUpTasksInListQuery } from "../../lib/clickup";
import { IClickUpTask } from "../../types/clickup";

interface Props {
  content: string;
  positions: IClickUpTask[];
}

interface GetLayOutProps {
  page: ReactElement;
}

const CareerPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ content, positions }) => {
  console.log(positions);
  return (
    <PageHead
      pageTitle="Career | Instill AI"
      pageDescription="We are making visual data preparation accessible to everyone and we want you to help."
    >
      <CareerHero styleName="max-w-[1440px] md:w-10/12 md:mx-auto pt-[100px] lg:pt-[180px] pb-10" />
      <CareerGeneralIntro styleName="max-w-[1440px] md:w-10/12 md:mx-auto" />
      <CareerOpenPositionsSection
        styleName="mb-[100px]"
        positions={positions}
      />
      <StayInTheLoopBlock styleName="px-4 md:px-0 max-w-[1440px] md:w-10/12 md:mx-auto" />
    </PageHead>
  );
};

CareerPage.getLayout = (page) => {
  return <PageBase withMaxWidth={false}>{page}</PageBase>;
};

export default CareerPage;

export const getServerSideProps: GetServerSideProps = async () => {
  let tasks: IClickUpTask[];

  try {
    tasks = await listClickUpTasksInListQuery("175663624");
  } catch (err) {
    console.error(
      "Something went wrong when retrieve open position on Clickup",
      err
    );
  }

  return {
    props: {
      positions: tasks,
    },
  };
};
