import { useRouter } from "next/router";
import { ArrowRightIcon, SolidButton } from "@instill-ai/design-system";

export type CommonCtaButtonProps = {
  link: string;
  position?: string;
  withArrow: boolean;
  text: string;
};

export const CommonCtaButton = ({
  position,
  link,
  withArrow,
  text,
}: CommonCtaButtonProps) => {
  const router = useRouter();
  return (
    <SolidButton
      type="button"
      color="primaryLight"
      endIcon={
        withArrow ? (
          <ArrowRightIcon
            width="w-[28px]"
            height="h-[28px]"
            color="fill-instillNeonBlue"
            position="my-auto"
          />
        ) : undefined
      }
      padding="px-5 py-2.5"
      itemGapX="gap-x-5"
      position={position}
      onClickHandler={() => router.push(link, undefined, { scroll: false })}
      hoveredShadow="hover:shadow-instill-solid-5"
    >
      <p className="text-[24px] font-normal leading-7">{text}</p>
    </SolidButton>
  );
};
