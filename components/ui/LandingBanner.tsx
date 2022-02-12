import Image from "next/image";
import { FC } from "react";
import { LandingBannerDownSvg } from "./svgs/LandingBannerDownSvg";
import { LandingBannerTopSvg } from "./svgs/LandingBannerTopSvg";

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
        <LandingBannerTopSvg styleName="w-[175px] xs:w-[291px] h-[198px] xs:h-[330px] mx-auto translate-y-6 xs:translate-y-10 z-50" />
        <div className="relative w-[90px] xs:w-[150px] h-[79px] xs:h-[131px] mx-auto z-30">
          <Image
            src="/gifs/landing-banner-kernel.gif"
            objectFit="contain"
            layout="fill"
            alt="landing-banner-kernel-animation"
          />
        </div>
        <LandingBannerDownSvg styleName="w-[272px] xs:w-[442px] h-[200px] xs:h-[334px] mx-auto -translate-y-6 xs:-translate-y-10" />
      </div>
      <div className="lg:py-10 lg:h-[795px] md:my-auto hidden lg:grid lg:grid-rows-3">
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
