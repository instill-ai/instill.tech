import { FC } from "react";
import { GetEarlyAccessButton } from "../buttons/GetEarlyAccessButton";

interface Props {}

export const SecureYourSpotBlock: FC<Props> = () => {
  return (
    <div className="flex bg-white max-width-[936px] p-10">
      <div className="flex flex-col-reverse gap-y-[30px] sm:flex-row sm:gap-x-6">
        <div className="flex flex-col">
          <div className="flex flex-col mb-20 sm:mb-[111px]">
            <h3 className="instill-text-h3 text-instillGray95 mb-2.5">
              Secure Your Spot
            </h3>
            <p className="instill-text-body text-instillGray95">
              We&#39;re now in private alpha. Join and see first-hand how
              Instill AI can help adopt Vision AI in your company.
            </p>
          </div>
          <GetEarlyAccessButton />
        </div>
      </div>
    </div>
  );
};
