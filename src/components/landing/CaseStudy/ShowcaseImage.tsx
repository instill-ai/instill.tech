import Image from "next/image";

export type ShowcaseImageProps = {
  src: string;
  alt: string;
};

export const ShowcaseImage = ({ src, alt }: ShowcaseImageProps) => {
  return (
    <div className="relative h-[254px] w-[240px] sm:h-[355px] sm:w-[336px]">
      <Image fill={true} src={src} alt={alt} sizes="50vw" />
    </div>
  );
};
