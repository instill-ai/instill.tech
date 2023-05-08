import Image from "next/image";

import {
  isBorder,
  isExteriorLink,
  isInteriorLink,
  NavbarItem,
} from "@/types/docs";

export type ItemProps = {
  item: NavbarItem;
};

export const Item = ({ item }: ItemProps) => {
  if (isBorder(item)) {
    return (
      <div className="grid grid-cols-1 py-2 md:grid-cols-2">
        <div className="border-b border-black dark:border-instillGrey05 md:border-r" />
      </div>
    );
  }

  if (isInteriorLink(item)) {
    return (
      <a
        className="my-auto text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50"
        href={item.to}
      >
        {item.label}
      </a>
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
          item.iconElement
        ) : (
          <p className="my-auto text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50">
            {item.label}
          </p>
        )}
      </a>
    );
  }

  return null;
};
