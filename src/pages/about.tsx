import React, { FC, ReactElement } from "react";
import { GetStaticProps } from "next";
import { MemberDetails } from "@/types/instill";
import {
  AboutHero,
  Company,
  Mission,
  OurCoreValues,
  OurPartner,
  Teams,
} from "@/components/about";
import { ContentContainer, PageBase, PageHead } from "@/components/ui";
import {
  ClickUpTask,
  listClickUpTasksInListQuery,
  transformClickUpTaskToMemberDetails,
} from "@/lib/click-up";

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
  return (
    <React.Fragment>
      <PageHead
        pageType="main"
        pageTitle="About us | Instill AI"
        pageDescription="Instill AI, founded in 2020 (June 11th 2020, to be more specific), provides no-/low-code tools to convert unstructured data to meaningful data representations."
        additionMeta={null}
        commitMeta={null}
        currentArticleMeta={null}
        jsonLd={null}
      />
      <ContentContainer
        margin="my-[120px] xl:my-40"
        contentMaxWidth="max-w-[1127px]"
      >
        <div className="mb-0 p-2 xl:mb-40 xl:p-0">
          <AboutHero />
        </div>

        <Mission />
        <Company />
        <OurPartner />
        <OurCoreValues />
        <Teams />
      </ContentContainer>
    </React.Fragment>
  );
};

AboutPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default AboutPage;
