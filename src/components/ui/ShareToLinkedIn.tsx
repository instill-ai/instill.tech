import { LinkedInIcon } from "@instill-ai/design-system";

export type ShareToLinkedInProps = {
  url: string;
  color: string;
  position?: string;
};

export const ShareToLinkedIn = ({
  url,
  color,
  position,
}: ShareToLinkedInProps) => {
  return (
    <a
      className="flex"
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon
        width="w-[30px]"
        height="h-[30px]"
        color={color}
        position={position ?? "my-auto"}
      />
    </a>
  );
};
