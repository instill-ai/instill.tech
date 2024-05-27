import cn from "clsx";

import { ImageGalleryProps } from "./ImageGallery";
import useEmblaCarousel from "embla-carousel-react";
import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";

export type ZoomedImageGalleryProps = {
  images: ImageGalleryProps["images"];
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  isZoom: boolean;
};

export const ZoomedImageGallery = ({
  images,
  selectedIndex,
  setSelectedIndex,
  isZoom,
}: ZoomedImageGalleryProps) => {
  const [mainViewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    axis: "x",
  });

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [setSelectedIndex, embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  // We don't include selectedIndex into this useEffect's deps
  // because we only need to reInit the embla to the desired index
  // once.

  useEffect(() => {
    if (embla) {
      embla.reInit({ startIndex: selectedIndex });
    }
    /* eslint-disable-next-line */
  }, [images, embla, isZoom]);

  return (
    <React.Fragment>
      <style jsx>
        {`
          .embla {
            margin: auto;
          }

          .embla__viewport {
            overflow: hidden;
            width: 100%;
          }

          .embla__viewport.is-draggable {
            cursor: move;
            cursor: grab;
          }

          .embla__viewport.is-dragging {
            cursor: grabbing;
          }

          .embla__container {
            display: flex;
            flex-direction: row;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -webkit-tap-highlight-color: transparent;
            margin-left: -10px;
          }

          .embla--thumb {
            padding-top: 20px;
          }

          .embla__slide {
            padding-left: 10px;
            min-width: 100%;
            position: relative;
          }

          .embla__slide__inner {
            display: flex;
            flex-direction: column;
            height: 800px;
          }

          .embla__slide__img {
            margin: 0 auto;
            object-fit: contain;
            height: 100%;
          }
        `}
      </style>
      <div className="relative flex h-full w-full flex-col">
        <div className="embla">
          <div className="embla__viewport" ref={mainViewportRef}>
            <div className="embla__container">
              {images.map((image) => (
                <div className="embla__slide" key={image.src}>
                  <div className="embla__slide__inner">
                    <img
                      src={image.src}
                      className="mb-20 h-full w-full cursor-pointer object-contain"
                      alt={image.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto hidden w-2/3 flex-row gap-x-2 md:grid md:grid-flow-col">
          {images.map((image, i) => (
            <div
              key={`zoomed gallery thumbnail - ${image.src}`}
              className={cn(
                "max-w-10 h-2 rounded-sm border border-instillSkyBlue",
                i === selectedIndex ? "bg-instillSkyBlue" : ""
              )}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
