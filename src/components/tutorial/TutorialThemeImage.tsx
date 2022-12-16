import cn from "clsx";
import { useElementDimension } from "@/hooks/useElementDimension";
import { TutorialImagePlaceholder } from "./TutorialImagePlaceholder";
import { useState } from "react";
import { Nullable } from "@/types/instill";
import Image from "next/future/image";

export type TutorialThemeImageProps = {
  marginBottom?: string;
  placeholderColor: string;
  imgSrc: Nullable<string>;
};

export const TutorialThemeImage = ({
  marginBottom,
  placeholderColor,
  imgSrc,
}: TutorialThemeImageProps) => {
  const [imgContainerRef, imageContainerDimension] = useElementDimension();
  const [imageIsError, setImageIsError] = useState(false);

  return (
    <div className={cn("flex flex-col", marginBottom)}>
      <div
        ref={imgContainerRef}
        className={cn(
          "w-full",
          // Because the image container's dimension initial value will be 0
          // We need to deal with it (This will be fixed soon)
          imageContainerDimension.width === 0 ? "xl:h-[450px]" : ""
        )}
      >
        {imgSrc ? (
          imageIsError ? (
            <TutorialImagePlaceholder
              width="w-full"
              height="h-[450px]"
              color={placeholderColor}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <Image
              src={imgSrc}
              alt="The theme of this tutorial"
              width={imageContainerDimension.width}
              height={(imageContainerDimension.width * 9) / 16}
              className="w-full object-cover"
              onError={() => {
                setImageIsError(true);
              }}
            />
          )
        ) : (
          <TutorialImagePlaceholder
            width="w-full"
            height="h-[450px]"
            color={placeholderColor}
          />
        )}
      </div>
    </div>
  );
};
