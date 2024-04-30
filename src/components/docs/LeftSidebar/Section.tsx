import { useEffect, useState } from "react";
import cn from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import { Icons } from "@instill-ai/design-system";
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

  useEffect(() => {
    if (link && router.asPath) {
      if (!router.asPath.includes(link) === false) {
        setCollapsed(false);
      }
    }
  }, [link, router.asPath]);

  if (isHeader) {
    return (
      <h1 className="mb-3 mt-4 flex-1 text-sm font-semibold uppercase text-black dark:text-instillGrey05">
        {t(text)}
      </h1>
    );
  }

  return (
    <section className={cn("flex w-full flex-col pb-1 pt-1")}>
      <div
        role="button"
        className={cn(
          "flex flex-row px-1 py-1.5 hover:rounded hover:bg-instillGrey05 dark:text-instillGrey05 dark:hover:bg-instillGrey80",
          { "mb-1": !collapsed },
          link === router.asPath && !isHeader
            ? "rounded bg-semantic-accent-bg !font-bold !text-semantic-accent-on-bg hover:!bg-semantic-accent-bg"
            : ""
        )}
      >
        <Link
          href={link || ""}
          key={link + "header-key"}
          className="my-auto flex-1 pl-1 text-sm"
        >
          {t(text)}
        </Link>

        {collapsible ? (
          <div
            className={cn(
              "my-auto",
              link === router.asPath
                ? "bg-semantic-accent-bg hover:bg-semantic-accent-bg"
                : " hover:bg-instillGrey05 dark:hover:bg-instillGrey80"
            )}
          >
            {collapsed ? (
              <Icons.ChevronRight
                className={cn(
                  "h-5 w-5 ",
                  link === router.asPath
                    ? "stroke-semantic-accent-on-bg"
                    : "stroke-slate-500"
                )}
                onClick={toggle}
              />
            ) : (
              <Icons.ChevronDown
                className={cn(
                  "h-5 w-5 stroke-slate-500",
                  link === router.asPath
                    ? "stroke-semantic-accent-on-bg"
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
              "ml-2 py-1.5 pl-2 text-sm font-normal transition duration-300 ease-in-out hover:rounded hover:bg-instillGrey05 dark:text-instillGrey05 dark:hover:bg-instillGrey80",
              item.link === router.asPath.split("#")[0]
                ? "rounded bg-semantic-accent-bg !font-bold !text-semantic-accent-on-bg hover:!bg-semantic-accent-bg"
                : ""
            )}
          >
            {t(item.text)}
          </Link>
        ))}
      </div>
    </section>
  );
};
