import { MdxComponentPosition } from "@/lib/markdown";
import { MdxComponentBase } from "./MdxComponentBase";
import { Button } from "@instill-ai/design-system";

export type MdxCtaButtonProps = {
  text: string;
  link: string;
  position?: MdxComponentPosition;
};

export const MdxCtaButton = ({ text, link, position }: MdxCtaButtonProps) => {
  return (
    <MdxComponentBase position={position}>
      <div className="block">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex no-underline"
        >
          {/* <p className="rounded-[1px] bg-semantic-accent-on-bg bg-opacity-10 px-5 py-2.5 text-semantic-accent-on-bg hover:bg-semantic-accent-on-bg hover:bg-opacity-20 hover:text-semantic-accent-on-bg">
            {text}
          </p> */}
          <Button variant="primary" size="lg">
            {text}
          </Button>
        </a>
      </div>
    </MdxComponentBase>
  );
};
