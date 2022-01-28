import { FC, ReactNode } from "react";
import * as classNames from "classnames";

interface Props {
  imagePosition: "right" | "left";
  title: string;
  description: string;
  label: string;
  image: ReactNode;
  featureCta?: ReactNode;
}

export const FeatureBlock: FC<Props> = ({
  imagePosition,
  label,
  title,
  description,
  image,
  featureCta,
}) => {
  const copyBlock = (
    <div className="flex flex-col my-auto w-full h-full">
      <p className="instill-text-body text-instillBlue30 mb-1">{label}</p>
      <h2 className="instill-text-h2 text-instillGray95 mb-[30px]">{title}</h2>
      <p className="instill-text-body text-instillGray95">{description}</p>
    </div>
  );

  const gridItems = (
    <>
      <div
        className={classNames.default(
          "flex lg:h-[400px] lg:w-[455px]",
          imagePosition === "left" ? "" : "lg:col-start-2"
        )}
      >
        {image}
      </div>
      <div
        className={classNames.default(
          "flex flex-col lg:h-[400px] lg:w-[455px]",
          imagePosition === "left" ? "" : "lg:row-start-1"
        )}
      >
        <div className="max-w-[456px] mb-[45px] lg:mb-auto">{copyBlock}</div>
        {featureCta && <div className="lg:mt-auto">{featureCta}</div>}
      </div>
    </>
  );

  return (
    <div
      className={classNames.default(
        "flex w-full px-4 py-10 lg:h-[480px] md:px-0 bg-white"
        //imagePosition === "left" ? "bg-instillGray05" : "bg-white"
      )}
    >
      <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 m-auto">
        {gridItems}
      </div>
    </div>
  );
};
