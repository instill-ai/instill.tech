import Image from "next/image";
import { FC } from "react";
import { LandingBannerDownSvg } from "./svgs/LandingBannerDownSvg";
import { LandingBannerKernelAnimateSvg } from "./svgs/LandingBannerKernelAnimateSvg";
import { LandingBannerTopSvg } from "./svgs/LandingBannerTopSvg";
import { MagicFlowFull } from "./svgs/MagicFlowFull";

interface Props {}

type BannerCopy = {
  id: string;
  title: string;
  description: string;
};

export const LandingBanner: FC<Props> = () => {
  const bannerCopy: BannerCopy[] = [
    {
      id: "banner-copy-1",
      title: "Unstructured Visual Data",
      description: "Ingest image and video data with pre-built data connectors",
    },
    {
      id: "banner-copy-2",
      title: "Vision AI Processor",
      description:
        "Transform unstructured data into structured insights with ready-to-use Vision AI models",
    },
    {
      id: "banner-copy-3",
      title: "Structured Data",
      description:
        "Send structured insights to data warehouses and applications for future analysis or workflow automation",
    },
  ];

  return (
    <div
      id="landing-page-banner"
      className="grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] lg:w-11/12 lg:mx-auto mb-8"
    >
      <div className="flex flex-col">
        <MagicFlowFull styleName="mx-auto w-[446px] h-[1021px]" />
      </div>
      <div className="lg:h-[900px] md:my-auto hidden lg:grid lg:grid-rows-3">
        {bannerCopy.map((copy) => (
          <div
            key={copy.id}
            className="flex flex-col pt-5 pb-5 pr-5 gap-y-5 justify-center lmax-w-[456px]"
          >
            <h2 className="text-instillGray05 instill-text-h2">{copy.title}</h2>
            <p className="text-instillGray05 instill-text-body">
              {copy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
