import * as React from "react";

export const Company = () => {
  return (
    <div className="row mb-12 flex w-full flex-col">
      <div className="w-full text-center">
        <p className="mb-6 font-sans text-[32px] font-medium text-black">
          Company
        </p>
      </div>
      <div className="rounded-sm bg-[#FFFFFF99] p-[30px] shadow-lg">
        <p className="font-mono text-[16px] font-normal leading-6 text-[#1D2433]">
          Instill AI was founded with the vision of easing the difficulties of
          AI product development, driven by a shared understanding of the
          complexities involved in AI development. The company recognizes that
          unstructured data ETL is crucial but often overlooked in the modern
          data stack. Despite many companies claiming to be data-driven, they
          usually focus on structured data, neglecting the fact that 80% of the
          world&apos;s data is unstructured and challenging to analyze. This gap
          in capability is precisely where Instill AI comes in, as many
          companies lack the knowledge or resources to effectively manage
          unstructured data. In August 2022, Instill AI achieved a significant
          milestone by introducing the{" "}
          <a
            href="https://github.com/instill-ai/instill-core"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Instill Core
          </a>
          , an open-source, modularized ETL infrastructure specifically designed
          to address the challenges of unstructured data. This launch reinforced
          the company&apos;s dedication to democratizing AI access and
          exemplified their ongoing commitment to overcoming obstacles in AI
          development for the benefit of all.
        </p>
      </div>
    </div>
  );
};
