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

import { PageBase, PageHead, StayInTheLoopProps } from "@/components/ui";
import {
  CareerGeneralIntro,
  CareerHero,
  PositionListProps,
} from "@/components/career";
import { useOnScreen } from "@/hooks/useOnScreen";
import { PositionInfo } from "@/types/instill";
import {
  ClickUpTask,
  listClickUpTasksInListQuery,
  transformClickUpTaskToPositionDetails,
} from "@/lib/click-up";

const PositionList = dynamic<PositionListProps>(() =>
  import("@/components/career").then((mod) => mod.PositionList)
);

const StayInTheLoop = dynamic<StayInTheLoopProps>(() =>
  import("@/components/ui").then((mod) => mod.StayInTheLoop)
);

type CareerPageProps = {
  positions: PositionInfo[];
};

type GetLayOutProps = {
  page: ReactElement;
};

export const getStaticProps: GetStaticProps<CareerPageProps> = async () => {
  let tasks: ClickUpTask[];
  let positions: PositionInfo[] = [];

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
  const positionListRef = useRef<HTMLDivElement>();
  const [loadPositionList, setLoadPositionList] = useState(false);
  const positionListIsOnscreen = useOnScreen(
    positionListRef,
    !loadPositionList
  );

  useEffect(() => {
    if (positionListIsOnscreen && !loadPositionList) {
      setLoadPositionList(true);
    }
  }, [positionListIsOnscreen, loadPositionList]);

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
    positionListRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <PageHead
        pageTitle="Career | Instill AI"
        pageDescription="We're on a mission to make Vision Al highly accessbile to everyone. Join us and make a dent in the universe!"
        pageType="main"
      />
      <div className="mx-auto flex max-w-[1127px] flex-col xl:mt-40">
        <div className="p-10 xl:p-0">
          <CareerHero
            viewJobsScrollHandler={scrollHandler}
            marginBottom="md:mb-20"
          />
        </div>

        <div className="mb-10 px-4 xl:px-0">
          <CareerGeneralIntro />
        </div>

        <div className="mb-20 flex w-full xl:mb-40" ref={positionListRef}>
          {loadPositionList && <PositionList positions={positions} />}
        </div>
        <div
          className="mb-20 flex px-4 xl:mb-40 xl:px-0"
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
