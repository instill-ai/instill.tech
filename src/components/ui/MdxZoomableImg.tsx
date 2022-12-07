import { MdxComponentPosition } from "@/lib/markdown";
import { useState } from "react";
import { MdxComponentBase } from "./MdxComponentBase";
import { ZoomableImg, ZoomableImgProps } from "./ZoomableImg";

export type MdxZoomableImgProps = {
  position?: MdxComponentPosition;
} & Omit<ZoomableImgProps, "isZoom" | "setIsZoom">;

export const MdxZoomableImg = ({
  position,
  src,
  alt,
  width,
  height,
}: MdxZoomableImgProps) => {
  const [isZoom, setIsZoom] = useState(false);
  return (
    <MdxComponentBase position={position}>
      <ZoomableImg
        isZoom={isZoom}
        setIsZoom={setIsZoom}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </MdxComponentBase>
  );
};
