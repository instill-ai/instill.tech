import { useCallback } from "react";
import { useRouter } from "next/router";
import { SolidButton } from "@instill-ai/design-system";

export type GetEarlyAccessButtonProps = {
  position?: string;
};

export const GetEarlyAccessButton = ({
  position,
}: GetEarlyAccessButtonProps) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/get-access");
  }, [router]);

  return (
    <SolidButton
      type="button"
      color="primary"
      position={position}
      onClickHandler={handleClick}
    >
      <p className="my-auto">Get Early Access</p>
    </SolidButton>
  );
};
