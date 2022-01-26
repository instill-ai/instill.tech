import { FC, ReactNode } from "react";
import * as classNames from "classnames";

interface Props {
  imagePosition: "right" | "left";
  title: string;
  description: string;
  label: string;
  image: ReactNode;
}

export const FeatureBlock: FC<Props> = ({
  imagePosition,
  label,
  title,
  description,
  image,
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
          "flex sm:h-[400px] sm:w-[455px]",
          imagePosition === "left" ? "" : "sm:col-start-2"
        )}
      >
        {image}
      </div>
      <div
        className={classNames.default(
          "flex sm:h-[400px] sm:w-[455px]",
          imagePosition === "left" ? "" : "sm:row-start-1"
        )}
      >
        {copyBlock}
      </div>
    </>
  );

  return (
    <div
      className={classNames.default(
        "flex w-full px-4 py-[30px] sm:h-[560px] sm:p-0",
        imagePosition === "left" ? "bg-instillGray05" : "bg-white"
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 m-auto">{gridItems}</div>
    </div>
  );
};
