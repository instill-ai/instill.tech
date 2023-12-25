import { Icons, SolidButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type ConsoleCtaButtonProps = {
  position?: string;
};

export const ConsoleCtaButton = ({ position }: ConsoleCtaButtonProps) => {
  const router = useRouter();
  return (
    <SolidButton
      type="button"
      color="primaryLight"
      itemGapX="gap-x-2.5"
      padding="pl-[15px] pr-[15px] py-[7px]"
      position={position}
      hoveredShadow="hover:shadow-instill-solid-5"
      onClickHandler={() => router.push("https://console.instill.tech")}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row gap-x-3 text-left">
          <p className="my-auto font-sans text-[18px] font-normal leading-7">
            Start Building
          </p>
          <div className="ml-auto">
            <Icons.ArrowRight className="my-auto h-7 w-7 stroke-instillNeonBlue" />
          </div>
        </div>
      </div>
    </SolidButton>
  );
};
