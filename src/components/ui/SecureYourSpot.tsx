import cn from "clsx";
import { GetEarlyAccessButton } from "@/components/ui";
import Image from "next/future/image";
import { SolidButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type SecureYourSpotProps = {
  marginBottom?: string;
};

const SecureYourSpot = ({ marginBottom }: SecureYourSpotProps) => {
  const router = useRouter();
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
              We&#39;re now in private alpha. Join and see first-hand how
              Instill AI can help adopt Vision AI in your company.
            </p>
          </div>
        </div>
      </div>
      <SolidButton
        type="button"
        color="primaryLight"
        padding="px-5 py-2.5"
        position="mr-auto"
        onClickHandler={() => router.push("/get-access")}
      >
        <p className="text-2xl font-normal">Get Early Access</p>
      </SolidButton>
    </div>
  );
};

export default SecureYourSpot;
