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
    // if (!link) {
    if (items.length === 0) return false;
    return collapsible;
    // } else {
    // return false;
    // }
  }, [link, collapsible, items]);

  if (isHeader) {
    return (
      <h1 className="mb-3 mt-4 flex-1 text-sm font-semibold uppercase text-black dark:text-instillGrey15">
        {t(text)}
      </h1>
    );
  }

  return (
    <section className={cn("flex w-full flex-col pb-1 pt-1")}>
      <div
        role="button"
        className={cn(
          "flex flex-row px-1 py-1.5 hover:rounded hover:bg-instillGrey20",
          collapsible ? { "mb-1": !collapsed } : "",
          link === router.asPath && !isHeader
            ? "rounded bg-instillBlue10 !font-bold text-instillBlue50 hover:bg-instillBlue10"
            : ""
        )}
      >
        <Link
          href={link || ""}
          key={link + "header-key"}
          className="my-auto flex-1 pl-1 text-sm dark:text-instillGrey15"
        >
          {t(text)}
        </Link>

        {collapsible ? (
          <div
            className={cn(
              "my-auto dark:hover:bg-instillGrey80",
              link === router.asPath
                ? "bg-instillBlue10 hover:bg-instillBlue10"
                : " hover:bg-instillGrey20"
            )}
          >
            {collapsed ? (
              <Icons.ChevronRight
                className={cn(
                  "h-5 w-5 ",
                  link === router.asPath
                    ? "stroke-instillBlue50"
                    : "stroke-slate-500"
                )}
                onClick={toggle}
              />
            ) : (
              <Icons.ChevronDown
                className={cn(
                  "h-5 w-5 stroke-slate-500",
                  link === router.asPath
                    ? "stroke-instillBlue50"
                    : "stroke-slate-500"
                )}
                onClick={toggle}
              />
            )}
          </div>
        ) : null}
      </div>
      <div
        className={cn(
          "ml-3 flex flex-col gap-y-1 border-l-[1px] border-instillGrey30",
          {
            hidden: collapsed,
          }
        )}
      >
        {items.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className={cn(
              "ml-2 py-1.5 pl-2 text-sm font-normal transition duration-300 ease-in-out hover:rounded hover:bg-instillGrey20 dark:hover:text-instillBlue50",
              item.link === router.asPath.split("#")[0]
                ? "rounded bg-instillBlue10 !font-bold text-instillBlue50 hover:bg-instillBlue10"
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
