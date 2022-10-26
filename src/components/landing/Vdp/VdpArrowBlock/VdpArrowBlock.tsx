import { ReactElement } from "react";
import cn from "clsx";

export type VdpArrowBlockProps = {
  padding?: string;
  icon: ReactElement;
  title: string;
  description: string;

  // Please input with hex color code
  color: string;
  zIndex: number;
  width: number;
  arrowWidth: number;
};

const VdpArrowBlock = ({
  padding,
  icon,
  title,
  description,
  color,
  zIndex,
  width,
  arrowWidth,
}: VdpArrowBlockProps) => {
  return (
    <>
      <style jsx>
        {`
          .arrow-block-${title} {
            position: relative;
            width: ${width}px;
            height: 194px;
            background-color: ${color};
            z-index: ${zIndex};
          }
          .arrow-block-${title}:before {
            content: "";
            position: absolute;
            top: 0px;
            left: ${width}px;
            width: 0;
            height: 0;
            border: 97px solid transparent;
            border-left: ${arrowWidth}px solid ${color};
            z-index: ${zIndex};
        
        `}
      </style>
      <div
        className={cn(
          `arrow-block-${title} flex flex-row gap-x-[30px] py-5 pl-5`,
          padding
        )}
      >
        {icon}
        <div className="my-auto flex flex-col">
          <div className="font-instill text-2xl font-normal uppercase">
            {title}
          </div>
          <div className="font-sans text-lg font-normal">{description}</div>
        </div>
      </div>
    </>
  );
};

export default VdpArrowBlock;
