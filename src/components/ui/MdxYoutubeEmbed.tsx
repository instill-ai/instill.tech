import { MdxComponentPosition } from "@/lib/markdown";
import { MdxComponentBase } from "./MdxComponentBase";

export type MdxYoutubeEmbedProps = {
  id: string;
  width?: string;
  height?: string;
  position: MdxComponentPosition;
};

export const MdxYoutubeEmbed = ({
  id,
  width,
  height,
  position,
}: MdxYoutubeEmbedProps) => {
  return (
    <MdxComponentBase position={position}>
      <div className="relative h-0 w-full pb-[56.5%]">
        <iframe
          width={width ? width : "800"}
          height={height ? height : "450"}
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="absolute left-0 top-0 h-full w-full"
        />
      </div>
    </MdxComponentBase>
  );
};
