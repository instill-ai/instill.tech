import { FacebookIcon } from "@instill-ai/design-system";

export type ShareToFbProps = {
  url: string;
  color: string;
  position?: string;
};

export const ShareToFb = ({ url, color, position }: ShareToFbProps) => {
  return (
    <a
      className="flex"
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookIcon
        width="w-[30px]"
        height="h-[30px]"
        color={color}
        position={position ?? "my-auto"}
      />
    </a>
  );
};
