import { LinkedInIcon } from "@instill-ai/design-system";

export type ShareToLinkedInProps = {
  url: string;
};

const ShareToLinkedIn = ({ url }: ShareToLinkedInProps) => {
  return (
    <a
      className="flex"
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon
        width="w-[15px]"
        height="h-[15px]"
        color="fill-instillGrey30 hover:fill-instillGrey05"
        position="my-auto"
      />
    </a>
  );
};

export default ShareToLinkedIn;
