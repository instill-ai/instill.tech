import { TwitterTweetEmbed } from "react-twitter-embed";

export type MarkdownTwitterCardProps = {
  tweetId: string;
};

export const MarkdownTwitterCard = ({ tweetId }: MarkdownTwitterCardProps) => {
  return <TwitterTweetEmbed tweetId={tweetId} />;
};
