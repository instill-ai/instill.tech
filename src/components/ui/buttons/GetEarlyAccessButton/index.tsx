import { SolidButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";

export type GetEarlyAccessButtonProps = {
  position?: string;
};

const GetEarlyAccessButton: FC<GetEarlyAccessButtonProps> = ({ position }) => {
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

export default GetEarlyAccessButton;
