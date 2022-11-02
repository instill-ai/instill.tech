import { TwitterIcon } from "@instill-ai/design-system";

export type ShareToTwitterProps = {
  /** Page url you want to share */
  url: string;

  /** Text you want to add into sharing post */
  text?: string;
  color: string;
  position?: string;
};

export const ShareToTwitter = ({
  url,
  text,
  color,
  position,
}: ShareToTwitterProps) => {
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
        width="w-[30px]"
        height="h-[30px]"
        color={color}
        position={position ?? "my-auto"}
      />
    </a>
  );
};
