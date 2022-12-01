import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { PositionDetails } from "@/components/career";

import {
  BackToPreviousPageLink,
  ContentContainer,
  PageBase,
  PageHead,
  StayInTheLoopProps,
} from "@/components/ui";

import { PositionInfo } from "@/types/instill";
import {
  ClickUpTask,
  getClickUpTaskQuery,
  listClickUpTasksInListQuery,
  transformClickUpTaskToPositionDetails,
} from "@/lib/click-up";
import { useInView } from "react-intersection-observer";

const StayInTheLoop = dynamic<StayInTheLoopProps>(() =>
  import("@/components/ui").then((mod) => mod.StayInTheLoop)
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
      revalidate: 10,
    };
  }

  const taskId = params.slug.toString().split("-")[0];

  try {
    const task = await getClickUpTaskQuery(taskId);

    if (task.status.status !== "Open") {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
        revalidate: 10,
      };
    }

    const positionDetails = transformClickUpTaskToPositionDetails(task);

    return {
      props: {
        position: positionDetails,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10,
    };
  } catch (err) {
    console.error(
      "Something went wrong when fetch the open position detail",
      err
    );
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
      revalidate: 10,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  let tasks: ClickUpTask[];
  let paths = [];

  try {
    tasks = await listClickUpTasksInListQuery("175663624");

    for (const task of tasks) {
      if (task.status.status === "Open") {
        const position = transformClickUpTaskToPositionDetails(task);
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
  const [stayInTheLoopRef, stayInTheLoopIsInView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <PageHead
        pageTitle={`${position.name} | Instill AI`}
        pageDescription="We're on a mission to make Vision Al highly accessbile to everyone. Join us and make a dent in the universe!"
        pageType="main"
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <div className="my-10 flex px-4 xl:px-0">
          <BackToPreviousPageLink url="/career" />
        </div>
        <PositionDetails position={position} marginBottom="mb-20 xl:mb-40" />
        <div className="flex px-4" ref={stayInTheLoopRef}>
          {stayInTheLoopIsInView && <StayInTheLoop />}
        </div>
      </ContentContainer>
    </>
  );
};

CareerPositionPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPositionPage;
