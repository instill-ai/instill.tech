import { MdxComponentPosition } from "@/lib/markdown";
import { MdxComponentBase } from "./MdxComponentBase";
import { ZoomableImg, ZoomableImgProps } from "./ZoomableImg";

export type MdxZoomableImgProps = {
  position?: MdxComponentPosition;
} & ZoomableImgProps;

export const MdxZoomableImg = ({
  position,
  src,
  alt,
  width,
  height,
}: MdxZoomableImgProps) => {
  return (
    <MdxComponentBase position={position}>
      <ZoomableImg src={src} alt={alt} width={width} height={height} />
    </MdxComponentBase>
  );
};
