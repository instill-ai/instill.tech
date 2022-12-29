import { MdxComponentPosition } from "@/lib/markdown";
import { ImageGallery, ImageGalleryProps } from "./ImageGallery";
import { MdxComponentBase } from "./MdxComponentBase";

export type MdxImageGalleryProps = {
  position?: MdxComponentPosition;
} & ImageGalleryProps;

export const MdxImageGallery = ({
  position,
  images,
  caption,
}: MdxImageGalleryProps) => {
  return (
    <MdxComponentBase position={position}>
      <div className="flex flex-col">
        <ImageGallery images={images} caption={caption} />
      </div>
    </MdxComponentBase>
  );
};
