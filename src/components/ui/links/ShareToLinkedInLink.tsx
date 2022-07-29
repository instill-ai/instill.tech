import { LinkBase } from "./LinkBase";
import { LinkedInIcon } from "@instill-ai/design-system";
import cn from "clsx";

export type ShareToLinkedInLinkProps = {
  /** Page;s url you want to share */
  url: string;

  /** <Tailwind config> */
  styleName?: string;
};

const ShareToLinkedInLink = ({ url, styleName }: ShareToLinkedInLinkProps) => {
  return (
    <LinkBase
      styleName={cn("flex", styleName)}
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
    >
      <LinkedInIcon
        width="w-[15px]"
        height="h-[15px]"
        color="fill-instillGrey30 hover:fill-instillGrey05"
        position="my-auto"
      />
    </LinkBase>
  );
};

export default ShareToLinkedInLink;
