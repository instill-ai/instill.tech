import {
  DiscordIcon,
  OutlineButton,
  TextButton,
} from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type DiscordCtaButtonProps = {
  position?: string;
};

export const DiscordCtaButton = ({ position }: DiscordCtaButtonProps) => {
  const router = useRouter();
  return (
    <OutlineButton
      type="button"
      color="primaryLight"
      hoveredShadow="hover:shadow-instill-solid-5"
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
      onClickHandler={() =>
        router.push(process.env.NEXT_PUBLIC_DISCORD_INVITATION_LINK)
      }
    >
      <div className="flex flex-col">
        <div className="mr-auto text-left uppercase">200+ User community</div>
        <div className="mr-auto text-left text-xs font-normal">Join now</div>
      </div>
    </OutlineButton>
  );
};
