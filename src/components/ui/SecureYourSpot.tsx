import cn from "clsx";
import Image from "next/image";

import { CommonCtaButton } from "./CommonCtaButton";

export type SecureYourSpotProps = {
  marginBottom?: string;
};

export const SecureYourSpot = ({ marginBottom }: SecureYourSpotProps) => {
  return (
    <div className={cn("flex flex-col py-20", marginBottom)}>
      <div
        className={cn(
          "mb-10 grid grid-cols-1 gap-y-10 gap-x-6 xl:mb-[100px] xl:grid-cols-2 xl:gap-y-0"
        )}
      >
        <div className="mx-auto flex xl:col-start-2 xl:mx-0">
          <Image
            src="/images/alpha-badge.svg"
            alt="instill ai alpha testing badge"
            width={355}
            height={146}
            sizes="355px"
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col xl:row-start-1">
          <div className="flex flex-col">
            <h3 className="mb-2.5 text-left font-sans text-2xl font-medium text-instillGrey90">
              Secure Your Spot
            </h3>
            <p className="text-left font-sans text-lg font-normal text-instillGrey70">
              We&#39;re now in private alpha. Join as a design partner to adopt
              AI for unstructured data in your company.
            </p>
          </div>
        </div>
      </div>
      <CommonCtaButton
        position="mr-auto"
        withArrow={false}
        text="Get Early Access"
        link="/get-access"
      />
    </div>
  );
};
