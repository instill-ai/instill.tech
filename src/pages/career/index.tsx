import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { FC, ReactElement, useCallback, useRef } from "react";

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
import { Nullable, PositionInfo } from "@/types/instill";
import {
  ClickUpTask,
  listClickUpTasksInListQuery,
  transformClickUpTaskToPositionDetails,
} from "@/lib/click-up";
import { useInstillAICtx } from "@/contexts/InstillAIContext";
import { getElementPosition } from "@instill-ai/design-system";
import { useInView } from "react-intersection-observer";

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
  const positions: PositionInfo[] = [];

  try {
    tasks = await listClickUpTasksInListQuery("175663624");
    for (const task of tasks) {
      if (task.status.status === "Open") {
        const position = transformClickUpTaskToPositionDetails(task);
        positions.push(position);
      }
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
  const positionListRef = useRef<Nullable<HTMLDivElement>>(null);
  const [positionListInViewRef, positionListInView] = useInView({
    triggerOnce: true,
  });

  // lazy load stayInTheLoop
  const [stayInTheLoopInViewRef, stayInTheLoopInView] = useInView({
    triggerOnce: true,
  });

  const { enableAnnouncementBar } = useInstillAICtx();

  const scrollHandler = useCallback(() => {
    if (!window || !positionListRef.current) return;

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
        pageType="main"
        pageTitle="Career | Instill AI"
        pageDescription="We're on a mission to make Al highly accessible to everyone. Join us and make a dent in the universe!"
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
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
        <div
          ref={(el) => {
            positionListInViewRef(el);
            positionListRef.current = el;
          }}
          className={positionListInView ? "" : "mb-20"}
        >
          {positionListInView && (
            <PositionList marginBottom="mb-20 xl:mb-40" positions={positions} />
          )}
        </div>
        <div ref={stayInTheLoopInViewRef}>
          {stayInTheLoopInView && <StayInTheLoop />}
        </div>
      </ContentContainer>
    </>
  );
};

CareerPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPage;
