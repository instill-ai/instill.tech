import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { ContentContainer, PageBase, PageHead } from "@/components/layouts";
import { CareerPositionDetailsSection } from "@/components/sections";

import { BackToPreviousPageLink } from "../../components/ui/links/BackToPreviousPageLink";
import {
  getClickUpTaskQuery,
  listClickUpTasksInListQuery,
  transformClickUpTaskToPositionDetails,
} from "../../lib/clickUp";
import { handle } from "../../lib/utilities";
import { IClickUpTask } from "../../types/clickUp";
import { TPositionDetails } from "../../types/instill";
import { useOnScreen } from "../../hooks/useOnScreen";
import { useAmplitudeCtx } from "../../contexts/AmplitudeContext";
import { sendAmplitudeData } from "../../lib/amplitude";

const StayInTheLoopSection = dynamic(() =>
  import("@/components/sections").then((mod) => mod.StayInTheLoopSection)
);

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

export type CareerPositionPageProps = {
  position: TPositionDetails;
};

type GetLayOutProps = {
  page: ReactElement;
};

const CareerPositionPage: FC<CareerPositionPageProps> & {
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
    <>
      <PageHead
        pageTitle={`${position.name} | Instill AI`}
        pageDescription="We're on a mission to make Vision Al highly accessbile to everyone. Join us and make a dent in the universe!"
      />
      <ContentContainer>
        <div className="mb-10 flex px-4 md:px-0">
          <BackToPreviousPageLink url="/career" />
        </div>

        <CareerPositionDetailsSection
          position={position}
          marginBottom="mb-[100px]"
        />

        <div className="mb-20 flex" ref={stayInTheLoopRef}>
          {loadStayInTheLoop && <StayInTheLoopSection />}
        </div>
      </ContentContainer>
    </>
  );
};

CareerPositionPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPositionPage;
