import { FC } from "react";
import * as classNames from "classnames";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { ButtonBase } from "./ButtonBase";

export type ExploreMoreScrollButtonProps = {
  /** This function will scroll pageView to targetRef 
   * 
   *  @Example
   * 
   *  ```
   *  const handleScroll = useCallback(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }, []);
      ```
   * 
  */
  scrollHandler: () => void;

  styleName?: string;
};

export const ExploreMoreScrollButton: FC<ExploreMoreScrollButtonProps> = ({
  styleName,
  scrollHandler,
}) => {
  return (
    <ButtonBase
      onClick={scrollHandler}
      variant="text"
      color="transparent"
      styleName={classNames.default("flex flex-col group", styleName)}
    >
      <p className="mx-auto text-instillBlue30 group-hover:text-[#236698]">
        Explore
      </p>
      <RightArrowIcon styleName="rotate-90 mt-5 mx-auto w-10 h-10 text-instillBlue30 group-hover:text-[#236698]" />
    </ButtonBase>
  );
};
