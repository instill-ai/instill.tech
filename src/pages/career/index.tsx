import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React, { FC, ReactElement, useCallback, useRef } from "react";

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
import {
  Button,
  Icons,
  PinIcon,
  Separator,
  getElementPosition,
} from "@instill-ai/design-system";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const PositionList = dynamic<PositionListProps>(() =>
  import("@/components/career").then((mod) => mod.PositionList)
);

const StayInTheLoop = dynamic<StayInTheLoopProps>(() =>
  import("@/components/landing/Community").then((mod) => mod.StayInTheLoop)
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
    <React.Fragment>
      <PageHead
        pageType="main"
        pageTitle="Career | Instill AI"
        pageDescription="We're on a mission to make Al highly accessible to everyone. Join us and make a dent in the universe!"
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />
      <ContentContainer margin="mt-[56px]" contentMaxWidth="max-w-[1127px]">
        <CareerHero />

        <div className="mt-[48px] flex justify-center">
          <p className="font-sans text-[36px] font-semibold leading-[30px] tracking-[-0.5px] text-[#001354]">
            Mission
          </p>
        </div>
      </ContentContainer>
      <div style={{ backgroundImage: 'url("/images/career/glow.png")' }}>
        <ContentContainer margin="my-0" contentMaxWidth="max-w-[1127px]">
          <div className="mb-10 mt-6 rounded-sm p-[30px] shadow-lg">
            <p className="mb-5 font-mono text-[16px] font-normal leading-6">
              We&apos;re looking for passionate and dedicated early members to
              build open-source and highest-quality products for solving a
              challenging issue in the modern data stack. You&apos;ll be joining
              the founding team to establish its strong foundation from the very
              beginning.
            </p>
            <p className="font-mono text-[16px] font-normal leading-6">
              This is a great opportunity for those who want to build their
              career with a fast-growing startup at zero to one stage. It is
              also a position for those who value learning for the long term
              above earning in the short term. Your colleagues are a bunch of
              super self-motivated AI missionaries and data tooling
              practitioners. You will impact the company direction and help
              Instill AI build its strong foundation and shape its open-source
              community.
            </p>
          </div>
        </ContentContainer>
      </div>

      <ContentContainer margin="my-0" contentMaxWidth="max-w-[1127px]">
        <div
          className="mt-6 flex flex-col gap-y-4"
          // style={{ backgroundImage: 'url("/images/career/grid.svg")' }}
        >
          <div className="flex justify-center">
            <Button
              variant="secondaryGrey"
              size="md"
              className="rounded-sm !py-1.5 shadow-lg"
            >
              Join us
            </Button>
          </div>
          <div className="flex justify-center">
            <p className="font-sans text-[36px] font-semibold leading-[30px] tracking-[-0.5px] text-[#001354]">
              Open Roles
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-[990px]">
              <p className="font-sans text-[20px] font-normal leading-[30px] text-[#010D3E]">
                We&apos;re on a mission to make Al highly accessible to
                everyone. Join us and make a dent in the universe!
              </p>
            </div>
          </div>
        </div>
      </ContentContainer>
      <div
        style={{
          backgroundImage: 'url("/images/career/bg.svg")',
          backgroundPosition: "right",
          backgroundSize: 415,
        }}
        className="bg-cover bg-no-repeat"
      >
        <ContentContainer margin="mb-[56px]" contentMaxWidth="max-w-[1127px]">
          <div className="mt-8 rounded-sm bg-[#FFFFFF99] px-4 pt-5 shadow-lg">
            <p className="px-4 font-sans text-[18px] font-semibold leading-[28px]">
              Openings
            </p>
            <Separator orientation="horizontal" className="mb-2 mt-5" />

            {positions.map((position, index) => (
              <React.Fragment key={position.slug}>
                <div className="flex flex-row">
                  <div className="w-[60%] px-6 py-4">
                    <Link
                      href={`/career/${position.id}-${position.slug}`}
                      className="flex flex-row gap-x-2"
                    >
                      <p className="my-auto text-[16px] font-semibold leading-4 text-semantic-accent-default">
                        {position.name}
                      </p>
                      <Icons.ArrowRight className="my-auto h-4 w-4 stroke-semantic-accent-default" />
                    </Link>
                  </div>
                  <div className="my-auto flex w-[25%] flex-row gap-x-3 px-6 py-4">
                    <PinIcon
                      width="w-6"
                      height="h-6"
                      color="fill-instillGrey90"
                      position="my-auto"
                    />

                    <p className="my-auto font-sans text-[14px] font-normal text-[#475467]">
                      {position.location}
                    </p>
                  </div>

                  <div className="my-auto flex w-[15%] flex-row gap-x-3 px-6 py-4">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10.3496H3M16 2.34961V6.34961M8 2.34961V6.34961M9 16.3496L11 18.3496L15.5 13.8496M7.8 22.3496H16.2C17.8802 22.3496 18.7202 22.3496 19.362 22.0226C19.9265 21.735 20.3854 21.2761 20.673 20.7116C21 20.0698 21 19.2298 21 17.5496V9.14961C21 7.46945 21 6.62937 20.673 5.98764C20.3854 5.42315 19.9265 4.96421 19.362 4.67659C18.7202 4.34961 17.8802 4.34961 16.2 4.34961H7.8C6.11984 4.34961 5.27976 4.34961 4.63803 4.67659C4.07354 4.96421 3.6146 5.42315 3.32698 5.98764C3 6.62937 3 7.46945 3 9.14961V17.5496C3 19.2298 3 20.0698 3.32698 20.7116C3.6146 21.2761 4.07354 21.735 4.63803 22.0226C5.27976 22.3496 6.11984 22.3496 7.8 22.3496Z"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p className="my-auto font-sans text-[14px] font-normal text-[#475467]">
                      {position.workType}
                    </p>
                  </div>
                </div>

                {index + 1 !== positions.length && (
                  <Separator orientation="horizontal" />
                )}
              </React.Fragment>
            ))}
          </div>
        </ContentContainer>
      </div>
    </React.Fragment>
  );
};

CareerPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default CareerPage;
