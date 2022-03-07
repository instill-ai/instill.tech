import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import { PageBase } from "../../components/layouts/PageBase";
import { PageHead } from "../../components/layouts/PageHead";
import { CareerPositionDescriptionBlock } from "../../components/ui/blocks/CareerPositionDescriptionBlock";
import { CareerPostionDetailsBlock } from "../../components/ui/blocks/CareerPostionDetailsBlock";
import { StayInTheLoopBlock } from "../../components/ui/blocks/StayInTheLoopBlock";
import { BackToPreviousPageLink } from "../../components/ui/links/BackToPreviousPageLink";
import {
  getClickUpTaskQuery,
  transformClickUpTaskToPositionDetails,
} from "../../lib/clickUp";
import { handle } from "../../lib/utilities";
import { IClickUpTask } from "../../types/clickUp";
import { TPositionDetails } from "../../types/instill";

interface Props {
  position: TPositionDetails;
}

interface GetLayOutProps {
  page: ReactElement;
}

const CareerPositionPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ position }) => {
  const router = useRouter();

  if (!position) {
    router.push("/404");
  }

  return (
    <PageHead
      pageTitle={`${position.name} | Instill AI`}
      pageDescription="We're on a mission to make Vision Al highly accessbile to everyone. Join us and make a dent in the universe!"
    >
      <div className="flex flex-col pt-[100px] lg:pt-[180px] pb-10">
        <div className="flex mb-10 px-4 md:px-0">
          <BackToPreviousPageLink url="/career" />
        </div>

        <div className="flex flex-col gap-y-20 md:gap-y-0 md:flex-row md:gap-x-6 mb-[100px]">
          <CareerPostionDetailsBlock
            styleName="px-4 md:px-0 md:w-4/12"
            position={position}
          />
          <CareerPositionDescriptionBlock
            styleName="px-4 md:px-10 md:w-8/12"
            description={position.description}
          />
        </div>
        <StayInTheLoopBlock styleName="px-4 md:px-0" />
      </div>
    </PageHead>
  );
};

CareerPositionPage.getLayout = (page) => {
  return <PageBase withMaxWidth={true}>{page}</PageBase>;
};

export default CareerPositionPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let tasks: IClickUpTask[];

  const { slug } = context.query;

  const taskId = slug.toString().split("-")[0];

  const [error, task] = await handle(getClickUpTaskQuery(taskId));

  if (error) {
    console.error(
      "Something went wrong when fetch the open position detail",
      error
    );
    return {
      props: {
        position: null,
      },
    };
  }

  const positionDetails = transformClickUpTaskToPositionDetails(task);

  return {
    props: {
      position: positionDetails,
    },
  };
};
