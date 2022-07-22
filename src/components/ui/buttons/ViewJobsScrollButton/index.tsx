import { SolidButton, SolidButtonProps } from "@instill-ai/design-system";
import { FC } from "react";

export type ViewJobsScrollButtonProps = {
  /** This function will scroll pageView to targetRef
   *
   *  @Example
   *
   *  ```
   *  const handleScroll = useCallback(() => {
   *    ref.current.scrollIntoView({ behavior: "smooth" });
   *  }, []);
   *  ```
   *
   */
  scrollHandler: () => void;
  position?: SolidButtonProps["position"];
};

const ViewJobsScrollButton: FC<ViewJobsScrollButtonProps> = ({
  scrollHandler,
  position,
}) => {
  return (
    <SolidButton
      position={position}
      onClickHandler={scrollHandler}
      color="primary"
      type="button"
    >
      <p className="my-auto">View Jobs</p>
    </SolidButton>
  );
};

export default ViewJobsScrollButton;
