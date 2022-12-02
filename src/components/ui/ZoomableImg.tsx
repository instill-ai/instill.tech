import Image from "next/future/image";
import { useEffect, useState } from "react";
import cn from "clsx";
import Zoom from "react-medium-image-zoom";

export type ZoomableImgProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

export const ZoomableImg = ({ src, alt, width, height }: ZoomableImgProps) => {
  if (!height && width) {
    throw new Error(
      "Because you had passed width, you should pass the height at the same time"
    );
  }

  if (height && !width) {
    throw new Error(
      "Because you had passed height, you should pass the width at the same time"
    );
  }

  const [isZoom, setIsZoom] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isZoom) {
        setIsZoom(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* 
        Because currently there has not way to not specific height
        and use the h-full on pareent with fill=true to force the 
        next/image to fill the parent, we have to rely on normal
        img right now
      */}

      <div className={cn("w-full")}>
        <img
          onClick={() => setIsZoom(true)}
          src={src}
          className={cn(
            "w-full cursor-pointer object-contain",
            isZoom ? "opacity-0" : "opacity-100"
          )}
          alt={alt}
        />
      </div>

      {isZoom ? (
        <>
          {/** Background backdrop, show/hide based on modal state. */}
          <div className="fixed inset-0 z-30 bg-white bg-opacity-90 transition-opacity" />

          {/** Modal panel, show/hide based on modal state. */}
          <div
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={() => setIsZoom(false)}
          >
            <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
              <div className={cn("relative w-full")}>
                <img
                  src={src}
                  className="w-full cursor-pointer object-contain"
                  alt={alt}
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
