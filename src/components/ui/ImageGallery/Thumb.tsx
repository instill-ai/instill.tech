/* eslint-disable @next/next/no-img-element */

import cn from "clsx";
import * as React from "react";

export type ThumbProps = {
  selected: boolean;
  onClick: () => void;
  imgSrc: string;
};

export const Thumb = ({ selected, onClick, imgSrc }: ThumbProps) => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .embla__slide__inner--thumb {
            touch-action: manipulation;
            cursor: pointer;
            border: 0;
            outline: 0;
            margin: 0;
            padding: 0;
            height: 150px;
            width: 100%;
            background-color: transparent;
            display: flex;
            overflow: hidden;
          }

          .embla__slide__thumbnail {
            margin: auto;
            transition: opacity 0.2s;
            object-fit: contain;
            height: 100%;
            width: 100%;
          }

          .embla__slide--thumb {
            padding-left: 20px;
            min-width: 20%;
          }
        `}
      </style>
      <div
        className={cn(
          "embla__slide--thumb",
          selected ? "opacity-80" : "opacity-20"
        )}
      >
        <button
          onClick={onClick}
          className="embla__slide__inner embla__slide__inner--thumb"
          type="button"
        >
          <img
            className="embla__slide__thumbnail"
            src={imgSrc}
            alt="A cool cat."
          />
        </button>
      </div>
    </React.Fragment>
  );
};
