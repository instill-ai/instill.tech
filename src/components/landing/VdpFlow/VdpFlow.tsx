import Image from "next/future/image";
import { ReactElement } from "react";

import VdpFlowAnimation from "./VdpFlowAnimation";

type BannerCopy = {
  id: string;
  title: string;
  description: string;
  icon: ReactElement;
};

const VdpFlow = () => {
  const bannerCopy: BannerCopy[] = [
    {
      id: "banner-copy-1",
      title: "UNSTRUCTURED VISUAL DATA",
      description: "Ingest image and video data with pre-built data connectors",
      icon: (
        <Image
          src="/images/vdp-flow-source.svg"
          width={60}
          height={63}
          sizes="60px"
          alt="VDP flow source icon"
        />
      ),
    },
    {
      id: "banner-copy-2",
      title: "VISION AI PROCESSOR",
      description:
        "Transform unstructured data into structured insights with ready-to-use Vision AI models",

      icon: (
        <Image
          src="/images/vdp-flow-kernel.svg"
          width={65}
          height={42}
          sizes="65px"
          alt="VDP flow kernel icon"
        />
      ),
    },
    {
      id: "banner-copy-3",
      title: "STRUCTURED DATA",
      description:
        "Send structured insights to data warehouses and applications for future analysis or workflow automation",

      icon: (
        <Image
          src="/images/vdp-flow-destination.svg"
          width={60}
          height={63}
          sizes="63px"
          alt="VDP flow destination icon"
        />
      ),
    },
  ];

  return (
    <div
      id="landing-page-banner"
      className="grid h-full w-full grid-cols-1 lg:grid-cols-2"
    >
      <div className="flex h-full max-h-screen flex-col py-20">
        <VdpFlowAnimation styleName="h-full w-full mx-auto" />
      </div>
      <div className="hidden h-full max-h-screen py-5 md:my-auto lg:grid lg:grid-rows-3">
        {bannerCopy.map((copy) => (
          <div
            key={copy.id}
            className="flex h-full max-w-[456px] flex-col justify-center gap-y-5 pt-5 pb-5 pr-5"
          >
            <div>{copy.icon}</div>
            <h2 className="font-instill text-xl text-instillGrey05 tall:text-4xl short:text-2xl">
              {copy.title}
            </h2>
            <p className="instill-text-body text-instillGrey05">
              {copy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VdpFlow;
