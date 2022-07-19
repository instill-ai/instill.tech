import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { PageBase, PageHead } from "@/components/layouts";
import { CareerGeneralIntro } from "../../components/ui/CareerGeneralIntro";
import { CareerHero } from "../../components/ui/CareerHero";
import { useAmplitudeCtx } from "../../contexts/AmplitudeContext";
import { useOnScreen } from "../../hooks/useOnScreen";
import { sendAmplitudeData } from "../../lib/amplitude";
import {
  listClickUpTasksInListQuery,
  transformClickUpTaskToPositionDetails,
} from "../../lib/clickUp";
import { IClickUpTask } from "../../types/clickUp";
import { TPositionDetails } from "../../types/instill";

const CareerOpenPositionsSection = dynamic(
  () => import("../../components/ui/CareerOpenPositionsSection")
);

const StayInTheLoopBlock = dynamic(() =>
  import("../../components/ui/blocks/StayInTheLoopBlock").then(
    (mod) => mod.StayInTheLoopBlock
  )
);

interface Props {
  content: string;
  positions: TPositionDetails[];
}

interface GetLayOutProps {
  page: ReactElement;
}

export const getStaticProps: GetStaticProps = async () => {
  let tasks: IClickUpTask[];
  let positions: TPositionDetails[] = [];

  try {
    tasks = await listClickUpTasksInListQuery("175663624");

    for (const task of tasks) {
      const position = transformClickUpTaskToPositionDetails(task);
      positions.push(position);
    }
  } catch (err) {
    console.error(
      "Something went wrong when retrieve open position on Clickup",
      err
    );
  }

  return {
    props: {
      positions,
    },

    // This page is using ISR
    revalidate: 10,
  };
};

const CareerPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ positions }) => {
  // Send amplitude data
  const router = useRouter();
  const { amplitudeIsInit } = useAmplitudeCtx();
  useEffect(() => {
    if (router.isReady && amplitudeIsInit) {
      sendAmplitudeData("hit_career_index_page", { type: "navigation" });
    }
  }, [router.isReady, amplitudeIsInit]);

  // lazy load openPositionList
  const openPositionsRef = useRef<HTMLDivElement>();
  const [loadOpenPositions, setLoadOpenPositions] = useState(false);
  const openPositionIsOnscreen = useOnScreen(
    openPositionsRef,
    !loadOpenPositions
  );

  useEffect(() => {
    if (openPositionIsOnscreen && !loadOpenPositions) {
      setLoadOpenPositions(true);
    }
  }, [openPositionIsOnscreen, loadOpenPositions]);

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

  const scrollHandler = useCallback(() => {
    openPositionsRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <PageHead
        pageTitle="Career | Instill AI"
        pageDescription="We're on a mission to make Vision Al highly accessbile to everyone. Join us and make a dent in the universe!"
      />
      <div className="flex flex-col bg-instillGray95">
        <CareerHero
          viewJobsScrollHandler={scrollHandler}
          styleName="max-w-[1440px] md:w-10/12 md:mx-auto pt-[100px] lg:pt-[180px] pb-10"
        />
        <CareerGeneralIntro styleName="max-w-[1440px] md:w-10/12 md:mx-auto" />
        <div className="flex" ref={openPositionsRef}>
          {loadOpenPositions && (
            <CareerOpenPositionsSection
              styleName="mb-[100px]"
              positions={positions}
            />
          )}
        </div>
        <div className="flex" ref={stayInTheLoopRef}>
          {loadStayInTheLoop && (
            <StayInTheLoopBlock styleName="px-4 md:px-0 max-w-[1440px] md:w-10/12 md:mx-auto mb-20" />
          )}
        </div>
      </div>
    </>
  );
};

CareerPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPage;
