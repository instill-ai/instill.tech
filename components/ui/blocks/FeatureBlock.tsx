import { FC, ReactNode } from "react";

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
    <div className="flex flex-col w-full h-full">
      <p className="instill-text-body text-instillBlue30 mb-1">{label}</p>
      <h2 className="instill-text-h2 text-instillGray95 mb-[30px]">{title}</h2>
      <p className="instill-text-body text-instillGray95">{description}</p>
    </div>
  );

  const element =
    imagePosition === "left" ? (
      <>
        <div className="col-span-2">{image}</div>
        <div className="col-span-1">{copyBlock}</div>
      </>
    ) : (
      <>
        <div className="col-span-1">{copyBlock}</div>
        <div className="col-span-2">{image}</div>
      </>
    );

  return <div className="grid grid-cols-1 sm:grid-cols-3">{element}</div>;
};
