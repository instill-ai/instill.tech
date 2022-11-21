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
  PositionListProps,
} from "@/components/career";
import { useOnScreen } from "@/hooks/useOnScreen";
import { PositionInfo } from "@/types/instill";
import {
  ClickUpTask,
  listClickUpTasksInListQuery,
  transformClickUpTaskToPositionDetails,
} from "@/lib/click-up";
import { useAnnouncementBarCtx } from "@/contexts/AnnouncementBarContext";
import { getElementPosition } from "@instill-ai/design-system";

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
      if (position.status === "open") positions.push(position);
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

  const { enableAnnouncementBar } = useAnnouncementBarCtx();

  const scrollHandler = useCallback(() => {
    if (!window) return;
    const positionListDimension = getElementPosition(positionListRef.current);
    const navbarHeight = enableAnnouncementBar ? 128 : 84;

    window.scrollTo({
      top: positionListDimension.y - navbarHeight,
      behavior: "smooth",
    });
  }, [enableAnnouncementBar]);

  return (
    <>
      <PageHead
        pageTitle="Career | Instill AI"
        pageDescription="We're on a mission to make Vision Al highly accessbile to everyone. Join us and make a dent in the universe!"
        pageType="main"
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <CareerHero
          viewJobsScrollHandler={scrollHandler}
          marginBottom="mb-[120px] xl:mb-40"
        />
        <CareerGeneralIntro marginBottom="mb-20 xl:mb-40" />
        <div ref={positionListRef}>
          {loadPositionList && (
            <PositionList marginBottom="mb-20 xl:mb-40" positions={positions} />
          )}
        </div>
        <div ref={stayInTheLoopRef}>
          {loadStayInTheLoop && <StayInTheLoop />}
        </div>
      </ContentContainer>
    </>
  );
};

CareerPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPage;
