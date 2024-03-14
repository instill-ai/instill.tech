import { Icons, SolidButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type ExploreInstillHubProps = {
  position?: string;
};

export const ExploreInstillHub = ({ position }: ExploreInstillHubProps) => {
  const router = useRouter();
  return (
    <SolidButton
      type="button"
      color="primaryLight"
      itemGapX="gap-x-2.5"
      padding="pl-[15px] pr-[15px] py-[7px]"
      position={position}
      hoveredShadow="hover:shadow-instill-solid-5"
      onClickHandler={() => router.push("https://www.instill.tech")}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row gap-x-3 text-left">
          <p className="font-['IBM Plex Sans'] my-auto text-[24px] font-normal leading-7">
            Explore on Instill Hub
          </p>
          <div className="ml-auto">
            <Icons.ArrowRight className="my-auto h-7 w-7 stroke-[#23C4E7]" />
          </div>
        </div>
      </div>
    </SolidButton>
  );
};
