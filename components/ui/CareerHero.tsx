import { FC } from "react";
import { ViewJobsButton } from "./buttons/ViewJobsButton";
import * as classNames from "classnames";

interface Props {
  /** <Tailwind format> - position and width */
  styleName?: string;
}

export const CareerHero: FC<Props> = ({ styleName }) => {
  const subHeaderStyle =
    "instill-text-h3-light text-instillGray05 mx-auto md:font-sans md:font-light md:text-2xl md:leading-10 text-center";
  return (
    <div
      className={classNames.default(
        "flex flex-col w-full gap-y-10 pt-[100px] lg:pt-[180px] pb-10",
        styleName
      )}
    >
      <h1 className="w-full instill-text-h1 text-instillGray05 text-center">
        Come together
      </h1>
      <div className="flex flex-col w-full">
        <p className={subHeaderStyle}>We can&#39;t build our vision alone.</p>
        <p className={subHeaderStyle}>
          Take a look below for your new favorite job.
        </p>
      </div>
      <ViewJobsButton styleName="mx-auto" />
    </div>
  );
};
