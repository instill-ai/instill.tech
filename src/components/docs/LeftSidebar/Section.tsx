import { useMemo, useState } from "react";
import cn from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import { MinusIcon, PlusIcon } from "@instill-ai/design-system";

import { SidebarItem } from "@/types/docs";

export type SectionProps = {
  text: string;
  items: SidebarItem[];
  collapsible?: boolean;
  link?: string;
};

export const Section = ({ text, items, collapsible, link }: SectionProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        <h2 className="my-auto flex-1 text-sm font-semibold text-black dark:text-instillGrey15">
          {text}
        </h2>
        {sectionIsCollapsable ? (
          <div className="my-auto p-[3px] hover:bg-instillGrey20 dark:hover:bg-instillGrey80">
            {collapsed ? (
              <PlusIcon
                width="w-4"
                height="h-4"
                color="fill-instillGrey95 dark:fill-instillGrey05"
              />
            ) : (
              <MinusIcon
                width="w-4"
                height="h-4"
                color="fill-instillGrey95 dark:fill-instillGrey05"
              />
            )}
          </div>
        ) : null}
      </div>
      <div
        className={cn("flex flex-col gap-y-2", {
          hidden: collapsed,
        })}
      >
        {items.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className={cn(
              "text-sm font-normal transition duration-300 ease-in-out hover:text-instillSkyBlue dark:hover:text-instillSkyBlue",
              item.link === router.asPath.split("#")[0]
                ? "text-instillSkyBlue"
                : "text-instillGrey80 dark:text-instillGrey30"
            )}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </section>
  );
};
