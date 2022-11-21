import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

import { MemberDetails } from "@/types/instill";
import {
  AboutHero,
  OurMembers,
  OurCompany,
  OurValue,
} from "@/components/about";
import {
  PageBase,
  PageHead,
  SecureYourSpotProps,
  StayInTheLoopProps,
} from "@/components/ui";
import {
  ClickUpTask,
  listClickUpTasksInListQuery,
  transformClickUpTaskToMemberDetails,
} from "@/lib/click-up";
import { useInView } from "react-intersection-observer";

const SecureYourSpot = dynamic<SecureYourSpotProps>(() =>
  import("@/components/ui").then((mod) => mod.SecureYourSpot)
);

const StayInTheLoop = dynamic<StayInTheLoopProps>(() =>
  import("@/components/ui").then((mod) => mod.StayInTheLoop)
);

type GetLayOutProps = {
  page: ReactElement;
};

type AboutPageProps = {
  members: MemberDetails[];
};

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  let tasks: ClickUpTask[];
  let members: MemberDetails[] = [];

  try {
    tasks = await listClickUpTasksInListQuery("181513244");
    tasks.forEach((task) => {
      members.push(transformClickUpTaskToMemberDetails(task));
    });
    members = members.sort((a, b) => a.order - b.order);
  } catch (err) {
    console.error("Something went wrong when retrieve member on Clickup", err);
  }

  return {
    props: {
      members,
    },

    // This page is using ISR
    revalidate: 10,
  };
};

const AboutPage: FC<AboutPageProps> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ members }) => {
  // Lazy loading SecureYourSpot
  const [secureYourSpotRef, secureYourSpotIsInView] = useInView({
    triggerOnce: true,
  });

  // Lazy loading StayInTheLoop
  const [stayInTheLoopRef, stayInTheLoopIsInView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <PageHead
        pageTitle="About us | Instill AI"
        pageDescription="Instill AI, founded in 2020 (June 11th 2020, to be more specific), provides no-/low-code tools to convert unstructured visual data to meaningful structured representations."
        pageType="main"
      />
      <div className="mx-auto my-[120px] flex max-w-[1127px] flex-col xl:my-40">
        <div className="mb-[100px] p-4 xl:mb-40 xl:p-0">
          <AboutHero />
        </div>

        <div className="px-4 xl:px-0">
          <OurCompany marginBottom="mb-[120px]" />
          <OurValue />
        </div>
      </div>
      <div className="bg-instillGrey90">
        <OurMembers
          width="mx-auto max-w-[1127px]"
          members={members}
          marginBottom="mb-10"
        />
      </div>
      <div className="mx-auto mb-[120px] max-w-[1127px] px-4 xl:mb-40 xl:px-0">
        <div className="mb-[120px]" ref={secureYourSpotRef}>
          {secureYourSpotIsInView && <SecureYourSpot />}
        </div>
        <div ref={stayInTheLoopRef}>
          {stayInTheLoopIsInView && <StayInTheLoop />}
        </div>
      </div>
    </>
  );
};

AboutPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default AboutPage;
