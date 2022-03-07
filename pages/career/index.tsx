import { GetServerSideProps } from "next";
import { FC, ReactElement, useCallback, useRef } from "react";
import { PageBase } from "../../components/layouts/PageBase";
import { PageHead } from "../../components/layouts/PageHead";
import { StayInTheLoopBlock } from "../../components/ui/blocks/StayInTheLoopBlock";
import { CareerGeneralIntro } from "../../components/ui/CareerGeneralIntro";
import { CareerHero } from "../../components/ui/CareerHero";
import CareerOpenPositionsSection from "../../components/ui/CareerOpenPositionsSection";
import { listClickUpTasksInListQuery } from "../../lib/clickUp";
import { IClickUpTask } from "../../types/clickUp";

interface Props {
  content: string;
  positions: IClickUpTask[];
}

interface GetLayOutProps {
  page: ReactElement;
}

const CareerPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ positions }) => {
  const openPositionsRef = useRef<HTMLDivElement>();

  const scrollHandler = useCallback(() => {
    openPositionsRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <PageHead
      pageTitle="Career | Instill AI"
      pageDescription="We're on a mission to make Vision Al highly accessbile to everyone. Join us and make a dent in the universe!"
    >
      <CareerHero
        viewJobsScrollHandler={scrollHandler}
        styleName="max-w-[1440px] md:w-10/12 md:mx-auto pt-[100px] lg:pt-[180px] pb-10"
      />
      <CareerGeneralIntro styleName="max-w-[1440px] md:w-10/12 md:mx-auto" />
      <CareerOpenPositionsSection
        ref={openPositionsRef}
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
