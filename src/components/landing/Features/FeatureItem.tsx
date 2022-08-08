import { ReactNode } from "react";
import cn from "clsx";

export type FeatureItemProps = {
  imagePosition: "right" | "left";
  title: string;
  description: string;
  label: string;
  image: ReactNode;
  featureCta?: ReactNode;
};

const FeatureItem = ({
  imagePosition,
  label,
  title,
  description,
  image,
  featureCta,
}: FeatureItemProps) => {
  const copyItem = (
    <div className="my-auto flex h-full w-full flex-col">
      <p className="instill-text-body mb-1 text-instillBlue50">{label}</p>
      <h2 className="instill-text-h2 mb-[30px] text-instillGrey95">{title}</h2>
      <p className="instill-text-body text-instillGrey95">{description}</p>
    </div>
  );

  const gridItems = (
    <>
      <div
        className={cn(
          "flex lg:h-[400px] lg:w-[455px]",
          imagePosition === "left" ? "" : "lg:col-start-2"
        )}
      >
        {image}
      </div>
      <div
        className={cn(
          "flex flex-col lg:h-[400px] lg:w-[455px]",
          imagePosition === "left" ? "" : "lg:row-start-1"
        )}
      >
        <div className="mb-[45px] max-w-[456px] lg:mb-auto">{copyItem}</div>
        {featureCta && <div className="lg:mt-auto">{featureCta}</div>}
      </div>
    </>
  );

  return (
    <div className={cn("flex w-full bg-white px-4 py-10 md:px-0 lg:h-[480px]")}>
      <div className="m-auto grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-y-0">
        {gridItems}
      </div>
    </div>
  );
};

export default FeatureItem;
