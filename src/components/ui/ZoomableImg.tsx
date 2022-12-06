import { useEffect, useState } from "react";
import cn from "clsx";
import ModalBase from "./ModalBase";

export type ZoomableImgProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;

  // This will make the zoom happened only when user click the button
  clickButtonOnly?: boolean;
};

export const ZoomableImg = ({
  src,
  alt,
  width,
  height,
  clickButtonOnly,
}: ZoomableImgProps) => {
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

      <div className="reltive w-full">
        <img
          onClick={() => {
            if (!clickButtonOnly) setIsZoom(true);
          }}
          src={src}
          className={cn(
            "h-full cursor-pointer object-contain",
            isZoom ? "opacity-0" : "opacity-100",
            width ? "" : "w-full"
          )}
          alt={alt}
          width={width}
          height={height}
        />
        {clickButtonOnly ? (
          <button
            onClick={() => {
              setIsZoom(true);
            }}
            className="absolute right-0 bottom-0 flex bg-instillGrey20 bg-opacity-30 p-2 hover:bg-instillGrey90 hover:bg-opacity-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-5 w-5 fill-instillGrey90"
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        ) : null}
      </div>

      <ModalBase
        modalIsOpen={isZoom}
        setModalIsOpen={setIsZoom}
        modalBgColor="bg-white bg-opacity-90"
        modalPadding="p-4 xl:p-10"
        modalRootId="zoomable-image"
      >
        <img
          src={src}
          className={cn("w-full cursor-pointer object-contain")}
          alt={alt}
        />
      </ModalBase>
    </>
  );
};
