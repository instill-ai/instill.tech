import { MdxComponentPosition } from "@/lib/markdown";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { MdxComponentBase } from "./MdxComponentBase";

export type MdxTwitterCardProps = {
  tweetId: string;
  position?: MdxComponentPosition;
};

export const MdxTwitterCard = ({ tweetId, position }: MdxTwitterCardProps) => {
  return (
    <MdxComponentBase position={position}>
      <div className="w-2/3">
        <TwitterTweetEmbed tweetId={tweetId} />
      </div>
    </MdxComponentBase>
  );
};
