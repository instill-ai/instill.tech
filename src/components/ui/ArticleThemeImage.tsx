import cn from "clsx";
import { useElementDimension } from "@/hooks/useElementDimension";
import { TutorialImagePlaceholder } from "../tutorial/TutorialImagePlaceholder";
import { useState } from "react";
import { Nullable } from "@/types/instill";

export type ArticleThemeImageProps = {
  marginBottom?: string;
  placeholderColor: string;
  imgSrc: Nullable<string>;
};

export const ArticleThemeImage = ({
  marginBottom,
  placeholderColor,
  imgSrc,
}: ArticleThemeImageProps) => {
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
            <img
              src={imgSrc}
              alt="The theme of this tutorial"
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
