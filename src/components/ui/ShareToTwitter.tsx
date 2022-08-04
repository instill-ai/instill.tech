import { TwitterIcon } from "@instill-ai/design-system";

export type ShareToTwitterProps = {
  /** Page url you want to share */
  url: string;

  /** Text you want to add into sharing post */
  text?: string;
};

const ShareToTwitter = ({ url, text }: ShareToTwitterProps) => {
  return (
    <a
      className="flex"
      href={
        text
          ? `https://twitter.com/share?text=${text}&url=${url}`
          : `https://twitter.com/share?url=${url}`
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon
        width="w-[15px]"
        height="h-[15px]"
        color="fill-instillGrey30 hover:fill-instillGrey05"
        position="my-auto"
      />
    </a>
  );
};

export default ShareToTwitter;
