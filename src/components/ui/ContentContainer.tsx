import cn from "clsx";
import { ReactNode } from "react";

export type ContentContainerProps = {
  contentMaxWidth?: string;
  marginBottom?: string;
  children?: ReactNode;
};

// contentMaxWidth is the temp solution to cope with the design, we may need to further discuess how we
// restrict the width of the page and the content. Currently we have a screen max-w-[1440px] and we may
// have a content max width with max-w-[1127px] at some page

const ContentContainer = ({
  children,
  contentMaxWidth,
  marginBottom,
}: ContentContainerProps) => {
  return (
    <div
      className={cn(
        "flex max-w-[1440px] flex-col md:mx-auto md:w-10/12",
        marginBottom
      )}
    >
      <div
        className={cn(
          "mx-auto flex flex-col",
          contentMaxWidth ? contentMaxWidth : "w-full"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
