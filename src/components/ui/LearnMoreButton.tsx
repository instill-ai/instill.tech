import { useRouter } from "next/router";
import { ArrowRightIcon, SolidButton } from "@instill-ai/design-system";

export type LearnMoreButtonProps = {
  link: string;
  position?: string;
};

export const LearnMoreButton = ({ position, link }: LearnMoreButtonProps) => {
  const router = useRouter();
  return (
    <SolidButton
      type="button"
      color="primaryLight"
      endIcon={
        <ArrowRightIcon
          width="w-[28px]"
          height="h-[28px]"
          color="fill-instillNeonBlue"
          position="my-auto"
        />
      }
      padding="px-5 py-2.5"
      itemGapX="gap-x-5"
      position={position}
      onClickHandler={() => router.push(link)}
    >
      <p className="text-2xl font-normal">Learn more</p>
    </SolidButton>
  );
};
