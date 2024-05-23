import React, { ReactElement } from "react";
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
  titleClass: string;
};

export const VdpArrowBlock = ({
  padding,
  icon,
  title,
  description,
  titleClass,
}: VdpArrowBlockProps) => {
  return (
    <React.Fragment>
      {/* <style jsx>
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
      </style> */}
      <div
        className={cn(
          `arrow-block-${title} flex flex-row gap-x-[30px] px-7 py-5`,
          padding
        )}
      >
        {icon}
        <div className="my-auto flex flex-col">
          <div
            className={cn(
              "font-['Roboto'] text-2xl font-normal uppercase leading-normal",
              titleClass
            )}
          >
            {title}
          </div>
          <div className="font-['IBM Plex Sans'] text-[18px] leading-normal text-[#2B2B2B]">
            {description}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
