import { isExteriorLink, isInteriorLink, NavbarItem } from "@/types/docs";
import Image from "next/future/image";

export type ItemProps = {
  item: NavbarItem;
};

const Item = ({ item }: ItemProps) => {
  if (isInteriorLink(item)) {
    return (
      <a className="my-auto text-lg font-medium" href={item.to}>
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
        ) : (
          <p className="my-auto">{item.label}</p>
        )}
      </a>
    );
  }

  return null;
};

export default Item;
