import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import cn from "clsx";
import ModalBase from "./ModalBase";
import { XIcon } from "@instill-ai/design-system";

export type ZoomableImgProps = {
  src: string;
  alt: string;
  isZoom: boolean;
  setIsZoom: Dispatch<SetStateAction<boolean>>;
  width?: string;
  height?: string;
  /**
   * This will make the zoom happened only when user click the button
   */
  zoomWithButton?: boolean;

  /**
   *  By default the zoomed image is as same as un-zoomed image. But you could provide
   *  your own zoomed elemeent. We use this props to implement zoomed ImageGallery.
   */

  customZoomElement?: ReactNode;
  disable?: boolean;
};

export const ZoomableImg = ({
  src,
  alt,
  width,
  height,
  zoomWithButton,
  disable,
  customZoomElement,
  isZoom,
  setIsZoom,
}: ZoomableImgProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isZoom) {
        setIsZoom(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isZoom, setIsZoom]);

  return (
    <>
      {/* 
        Because currently there has no way to not specific height
        and use the h-full on parent with fill=true to force the 
        next/image to fill the parent, we have to rely on normal
        img right now
      */}

      {/* 
        The default zoom gesture is directly click the image.

        When user specific zoomWithButton, we will display a button to open the
        ZoomedElement. User can't zoom the image by clicking the image anymore.
      */}

      <div className="group relative h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          onClick={() => {
            if (zoomWithButton || disable) return;
            setIsZoom(true);
          }}
          src={src}
          className={cn(
            "m-0 h-full cursor-pointer bg-white object-contain dark:bg-instillGrey70",
            isZoom ? "opacity-0" : "opacity-100",
            width ? "" : "w-full"
          )}
          alt={alt}
          width={width}
          height={height}
        />
        {zoomWithButton ? (
          disable ? null : (
            <button
              onClick={() => {
                if (disable) return;
                setIsZoom(true);
              }}
              className="absolute right-0 bottom-0 flex cursor-pointer bg-instillGrey20 bg-opacity-30 p-2 opacity-100 hover:bg-instillGrey90 hover:bg-opacity-10 group-hover:opacity-100 xl:opacity-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="h-5 w-5 fill-instillGrey90"
              >
                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
              </svg>
            </button>
          )
        ) : null}
      </div>

      <ModalBase
        modalId={src}
        modalIsOpen={isZoom}
        setModalIsOpen={setIsZoom}
        modalBgColor="bg-instillGrey90"
        modalPadding="p-4 xl:p-10"
        modalRootId="zoomable-image"
        closeModalWithButton={zoomWithButton}
        closeModalButton={
          <div
            className={cn(
              "flex p-2 hover:bg-instillGrey15 hover:bg-opacity-20",
              zoomWithButton ? "" : "hidden"
            )}
          >
            <XIcon width="w-5" height="h-5" color="fill-instillGrey05" />
          </div>
        }
      >
        {customZoomElement ? (
          customZoomElement
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={src}
            className={cn("w-full cursor-pointer object-contain")}
            alt={alt}
          />
        )}
      </ModalBase>
    </>
  );
};
