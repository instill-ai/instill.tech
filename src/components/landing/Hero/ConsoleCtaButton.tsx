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
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row text-left uppercase">
          <p className="font-bold">Start Building</p>
          <div className="ml-auto">
            <Icons.ArrowRight className="my-auto h-7 w-7 stroke-[#23C4E7]" />
          </div>
        </div>
        <div className="font-['IBM Plex Mono'] mr-auto text-left text-xs font-normal ">
          Free, until you’re ready to upgrade
        </div>
      </div>
    </SolidButton>
  );
};
