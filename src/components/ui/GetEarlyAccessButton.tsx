import { SolidButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";
import { useCallback } from "react";

const GetEarlyAccessButton = ({ position }: { position?: string }) => {
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
