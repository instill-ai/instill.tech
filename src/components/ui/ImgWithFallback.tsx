import Image from "next/future/image";
import { ReactElement, useState } from "react";

export type ImgWithFallbackProps = {
  src: string;
  fallbackImg: ReactElement;
  alt: string;
  width: number;
  height: number;
};

export const ImgWithFallback = ({
  src,
  fallbackImg,
  alt,
  width,
  height,
}: ImgWithFallbackProps) => {
  const [error, setError] = useState(false);
  return error ? (
    fallbackImg
  ) : (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      onError={() => {
        console.log("error");
        setError(true);
      }}
    />
  );
};
