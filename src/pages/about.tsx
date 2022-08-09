import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

import { useOnScreen } from "../hooks/useOnScreen";
import { MemberDetails } from "@/types/instill";
import { OurMembers } from "@/components/about";
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

export const getStaticProps: GetStaticProps = async () => {
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
      />
      <ContentContainer contentMaxWidth="max-w-[1127px]">
        <div className="mx-auto flex w-full flex-col">
          <div className="flex w-full pt-[87px] pb-[152px] sm:h-[584px] sm:py-0">
            <h1 className="instill-text-h1 m-auto max-w-[934px] text-center text-instillGrey05">
              Make Vision AI Accessible to Everyone
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
            <div className="flex flex-col gap-y-5 rounded-[1px] bg-white p-10">
              <h2 className="instill-text-h2 mb-1 text-instillGrey95">
                Our Company
              </h2>
              <p className="instill-text-body text-instillGrey95">
                Instill AI, founded in 2020 (June 11th 2020, to be more
                specific), provides no-/low-code tools to convert unstructured
                visual data to meaningful structured representations. Users can
                integrate our service into their data stack, and start tapping
                into the wealth of their visual data and benefit from Vision AI
                in a snap.
              </p>
              <p className="instill-text-body text-instillGrey95">
                We are a small and ambitious team of passionate
                engineers/researchers sharing an unconventional culture fused by
                DevOps, MLOps and academic research lab. We are hands-on and
                love to automate everything. We care about our products and
                deliver to the highest standard.
              </p>
            </div>
            <div className="flex flex-col gap-y-5 rounded-[1px] bg-white p-10">
              <h2 className="instill-text-h2 text-instillGrey95">Our Value</h2>
              <div className="flex flex-col">
                <h3 className="instill-text-h3 text-instillGrey95">
                  User obsession
                </h3>
                <p className="instill-text-body text-instillGrey95">
                  We succeed only when our users succeed. Learning what can
                  really help our users and delivering the value they need will
                  always be Instill&#39;s highest interest.
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="instill-text-h3 text-instillGrey95">
                  High-performing company with shared values
                </h3>
                <p className="instill-text-body text-instillGrey95">
                  We always deliver more than expected. To achieve that, we are
                  the optimisers obsessively chasing intrinsic efficiency and
                  effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
        <OurMembers members={members} marginBottom="mb-10" />
        <div ref={secureYourSpotRef}>
          {loadSecureYourSpot && (
            <SecureYourSpot bgColor="black" layout="main" />
          )}
        </div>
        <div className="mb-20" ref={stayInTheLoopRef}>
          {loadStayInTheLoop && <StayInTheLoop />}
        </div>
      </ContentContainer>
    </>
  );
};

AboutPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default AboutPage;
