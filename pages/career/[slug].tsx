import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import { PageBase } from "../../components/layouts/PageBase";
import { PageHead } from "../../components/layouts/PageHead";
import { CareerPositionDescriptionBlock } from "../../components/ui/blocks/CareerPositionDescriptionBlock";
import { CareerPostionDetailsBlock } from "../../components/ui/blocks/CareerPostionDetailsBlock";
import { StayInTheLoopBlock } from "../../components/ui/blocks/StayInTheLoopBlock";
import { BackToPreviousPageLink } from "../../components/ui/links/BackToPreviousPageLink";
import { getClickUpTaskQuery } from "../../lib/clickup";
import { handle } from "../../lib/utilities";
import { IClickUpTask } from "../../types/clickup";
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
      pageDescription="We are making visual data preparation accessible to everyone and we want you to help."
    >
      <div className="flex flex-col pt-[100px] lg:pt-[180px] pb-10">
        <div className="flex mb-10">
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

  const descriptionIndex = task.custom_fields.findIndex(
    (e) => e.name === "description_markdown"
  );

  const workTypeIndex = task.custom_fields.findIndex(
    (e) => e.name === "work_type"
  );

  const workType = task.custom_fields[workTypeIndex];

  const locationIndex = task.custom_fields.findIndex(
    (field) => field.name === "location"
  );

  const location = task.custom_fields[locationIndex];

  const stockOptionsIndex = task.custom_fields.findIndex(
    (field) => field.name === "stock_options"
  );

  const packageUKIndex = task.custom_fields.findIndex(
    (field) => field.name === "package_uk"
  );

  const packageTWIndex = task.custom_fields.findIndex(
    (field) => field.name === "package_tw"
  );

  const position: TPositionDetails = {
    id: task.id,
    name: task.name,
    description: task.custom_fields[descriptionIndex].value.toString(),
    workType: workType.type_config.options[workType.value].name,
    location: location.type_config.options[location.value].name,
    stockOptions: task.custom_fields[stockOptionsIndex].value.toString(),
    packageUK: task.custom_fields[packageUKIndex].value.toString(),
    packageTW: task.custom_fields[packageTWIndex].value.toString(),
  };

  return {
    props: {
      position,
    },
  };
};
