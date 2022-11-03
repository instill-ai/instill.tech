import Image from "next/future/image";

import { isExteriorLink, isInteriorLink, NavbarItem } from "@/types/docs";

export type ItemProps = {
  item: NavbarItem;
};

export const Item = ({ item }: ItemProps) => {
  if (isInteriorLink(item)) {
    return (
      <a className="my-auto text-sm font-normal" href={item.to}>
        {item.label}
      </a>
    );
  }

  if (isExteriorLink(item)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferer noreferrer"
        className="my-auto flex"
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
          <p className="my-auto">{item.label}</p>
        )}
      </a>
    );
  }

  return null;
};
