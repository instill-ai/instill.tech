import * as React from "react";
import {
  AboutHero,
  Company,
  Mission,
  OurCoreValues,
  OurPartner,
  Teams,
} from "@/components/about";
import { ContentContainer, PageBase, PageHead } from "@/components/ui";
import { NextPageWithLayout } from "./_app";

const AboutPage: NextPageWithLayout = () => {
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
      <ContentContainer margin="my-[56px]" contentMaxWidth="max-w-[1127px]">
        <AboutHero />
        <Mission />
      </ContentContainer>
      <div
        className="bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/about/bg-pipeline.svg")',
          backgroundSize: 900,
          backgroundPosition: "right",
        }}
      >
        <ContentContainer margin="mb-0" contentMaxWidth="max-w-[1127px]">
          <Company />
          <OurPartner />
          <OurCoreValues />
        </ContentContainer>
      </div>
      <div
        className="bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/about/bg-2.svg")',
          backgroundSize: 400,
          backgroundPosition: "bottom left",
        }}
      >
        <ContentContainer margin="mb-[56px]" contentMaxWidth="max-w-[1127px]">
          <Teams />
        </ContentContainer>
      </div>
    </React.Fragment>
  );
};

AboutPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default AboutPage;
