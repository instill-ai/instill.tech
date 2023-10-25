import { GitHubIcon, OutlineButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type GitHubCtaButtonProps = {
  position?: string;
};

export const GitHubCtaButton = ({ position }: GitHubCtaButtonProps) => {
  const router = useRouter();
  return (
    <OutlineButton
      type="button"
      color="primaryLight"
      hoveredShadow="hover:shadow-instill-solid-5"
      startIcon={
        <GitHubIcon
          width="w-9"
          height="h-9"
          color="fill-instillNeonBlue"
          position="my-auto"
        />
      }
      itemGapX="gap-x-2.5"
      padding="pl-[15px] pr-[56px] py-[7px]"
      position={position}
      onClickHandler={() =>
        router.push(
          "/docs/latest/vdp/welcome/?utm_source=product&utm_medium=button"
        )
      }
    >
      <div className="flex flex-col">
        <div className="mr-auto text-left uppercase">Self-hosted VDP</div>
        <div className="mr-auto text-left text-xs font-normal">Deploy now</div>
      </div>
    </OutlineButton>
  );
};
