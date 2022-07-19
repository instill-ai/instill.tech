import { FC } from "react";
import { ViewJobsScrollButton } from "./buttons/ViewJobsScrollButton";
import * as classNames from "classnames";

interface Props {
  /** Because we have ViewJobsScrollButton under this component, we have to provide related
   * Scroll handler.
   * 
   * This function will scroll pageView to targetRef 
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
  viewJobsScrollHandler: () => void;

  /** <Tailwind format> - position and width */
  styleName?: string;
}

export const CareerHero: FC<Props> = ({ styleName, viewJobsScrollHandler }) => {
  const subHeaderStyle =
    "text-lg leading-[27px] text-instillGray05 mx-auto font-sans md:font-light md:text-2xl md:leading-10 text-center";
  return (
    <div
      className={classNames.default(
        "flex w-full flex-col gap-y-10 px-4 md:px-0",
        styleName
      )}
    >
      <h1 className="instill-text-h1 w-full text-center text-instillGray05">
        Come together
      </h1>
      <div className="flex w-full flex-col md:hidden">
        <p className={subHeaderStyle}>
          We can&#39;t build our vision alone. Take a look below for your new
          favorite job.
        </p>
      </div>
      <div className="hidden w-full md:flex md:flex-col ">
        <p className={subHeaderStyle}>We can&#39;t build our vision alone.</p>
        <p className={subHeaderStyle}>
          Take a look below for your new favorite job.
        </p>
      </div>
      <ViewJobsScrollButton
        scrollHandler={viewJobsScrollHandler}
        styleName="mx-auto"
      />
    </div>
  );
};
