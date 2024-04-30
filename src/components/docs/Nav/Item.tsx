import Image from "next/image";

import {
  isBorder,
  isExteriorLink,
  isInteriorLink,
  NavbarItem,
} from "@/types/docs";
import { useRouter } from "next/router";
import cn from "clsx";
import { isRouterActive } from "@/lib/instill";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export type ItemProps = {
  item: NavbarItem;
  isDropdownItem?: boolean;
};

export const Item = ({ item, isDropdownItem }: ItemProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  if (isBorder(item)) {
    return (
      <div className="grid grid-cols-1 py-2 md:grid-cols-2">
        <div className="border-b border-black dark:border-instillGrey05 md:border-r" />
      </div>
    );
  }

  if (isInteriorLink(item)) {
    return (
      <Link href={item.to} className="my-auto">
        <div className={cn("flex flex-row gap-x-1", item.className)}>
          {item.label && (
            <p
              className={cn(
                "my-auto text-sm font-normal ",
                !isDropdownItem
                  ? "hover:text-semantic-accent-on-bg dark:hover:text-semantic-accent-on-bg"
                  : "",
                isRouterActive(router.asPath, item.to)
                  ? "text-semantic-accent-on-bg"
                  : "text-black dark:text-instillGrey15"
              )}
            >
              {t(item.label)}
            </p>
          )}

          {item.iconElement ? item.iconElement : null}
        </div>
      </Link>
    );
  }

  if (isExteriorLink(item)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="my-auto block"
      >
        {item.icon ? (
          <Image
            src={item.icon.src}
            width={item.icon.width}
            height={item.icon.height}
            sizes={`${item.icon.width}px`}
            alt={item.icon.alt}
          />
        ) : item.iconElement ? (
          <div className={cn("flex flex-row gap-x-1", item.className)}>
            {item.label && (
              <p
                className={cn(
                  "my-auto text-sm font-normal text-black  dark:text-instillGrey15",
                  !isDropdownItem
                    ? "hover:text-semantic-accent-on-bg dark:hover:text-semantic-accent-on-bg"
                    : ""
                )}
              >
                {t(item.label)}
              </p>
            )}

            {item.iconElement}
          </div>
        ) : (
          <p
            className={cn(
              "my-auto text-sm font-normal text-black dark:text-instillGrey15",
              !isDropdownItem
                ? "hover:text-semantic-accent-on-bg dark:hover:text-semantic-accent-on-bg"
                : ""
            )}
          >
            {t(item.label)}
          </p>
        )}
      </a>
    );
  }

  return null;
};
