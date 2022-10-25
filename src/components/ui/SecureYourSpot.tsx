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
    <div
      className={cn(
        "flex flex-col rounded-[1px] px-10 py-[100px]",
        marginBottom
      )}
    >
      <div className={cn("mb-20 grid grid-cols-1 gap-x-6 md:grid-cols-2")}>
        <div className="mx-auto flex md:col-start-2 md:mx-0">
          <Image
            src="/images/alpha-badge.svg"
            alt="instill ai alpha testing badge"
            width={355}
            height={146}
            sizes="355px"
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col pt-20 md:row-start-1 md:pt-0">
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
