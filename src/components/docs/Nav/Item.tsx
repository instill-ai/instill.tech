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
};

export const Item = ({ item }: ItemProps) => {
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
      <Link
        className={cn(
          "my-auto text-sm font-normal hover:text-instillBlue50 dark:hover:text-instillBlue50",
          isRouterActive(router.asPath, item.to)
            ? "text-instillBlue50"
            : "text-black dark:text-instillGrey15"
        )}
        href={item.to}
      >
        <div className={cn("flex flex-row gap-x-1", item.className)}>
          {item.label && (
            <p className="my-auto text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50">
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
              <p className="my-auto text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50">
                {t(item.label)}
              </p>
            )}

            {item.iconElement}
          </div>
        ) : (
          <p className="my-auto text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50">
            {t(item.label)}
          </p>
        )}
      </a>
    );
  }

  return null;
};
