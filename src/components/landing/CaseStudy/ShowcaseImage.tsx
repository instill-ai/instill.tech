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
    <div className="relative h-[254px] w-[240px] sm:h-[355px] sm:w-[336px]">
      <Image fill={true} src={src} alt={alt} sizes="50vw" />
    </div>
  );
};
