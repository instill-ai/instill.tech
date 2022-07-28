import { SolidButton, SolidButtonProps } from "@instill-ai/design-system";

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

const ViewJobsScrollButton = ({
  scrollHandler,
  position,
}: ViewJobsScrollButtonProps) => {
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
