import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./Thumb";
import { ZoomableImg } from "../ZoomableImg";

export type MarkdownImgGalleryProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export const MarkdownImgGallery = ({ images }: MarkdownImgGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <style jsx>
        {`
          .embla {
            padding: 20px;
            margin: autp;
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
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -webkit-tap-highlight-color: transparent;
            margin-left: -10px;
          }

          .embla__slide {
            padding-left: 10px;
            min-width: 100%;
            position: relative;
          }

          .embla__slide__inner {
            display: flex;
            height: 600px;
          }

          .embla__slide__img {
            margin: 0 auto;
            object-fit: contain;
            height: 100%;
          }
        `}
      </style>
      <div className="embla">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {images.map((image) => (
              <div className="embla__slide" key={image.src}>
                <div className="embla__slide__inner">
                  <ZoomableImg
                    src={image.src}
                    alt={image.alt}
                    clickButtonOnly={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla embla--thumb hidden xl:block">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {images.map((image, i) => (
              <Thumb
                onClick={() => onThumbClick(i)}
                selected={i === selectedIndex}
                imgSrc={image.src}
                key={image.src}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
