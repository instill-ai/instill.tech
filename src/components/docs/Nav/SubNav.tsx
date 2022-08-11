import { Nullable } from "@/types/instill";
import cn from "clsx";
import { Dispatch, SetStateAction } from "react";

export type SubNavProps = {
  setLeftSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
  marginBottom: Nullable<string>;
};

const SubNav = ({ marginBottom, setLeftSidebarIsOpen }: SubNavProps) => {
  return (
    <>
      <style jsx>{`
        .sub-nav {
          top: var(--docs-nav-height);
        }
      `}
      </style>
      <div
        className={cn(
          "sub-nav w-full border-b flex-row bg-white z-10 py-4 px-8 flex md:hidden sticky",
          marginBottom
        )}
      >
        <button
          onClick={() => setLeftSidebarIsOpen((prev) => !prev)}
          className="text-sm text-instillGrey70 mr-auto"
        >
          Menu
        </button>

        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="text-sm text-instillGrey70 ml-auto"
        >
          Return to top
        </button>
      </div>
    </>
  );
};

export default SubNav;
