import { useState } from "react";
import cn from "clsx";
import IconMinusSquare from "./IconMinusSquare";
import IconPlusSquare from "./IconPlusSquare";
import { SidebarElement } from "@/types/docs";

export type SectionProps = {
  text: string;
  items: SidebarElement[];
  collapsible?: boolean;
  currentPagePath: string;
};

const Section = ({
  text,
  items,
  collapsible,
  currentPagePath,
}: SectionProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const baseIconStyle =
    "absolute w-4 h-4 top-2 bottom-2 right-2 fill-instillGrey500";

  const toggle = () => {
    if (collapsible) {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <section
      className={cn("flex w-full flex-col pt-2", collapsed ? "pb-2" : "pb-6")}
    >
      <div
        onClick={toggle}
        role={collapsible ? "button" : undefined}
        className={cn("flex flex-row", { "mb-4": !collapsed })}
      >
        <h2 className="my-auto flex-1 text-sm font-semibold">{text}</h2>
        {collapsible ? (
          <div className="relative h-8 w-8">
            <IconMinusSquare
              styleName={
                collapsed
                  ? cn(baseIconStyle, "opacity-0")
                  : cn(baseIconStyle, "opacity-1")
              }
            />
            <IconPlusSquare
              styleName={
                collapsed
                  ? cn(baseIconStyle, "opacity-1")
                  : cn(baseIconStyle, "opacity-0")
              }
            />
          </div>
        ) : (
          <div className="relative h-8 w-8" />
        )}
      </div>
      <div
        className={cn("flex flex-col gap-y-2", {
          hidden: collapsed,
        })}
      >
        {items.map((item) => (
          <a
            key={item.text}
            className={cn(
              "text-sm font-normal hover:text-instillGrey80",
              item.link === currentPagePath.slice(1)
                ? "text-instillGrey80"
                : "text-instillGrey50"
            )}
            href={item.link}
          >
            {item.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Section;
