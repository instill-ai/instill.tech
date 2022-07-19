import { FC } from "react";
import { ButtonBase } from "./ButtonBase";

interface Props {
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

  /** Tailwind format - position of this button */
  styleName?: string;
}

export const ViewJobsScrollButton: FC<Props> = ({
  styleName,
  scrollHandler,
}) => {
  return (
    <ButtonBase
      onClick={scrollHandler}
      styleName={styleName}
      variant="contained"
      color="primary"
    >
      View Jobs
    </ButtonBase>
  );
};
