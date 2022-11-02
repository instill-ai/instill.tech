import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

import { useOnScreen } from "../hooks/useOnScreen";
import { MemberDetails } from "@/types/instill";
import {
  AboutHero,
  OurMembers,
  OurCompany,
  OurValue,
} from "@/components/about";
import {
  ContentContainer,
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
  const secureYourSpotRef = useRef<HTMLDivElement>();
  const [loadSecureYourSpot, setLoadSecureYourSpot] = useState(false);
  const secureYourSpotOnScreen = useOnScreen(
    secureYourSpotRef,
    !loadSecureYourSpot,
    "100px"
  );

  useEffect(() => {
    if (!loadSecureYourSpot && secureYourSpotOnScreen) {
      setLoadSecureYourSpot(true);
    }
  }, [loadSecureYourSpot, secureYourSpotOnScreen]);

  // Lazy loading StayInTheLoop
  const stayInTheLoopRef = useRef<HTMLDivElement>();
  const [loadStayInTheLoop, setLoadStayInTheLoop] = useState(false);
  const stayInTheLoopOnScreen = useOnScreen(
    secureYourSpotRef,
    !loadStayInTheLoop,
    "100px"
  );

  useEffect(() => {
    if (!loadStayInTheLoop && stayInTheLoopOnScreen) {
      setLoadStayInTheLoop(true);
    }
  }, [loadStayInTheLoop, stayInTheLoopOnScreen]);

  return (
    <>
      <PageHead
        pageTitle="About us | Instill AI"
        pageDescription="Instill AI, founded in 2020 (June 11th 2020, to be more specific), provides no-/low-code tools to convert unstructured visual data to meaningful structured representations."
        pageType="main"
      />
      <div className="mx-auto mb-[120px] mt-[100px] flex max-w-[1127px] flex-col xl:mt-40">
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
      <div className="mx-auto mb-20 max-w-[1127px] px-4 xl:mb-40 xl:px-0">
        <div className="mb-[120px]" ref={secureYourSpotRef}>
          {loadSecureYourSpot && <SecureYourSpot />}
        </div>
        <div ref={stayInTheLoopRef}>
          {loadStayInTheLoop && <StayInTheLoop />}
        </div>
      </div>
    </>
  );
};

AboutPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default AboutPage;
