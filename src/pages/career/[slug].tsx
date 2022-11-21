import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { PositionDetails } from "@/components/career";

import {
  BackToPreviousPageLink,
  PageBase,
  PageHead,
  StayInTheLoopProps,
} from "@/components/ui";

import { PositionInfo } from "@/types/instill";
import { useOnScreen } from "../../hooks/useOnScreen";
import {
  ClickUpTask,
  getClickUpTaskQuery,
  listClickUpTasksInListQuery,
  transformClickUpTaskToPositionDetails,
} from "@/lib/click-up";
import { handle } from "@/lib/utils";

const StayInTheLoop = dynamic<StayInTheLoopProps>(() =>
  import("@/components/ui").then((mod) => mod.StayInTheLoop)
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const taskId = params.slug.toString().split("-")[0];

  const [error, task] = await handle(getClickUpTaskQuery(taskId));

  if (error) {
    console.error(
      "Something went wrong when fetch the open position detail",
      error
    );
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
      revalidate: 10,
    };
  }

  const positionDetails = transformClickUpTaskToPositionDetails(task);

  if (positionDetails.status === "close") {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
      revalidate: 10,
    };
  }

  return {
    props: {
      position: positionDetails,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let tasks: ClickUpTask[];
  let paths = [];

  try {
    tasks = await listClickUpTasksInListQuery("175663624");

    for (const task of tasks) {
      const position = transformClickUpTaskToPositionDetails(task);
      if (position.status === "open") {
        paths.push({
          params: {
            slug: `${position.id}-${position.slug}`,
          },
        });
      }
    }
  } catch (err) {
    console.error(
      "Something went wrong when retrieve open position on Clickup",
      err
    );
  }

  // We'll pre-render only these paths at build time. { fallback: blocking }
  // will server-render pages on-demand if the path doesn't exist.
  return {
    paths,
    fallback: "blocking",
  };
};

export type CareerPositionPageProps = {
  position: PositionInfo;
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
        pageType="main"
      />
      <div className="mx-auto flex max-w-[1127px] flex-col">
        <div className="my-10 flex px-4 xl:px-0">
          <BackToPreviousPageLink url="/career" />
        </div>
        <PositionDetails position={position} marginBottom="mb-20 xl:mb-40" />
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

CareerPositionPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPositionPage;
