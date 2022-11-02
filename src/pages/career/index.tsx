import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ContentContainer,
  PageBase,
  PageHead,
  StayInTheLoopProps,
} from "@/components/ui";
import {
  CareerGeneralIntro,
  CareerHero,
  CareerPositionListProps,
} from "@/components/career";
import { useOnScreen } from "@/hooks/useOnScreen";
import { PositionDetails } from "@/types/instill";
import {
  ClickUpTask,
  listClickUpTasksInListQuery,
  transformClickUpTaskToPositionDetails,
} from "@/lib/click-up";

const CareerPositionList = dynamic<CareerPositionListProps>(() =>
  import("@/components/career").then((mod) => mod.CareerPositionList)
);

const StayInTheLoop = dynamic<StayInTheLoopProps>(() =>
  import("@/components/ui").then((mod) => mod.StayInTheLoop)
);

type CareerPageProps = {
  content: string;
  positions: PositionDetails[];
};

type GetLayOutProps = {
  page: ReactElement;
};

export const getStaticProps: GetStaticProps = async () => {
  let tasks: ClickUpTask[];
  let positions: PositionDetails[] = [];

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

const CareerPage: FC<CareerPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ positions }) => {
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
        pageType="main"
      />
      <div className="mx-auto flex max-w-[1127px] flex-col">
        <CareerHero
          viewJobsScrollHandler={scrollHandler}
          marginBottom="md:mb-[150px]"
        />
        <CareerGeneralIntro />
        <div className="mb-20 flex w-full md:mb-40" ref={openPositionsRef}>
          {loadOpenPositions && <CareerPositionList positions={positions} />}
        </div>
        <div
          className="mb-20 flex px-4 md:mb-40 md:px-0"
          ref={stayInTheLoopRef}
        >
          {loadStayInTheLoop && <StayInTheLoop />}
        </div>
      </div>
    </>
  );
};

CareerPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPage;
