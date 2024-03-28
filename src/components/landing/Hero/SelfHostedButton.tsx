import { Icons, SolidButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type SelfHostedButtonProps = {
  position?: string;
};

export const SelfHostedButton = ({ position }: SelfHostedButtonProps) => {
  const router = useRouter();
  return (
    <SolidButton
      type="button"
      color="white"
      itemGapX="gap-x-2.5"
      padding="pl-[15px] pr-[15px] py-[7px]"
      position={position}
      hoveredShadow="hover:shadow-instill-solid-5-grey"
      onClickHandler={() => router.push("https://www.instill.tech")}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row gap-x-3 text-left">
          <p className="my-auto font-sans text-[16px] font-normal leading-7">
            Self Hosted
          </p>
          <div className="my-auto ml-auto">
            <Icons.ArrowRight className="h-4 w-4 stroke-[#1D2433CC]" />
          </div>
        </div>
      </div>
    </SolidButton>
  );
};
