import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import * as React from "react";
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
import { PinIcon } from "@instill-ai/design-system";
import { PositionDescription } from "@/components/career/PositionDetails/PositionDescription";
import { NextPageWithLayout } from "../_app";

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
  const paths = [];

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

const CareerPositionPage: NextPageWithLayout<CareerPositionPageProps> = ({
  position,
}) => {
  const router = useRouter();

  if (!position) {
    router.push("/404");
  }

  // lazy load stayInTheLoop
  const [stayInTheLoopRef, stayInTheLoopIsInView] = useInView({
    triggerOnce: true,
  });

  return (
    <React.Fragment>
      <PageHead
        pageTitle={`${position.name} | Instill AI`}
        pageDescription="We're on a mission to make Al highly accessible to everyone. Join us and make a dent in the universe!"
        pageType="main"
        additionMeta={null}
        currentArticleMeta={null}
        commitMeta={null}
        jsonLd={null}
      />
      <ContentContainer margin="mt-[46px]" contentMaxWidth="max-w-[1127px]">
        <BackToPreviousPageLink url="/career" label="Back" />
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-center">
            <h1 className="text-center font-sans text-[42px] font-bold tracking-[-1.12px] text-black xl:text-[56px]">
              {position.name}
            </h1>
          </div>
          <div className="flex flex-row gap-x-5">
            <div className="xl:w-1/4"></div>
            <div className="w-1/2 space-y-2 xl:w-1/4">
              <div className="flex justify-center">
                <PinIcon
                  width="w-6"
                  height="h-6"
                  color="fill-instillGrey90"
                  position="my-auto"
                />
              </div>
              <div className="flex justify-center">
                <p className="font-sans text-[16px] font-normal leading-5 text-[#475467]">
                  {position.location}
                </p>
              </div>
            </div>
            <div className="w-1/2 space-y-2 xl:w-1/4">
              <div className="flex justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6426 10.8496H3.64258M16.6426 2.84961V6.84961M8.64258 2.84961V6.84961M9.64258 16.8496L11.6426 18.8496L16.1426 14.3496M8.44258 22.8496H16.8426C18.5227 22.8496 19.3628 22.8496 20.0045 22.5226C20.569 22.235 21.028 21.7761 21.3156 21.2116C21.6426 20.5698 21.6426 19.7298 21.6426 18.0496V9.64961C21.6426 7.96945 21.6426 7.12937 21.3156 6.48764C21.028 5.92315 20.569 5.46421 20.0045 5.17659C19.3628 4.84961 18.5227 4.84961 16.8426 4.84961H8.44258C6.76242 4.84961 5.92234 4.84961 5.28061 5.17659C4.71612 5.46421 4.25718 5.92315 3.96956 6.48764C3.64258 7.12937 3.64258 7.96945 3.64258 9.64961V18.0496C3.64258 19.7298 3.64258 20.5698 3.96956 21.2116C4.25718 21.7761 4.71612 22.235 5.28061 22.5226C5.92234 22.8496 6.76242 22.8496 8.44258 22.8496Z"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-center">
                <p className="font-sans text-[16px] font-normal leading-5 text-[#475467]">
                  {position.workType}
                </p>
              </div>
            </div>
            <div className="xl:w-1/4"></div>
          </div>
          <div className="flex flex-row gap-x-5">
            <div className="xl:w-1/4"></div>
            <div className="w-1/2 space-y-2 xl:w-1/4">
              <div className="flex justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.64258 11.8496V15.8496M18.6426 9.84961V13.8496M17.6426 4.84961C20.0913 4.84961 21.4157 5.22437 22.0747 5.51505C22.1625 5.55376 22.2063 5.57312 22.333 5.69398C22.4089 5.76643 22.5475 5.979 22.5831 6.0777C22.6426 6.24235 22.6426 6.33235 22.6426 6.51235V17.2608C22.6426 18.1695 22.6426 18.6239 22.5063 18.8575C22.3677 19.095 22.234 19.2055 21.9745 19.2968C21.7194 19.3866 21.2045 19.2876 20.1748 19.0898C19.454 18.9513 18.5991 18.8496 17.6426 18.8496C14.6426 18.8496 11.6426 20.8496 7.64258 20.8496C5.19387 20.8496 3.86944 20.4748 3.21046 20.1842C3.1227 20.1455 3.07882 20.1261 2.95218 20.0052C2.87626 19.9328 2.7377 19.7202 2.70205 19.6215C2.64258 19.4569 2.64258 19.3669 2.64258 19.1869L2.64258 8.43846C2.64258 7.5297 2.64258 7.07531 2.77886 6.84175C2.91748 6.60417 3.05117 6.49373 3.31064 6.40242C3.56571 6.31266 4.08061 6.41159 5.11041 6.60946C5.8312 6.74795 6.68606 6.84961 7.64258 6.84961C10.6426 6.84961 13.6426 4.84961 17.6426 4.84961ZM15.1426 12.8496C15.1426 14.2303 14.0233 15.3496 12.6426 15.3496C11.2619 15.3496 10.1426 14.2303 10.1426 12.8496C10.1426 11.4689 11.2619 10.3496 12.6426 10.3496C14.0233 10.3496 15.1426 11.4689 15.1426 12.8496Z"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-center">
                <p className="text-center font-sans text-[16px] font-normal leading-5 text-[#475467]">
                  {position.packageUK}
                </p>
              </div>
              <div className="text-center">
                <p className="text-center font-sans text-[16px] font-normal leading-5 text-[#8C8C8C]">
                  {position.packageTW}, or other locations based on the local
                  living cost
                </p>
              </div>
            </div>
            <div className="w-1/2 space-y-2 xl:w-1/4">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6426 17.8496C12.6426 20.611 14.8812 22.8496 17.6426 22.8496C20.404 22.8496 22.6426 20.611 22.6426 17.8496C22.6426 15.0882 20.404 12.8496 17.6426 12.8496C14.8812 12.8496 12.6426 15.0882 12.6426 17.8496ZM12.6426 17.8496C12.6426 16.7238 13.0147 15.6849 13.6426 14.8491V5.84961M12.6426 17.8496C12.6426 18.675 12.8426 19.4536 13.1967 20.1397C12.3542 20.8514 10.4084 21.3496 8.14258 21.3496C5.10501 21.3496 2.64258 20.4542 2.64258 19.3496V5.84961M13.6426 5.84961C13.6426 6.95418 11.1801 7.84961 8.14258 7.84961C5.10501 7.84961 2.64258 6.95418 2.64258 5.84961M13.6426 5.84961C13.6426 4.74504 11.1801 3.84961 8.14258 3.84961C5.10501 3.84961 2.64258 4.74504 2.64258 5.84961M2.64258 14.8496C2.64258 15.9542 5.10501 16.8496 8.14258 16.8496C10.3316 16.8496 12.2219 16.3846 13.1072 15.7114M13.6426 10.3496C13.6426 11.4542 11.1801 12.3496 8.14258 12.3496C5.10501 12.3496 2.64258 11.4542 2.64258 10.3496"
                      stroke="black"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex justify-center">
                  <p className="font-sans text-[16px] font-normal leading-5 text-[#475467]">
                    Stock options:{" "}
                  </p>
                </div>
                <div className="flex justify-center">
                  <p className="font-sans text-[16px] font-normal leading-5 text-[#475467]">
                    {position.stockOptions} Equity
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4"></div>
          </div>
        </div>
      </ContentContainer>

      <div
        style={{
          backgroundImage: 'url("/images/career/bg-2.svg")',
          backgroundPosition: "top right",
          // backgroundSize: 415,
        }}
        className="bg-no-repeat pt-[56px]"
      >
        <ContentContainer margin="mt-0" contentMaxWidth="max-w-[1127px]">
          <PositionDescription
            padding="px-4 mb-16 shadow-lg rounded-sm"
            width="xl:w-full"
            description={position.description}
          />
        </ContentContainer>
      </div>
    </React.Fragment>
  );
};

CareerPositionPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPositionPage;
