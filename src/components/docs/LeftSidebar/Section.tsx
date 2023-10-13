import { useMemo, useState } from "react";
import cn from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import { Icons, MinusIcon, PlusIcon } from "@instill-ai/design-system";

import { SidebarItem } from "@/types/docs";
import { useTranslation } from "next-i18next";

export type SectionProps = {
  text: string;
  items: SidebarItem[];
  collapsible?: boolean;
  link?: string;
  isHeader?: boolean;
};

export const Section = ({
  text,
  items,
  collapsible,
  link,
  isHeader,
}: SectionProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);

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

  if (isHeader) {
    return (
      <h1 className="Dflex-1 mb-3 mt-4 text-sm font-semibold uppercase text-black dark:text-instillGrey15">
        {t(text)}
      </h1>
    );
  }

  return (
    <section className={cn("flex w-full flex-col pb-1 pt-1")}>
      <div
        onClick={link ? toLink : toggle}
        role="button"
        className={cn(
          "flex flex-row px-1.5 py-1.5 hover:rounded hover:bg-instillGrey20",
          sectionIsCollapsable ? { "mb-1": !collapsed } : "",
          link === router.asPath && !isHeader ? "rounded bg-instillGrey20" : ""
        )}
      >
        <p className="my-auto flex-1 pl-2 text-sm font-normal text-black dark:text-instillGrey15">
          {t(text)}
        </p>

        {sectionIsCollapsable ? (
          <div className="my-auto hover:bg-instillGrey20 dark:hover:bg-instillGrey80">
            {collapsed ? (
              <Icons.ChevronRight className="h-5 w-5 stroke-slate-500" />
            ) : (
              <Icons.ChevronDown className="h-5 w-5 stroke-slate-500" />
            )}
          </div>
        ) : null}
      </div>
      <div
        className={cn("flex flex-col gap-y-1", {
          hidden: collapsed,
        })}
      >
        {items.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className={cn(
              "ml-4 py-1.5 pl-2.5 text-sm font-normal transition duration-300 ease-in-out hover:rounded hover:bg-instillGrey20 dark:hover:text-instillBlue50",
              item.link === router.asPath.split("#")[0]
                ? "rounded bg-instillGrey20 text-instillGrey95"
                : "text-instillGrey80 dark:text-instillGrey30"
            )}
          >
            {t(item.text)}
          </Link>
        ))}
      </div>
    </section>
  );
};
