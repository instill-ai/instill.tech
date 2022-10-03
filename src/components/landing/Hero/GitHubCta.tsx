import { GitHubIcon, SolidButton } from "@instill-ai/design-system";

export type GitHubCtaProps = {
  position?: string;
};

const GitHubCta = ({ position }: GitHubCtaProps) => {
  return (
    <SolidButton
      type="button"
      color="primaryLight"
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
    >
      <div className="flex flex-col">
        <div className="mr-auto uppercase">Open-source VDP</div>
        <div className="mr-auto text-xs font-normal">Deploy now</div>
      </div>
    </SolidButton>
  );
};

export default GitHubCta;
