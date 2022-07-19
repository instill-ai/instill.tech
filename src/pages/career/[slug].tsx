import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { PageBase } from "../../../components/layouts/PageBase";
import { PageHead } from "../../../components/layouts/PageHead";
import { CareerPositionDescriptionBlock } from "../../../components/ui/blocks/CareerPositionDescriptionBlock";
import { CareerPostionDetailsBlock } from "../../../components/ui/blocks/CareerPostionDetailsBlock";
import { BackToPreviousPageLink } from "../../../components/ui/links/BackToPreviousPageLink";
import {
  getClickUpTaskQuery,
  listClickUpTasksInListQuery,
  transformClickUpTaskToPositionDetails,
} from "../../../lib/clickUp";
import { handle } from "../../../lib/utilities";
import { IClickUpTask } from "../../../types/clickUp";
import { TPositionDetails } from "../../../types/instill";
import { useOnScreen } from "../../../hooks/useOnScreen";
import { useAmplitudeCtx } from "../../../context/AmplitudeContext";
import { sendAmplitudeData } from "../../../lib/amplitude";

const StayInTheLoopBlock = dynamic(() =>
  import("../../../components/ui/blocks/StayInTheLoopBlock").then(
    (mod) => mod.StayInTheLoopBlock
  )
);

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

  // Send amplitude data
  const { amplitudeIsInit } = useAmplitudeCtx();
  useEffect(() => {
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_career_detail_page", {
        type: "navigation",
        career_position: position.name,
      });
    }
  }, [router.isReady, amplitudeIsInit, position.name]);

  // lazy load stayInTheLoop
  const stayInTheLoopRef = useRef<HTMLDivElement>();

  const [loadStayInTheLoop, setLoadStayInTheLoop] = useState(false);
  const stayInTheLoopIsOnScreen = useOnScreen(
    stayInTheLoopRef,
    !loadStayInTheLoop
  );

  useEffect(() => {
    if (stayInTheLoopIsOnScreen && !loadStayInTheLoop) {
      setLoadStayInTheLoop(true);
    }
  }, [stayInTheLoopIsOnScreen, loadStayInTheLoop]);

  return (
    <PageHead
      pageTitle={`${position.name} | Instill AI`}
      pageDescription="We're on a mission to make Vision Al highly accessbile to everyone. Join us and make a dent in the universe!"
    >
      <div className="flex bg-instillGray95">
        <div className="flex max-w-[1440px] flex-col pt-[100px] md:mx-auto md:w-10/12 lg:pt-[180px] ">
          <div className="mb-10 flex px-4 md:px-0">
            <BackToPreviousPageLink url="/career" />
          </div>

          <div className="mb-[100px] flex flex-col gap-y-20 md:flex-row md:gap-y-0 md:gap-x-6">
            <CareerPostionDetailsBlock
              styleName="px-4 md:px-0 md:w-4/12"
              position={position}
            />
            <CareerPositionDescriptionBlock
              styleName="px-4 md:px-10 md:w-8/12"
              description={position.description}
            />
          </div>
          <div className="mb-20 flex" ref={stayInTheLoopRef}>
            {loadStayInTheLoop && (
              <StayInTheLoopBlock styleName="px-4 md:px-0" />
            )}
          </div>
        </div>
      </div>
    </PageHead>
  );
};

CareerPositionPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPositionPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let tasks: IClickUpTask[];

  const taskId = params.slug.toString().split("-")[0];

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
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let tasks: IClickUpTask[];
  let paths = [];

  try {
    tasks = await listClickUpTasksInListQuery("175663624");

    for (const task of tasks) {
      const position = transformClickUpTaskToPositionDetails(task);
      paths.push({
        params: {
          slug: `${position.id}-${position.slug}`,
        },
      });
    }
  } catch (err) {
    console.error(
      "Something went wrong when retrieve open position on Clickup",
      err
    );
  }

  return {
    paths,
    fallback: false,
  };
};
