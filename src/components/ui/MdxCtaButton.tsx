import { MdxComponentPosition } from "@/lib/markdown";
import { MdxComponentBase } from "./MdxComponentBase";

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
          className="flex"
        >
          <p className="rounded-[1px] bg-instillNeonBlue bg-opacity-10 px-5 py-2.5 text-instillNeonBlue no-underline hover:bg-instillNeonBlue hover:bg-opacity-20 hover:text-instillNeonBlue hover:shadow-instill-solid-5">
            {text}
          </p>
        </a>
      </div>
    </MdxComponentBase>
  );
};
