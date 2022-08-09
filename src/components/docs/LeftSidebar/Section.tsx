import { useMemo, useState } from "react";
import cn from "clsx";
import IconMinusSquare from "./IconMinusSquare";
import IconPlusSquare from "./IconPlusSquare";
import { SidebarItem } from "@/types/docs";
import { useRouter } from "next/router";
import { CollapseRightIcon } from "@instill-ai/design-system";

export type SectionProps = {
  text: string;
  items: SidebarItem[];
  collapsible?: boolean;
  currentPagePath: string;
  link?: string;
};

const Section = ({
  text,
  items,
  collapsible,
  currentPagePath,
  link,
}: SectionProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const baseIconStyle =
    "absolute w-4 h-4 top-2 bottom-2 right-2 fill-instillGrey500";

  const toggle = () => {
    if (collapsible) {
      setCollapsed((prev) => !prev);
    }
  };

  const router = useRouter();

  const toLink = () => {
    if (link) {
      router.push(link);
    }
  };

  const sectionIsCollapsable = useMemo(() => {
    if (!link) {
      if (items.length === 0) return false;
      return collapsible;
    } else {
      return false;
    }
  }, [link, collapsible, items]);

  return (
    <section
      className={cn(
        "flex w-full flex-col pt-2",
        sectionIsCollapsable ? (collapsed ? "pb-2" : "pb-6") : "pb-2"
      )}
    >
      <div
        onClick={link ? toLink : toggle}
        role="button"
        className={cn(
          "flex flex-row",
          sectionIsCollapsable ? { "mb-4": !collapsed } : ""
        )}
      >
        <h2 className="my-auto flex-1 text-sm font-semibold">{text}</h2>
        {sectionIsCollapsable ? (
          <div className="my-auto">
            <CollapseRightIcon
              width="w-3"
              height="h-3"
              color="fill-instillGrey95"
              position={cn("my-auto", collapsed ? "rotate-90" : "-rotate-90")}
            />
          </div>
        ) : null}
      </div>
      <div
        className={cn("flex flex-col gap-y-2", {
          hidden: collapsed,
        })}
      >
        {items.map((item) => (
          <a
            key={item.text}
            className={cn(
              "text-sm hover:text-instillBlue50 font-normal",
              item.link === currentPagePath
                ? "text-instillBlue50"
                : "text-instillGrey80"
            )}
            href={item.link}
          >
            {item.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Section;
