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
      <div className="w-full max-w-[550px]">
        <TwitterTweetEmbed tweetId={tweetId} />
      </div>
    </MdxComponentBase>
  );
};
