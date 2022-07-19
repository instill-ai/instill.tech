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
    <div className="my-auto flex h-full w-full flex-col">
      <p className="instill-text-body mb-1 text-instillBlue30">{label}</p>
      <h2 className="instill-text-h2 mb-[30px] text-instillGray95">{title}</h2>
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
        <div className="mb-[45px] max-w-[456px] lg:mb-auto">{copyBlock}</div>
        {featureCta && <div className="lg:mt-auto">{featureCta}</div>}
      </div>
    </>
  );

  return (
    <div
      className={classNames.default(
        "flex w-full bg-white px-4 py-10 md:px-0 lg:h-[480px]"
        //imagePosition === "left" ? "bg-instillGray05" : "bg-white"
      )}
    >
      <div className="m-auto grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-y-0">
        {gridItems}
      </div>
    </div>
  );
};
