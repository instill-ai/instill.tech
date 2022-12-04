import cn from "clsx";
import { useElementDimension } from "@/hooks/useElementDimension";
import { useWindowSize } from "@/hooks/useWindowSize";
import { BackToPreviousPageLink } from "../ui";

export type TutorialThemeImageProps = {
  marginBottom?: string;
};

export const TutorialThemeImage = ({
  marginBottom,
}: TutorialThemeImageProps) => {
  const [imgContainerRef, imageContainerDimension] = useElementDimension();
  const windowSize = useWindowSize();

  return (
    <div className={cn("flex flex-col", marginBottom)}>
      {/* 
        The back to previous button will be placed above image when at mobile 
        view and placed at the left of the image when the size is bigger than
        1127px.
      */}
      <div className="mb-4">
        {windowSize?.width ? (
          windowSize?.width > 1127 ? (
            <div
              className="absolute hidden xl:flex"
              style={{
                top: `${imageContainerDimension.y}px`,
                left: `${imageContainerDimension.x - 125}px`,
              }}
            >
              <BackToPreviousPageLink url="/tutorials" />
            </div>
          ) : (
            <div className="flex xl:hidden">
              <BackToPreviousPageLink url="/tutorials" />
            </div>
          )
        ) : null}
      </div>
      <div
        ref={imgContainerRef}
        className="relative h-[450px] w-full bg-instillWarmOrange50"
      />
    </div>
  );
};
