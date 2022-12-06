import cn from "clsx";
import { useElementDimension } from "@/hooks/useElementDimension";
import { TutorialImagePlaceholder } from "./TutorialImagePlaceholder";
import { useState } from "react";
import { Nullable } from "@/types/instill";

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
      <div ref={imgContainerRef} className="w-full">
        {imgSrc ? (
          imageIsError ? (
            <TutorialImagePlaceholder
              width="w-full"
              height="h-[450px]"
              color={placeholderColor}
            />
          ) : (
            <img
              src={imgSrc}
              alt="The theme image of this tutorial"
              style={{
                height: `${(imageContainerDimension.width * 9) / 16}px`,
              }}
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
