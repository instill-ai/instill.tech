import { FC } from "react";
import { InstillCloudBannerGSAP } from "./svgs/animations/InstillCloudBannerGSAP";

interface Props {}

export const InstillCloudSection: FC<Props> = () => {
  return (
    <div className="flex flex-col">
      {/* <StickyScrollLayout
        targetChildren={
          <InstillCloudBanner styleName="w-full mx-auto max:w-[1440px] max:h-[997px] -z-50" />
        }
        spanRatio={0.5}
        height={3000}
      >
        <div className="flex flex-col max-w-[889px] md:w-10/12 md:mx-auto bg-instillGray95 p-10">
          <p className="text-center instill-text-body text-instillBlue30 mb-5">
            INSTILL CLOUD
          </p>
          <h2 className="text-center instill-text-h2 text-instillGray05 mb-10">
            Visual Data Preparation without Managing Infrastructure
          </h2>
          <p className="text-center instill-text-body text-instillGray05 md:px-28">
            Instill Cloud provides production-ready visual data preparation
            services — hustle-free setup and Vision AI model serving with
            ready-to-use and custom models. We help you save your time and you
            focus on the core business.
          </p>
        </div>
      </StickyScrollLayout> */}
      <InstillCloudBannerGSAP />
    </div>
  );
};
