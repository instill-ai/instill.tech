import { DiscordIcon, TextButton } from "@instill-ai/design-system";

export type DiscordCtaProps = {
  position?: string;
};

const DiscordCta = ({ position }: DiscordCtaProps) => {
  return (
    <TextButton
      type="button"
      color="primary"
      startIcon={
        <DiscordIcon
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
        <div className="mr-auto uppercase">200+ User community</div>
        <div className="mr-auto text-xs font-normal">Join now</div>
      </div>
    </TextButton>
  );
};

export default DiscordCta;
