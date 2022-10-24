import Image from "next/future/image";

export type ShowcaseImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

const ShowcaseImage = ({ width, height, src, alt }: ShowcaseImageProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className="h-[355px] min-w-[336px]"
    />
  );
};

export default ShowcaseImage;
