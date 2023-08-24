import { Nullable } from "@/types/instill";
import cn from "clsx";
import { Dispatch, SetStateAction } from "react";

export type SubNavProps = {
  setLeftSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
  marginBottom: Nullable<string>;
};

export const SubNav = ({ marginBottom, setLeftSidebarIsOpen }: SubNavProps) => {
  return (
    <>
      <style jsx>
        {`
          .sub-nav {
            top: var(--docs-nav-height);
            height: var(--docs-sub-nav-height);
          }
        `}
      </style>
      <div
        className={cn(
          "sub-nav sticky z-10 flex w-full flex-row border-b border-b-instillGrey30 bg-white px-8 py-4 backdrop-blur-sm dark:border-b-instillGrey80 dark:bg-instillGrey95 md:hidden",
          marginBottom
        )}
      >
        <button
          onClick={() => setLeftSidebarIsOpen((prev) => !prev)}
          className="mr-auto text-sm text-instillGrey70 hover:text-instillSkyBlue dark:text-instillGrey30 dark:hover:text-instillSkyBlue"
        >
          Menu
        </button>

        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="ml-auto text-sm text-instillGrey70 hover:text-instillSkyBlue dark:text-instillGrey30 dark:hover:text-instillSkyBlue"
        >
          Return to top
        </button>
      </div>
    </>
  );
};
