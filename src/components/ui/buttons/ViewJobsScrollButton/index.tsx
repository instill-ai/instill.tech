import { SolidButton } from "@instill-ai/design-system";
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
};

const ViewJobsScrollButton: FC<ViewJobsScrollButtonProps> = ({
  scrollHandler,
}) => {
  return (
    <SolidButton onClickHandler={scrollHandler} color="primary" type="button">
      <p className="my-auto">View Jobs</p>
    </SolidButton>
  );
};

export default ViewJobsScrollButton;
