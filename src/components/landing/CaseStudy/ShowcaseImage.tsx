import Image from "next/future/image";

export type ShowcaseImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

export const ShowcaseImage = ({
  width,
  height,
  src,
  alt,
}: ShowcaseImageProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className="h-[296px] min-w-[280px] sm:h-[355px] sm:min-w-[336px]"
    />
  );
};
