import { useMemo, useState } from "react";
import cn from "clsx";
import { SidebarItem } from "@/types/docs";
import { useRouter } from "next/router";
import { CollapseRightIcon } from "@instill-ai/design-system";
import Link from "next/link";

export type SectionProps = {
  text: string;
  items: SidebarItem[];
  collapsible?: boolean;
  link?: string;
};

const Section = ({ text, items, collapsible, link }: SectionProps) => {
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
        <h2 className="my-auto flex-1 text-sm font-semibold">{text}</h2>
        {sectionIsCollapsable ? (
          <div className="my-auto">
            <CollapseRightIcon
              width="w-3"
              height="h-3"
              color="fill-instillGrey95"
              position={cn("my-auto", collapsed ? "-rotate-90" : "rotate-90")}
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
          <Link key={item.link} href={item.link}>
            <a
              key={item.text}
              className={cn(
                "text-sm hover:text-instillBlue50 font-normal transition ease-in-out duration-300",
                item.link === router.asPath.split("#")[0]
                  ? "text-instillBlue50"
                  : "text-instillGrey80"
              )}
            >
              {item.text}
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Section;
