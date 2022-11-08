import { SolidButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type GetAccessButtonProps = {
  position?: string;
};

export const GetAccessButton = ({ position }: GetAccessButtonProps) => {
  const router = useRouter();
  return (
    <SolidButton
      type="button"
      color="primaryLight"
      padding="px-5 py-2.5"
      itemGapX="gap-x-5"
      position={position ?? "my-auto"}
      onClickHandler={() => router.push("/get-access")}
      hoveredShadow="hover:shadow-instill-solid-5"
    >
      <p className="font-normal text-instill-body-normal">Get access</p>
    </SolidButton>
  );
};
