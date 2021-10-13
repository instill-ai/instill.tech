import { FC } from "react";
import { GeneralLinkButton } from "../../ui/buttons/GeneralLinkButton";

interface Props {}

export const CareerMainPageContext: FC<Props> = () => {
  return (
    <div className="flex flex-col font-sans">
      <h1 className="text-4xl mb-2">Instill AI Careers</h1>
      <p className="text-lg mb-4">
        We&apos;re on a mission to make Vision AI highly accessible to everyone. Join us and make a
        dent in the universe!
      </p>
      <GeneralLinkButton href="#open-roles" title="View roles" styleName={"mb-24"} />
      <h2 className="text-3xl mb-4">Who We Are</h2>
      <p className="text-lg mb-4">
        We are a small and ambitious team of passionate engineers/researchers sharing an
        unconventional culture fused by DevOps, MLOps and academic research lab. We are hands-on and
        love to automate everything. We care about our products and deliver to the highest standard.
      </p>
      <p className="text-lg mb-4">
        Our private beta was launched in June 2021 and we are working closely with several our early
        adopters. The two co-founders are from academia (Imperial College London and University
        College London) with many years&apos; startup experience. You can find more about us on
        GitHub:
      </p>
      <div className="flex flex-row gap-x-6 mb-12">
        <GeneralLinkButton href="https://github.com/pinglin" title="Ping-Lin Chang" />
        <GeneralLinkButton href="https://github.com/xiaofei-du" title="Xiaofei Du" />
      </div>
      <h2 className="text-3xl mb-4">Who You Are</h2>
      <p className="text-lg mb-12">
        For us, the keys to success are genuine passion, startup spirit and shared vision. If you
        love building real-world products around computer vision and are willing to embrace risk,
        come and join us!
      </p>
      <h2 className="text-3xl mb-4" id="open-roles">
        Open roles
      </h2>
    </div>
  );
};
