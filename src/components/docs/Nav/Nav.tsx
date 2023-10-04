import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import cn from "clsx";
import Link from "next/link";
import { DocSearch } from "@docsearch/react";
import { Item } from "./Item";
import { NavConfig, NavbarItem } from "@/types/docs";
import { SubNav } from "./SubNav";
import { CrossIcon, MenuIcon, Dropdown } from "@instill-ai/design-system";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useRouter } from "next/router";
import { getApplicationType } from "@/lib/instill";
import { applicationName } from "@/lib/instill/applicationType";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslation } from "next-i18next";

export type NavProps = {
  nav: NavConfig;
  setLeftSidebarIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DropdownMenu = ({
  item,
  isMobile,
}: {
  item: NavbarItem;
  isMobile: boolean;
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const appType = getApplicationType(router.asPath);

  const [isOpen, setIsOpen] = useState(false);

  let dropdownMenus: NavbarItem[] | undefined = [];

  if (item.key === "docs-nav-dropdown-version-menu") {
    dropdownMenus = item.items?.filter((item) => item.appType === appType);
  } else {
    dropdownMenus = item.items?.filter(
      (item) => item.appType !== (appType === "cloud" ? "core" : appType)
    );
  }

  return (
    <Dropdown.Menu key={item.key} open={isOpen}>
      <Dropdown.MenuTrigger className="flex flex-row gap-x-1 focus:outline-none">
        <p
          onMouseEnter={() => setIsOpen(!isOpen)}
          className="navbar-dropdown-menu my-auto flex flex-row gap-x-1 text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50"
        >
          {item.label}
          {item.iconElement ? item.iconElement : null}
        </p>
      </Dropdown.MenuTrigger>
      <Dropdown.MenuContent
        className="dark:bg-instillGrey90"
        side="bottom"
        align="start"
        key={item.key + "dropdown-menu-content"}
        onPointerDownOutside={() => setIsOpen(!isOpen)}
      >
        {dropdownMenus?.map((subItem) => {
          const subItemKey = subItem.key;
          if (subItem.border) {
            return (
              <Dropdown.MenuLabel
                className="dark:text-instillGrey15"
                key={subItemKey}
                onClick={() => setIsOpen(!isOpen)}
              >
                {t(subItem.label)}
              </Dropdown.MenuLabel>
            );
          }
          if (subItem.border === false) {
            return <Dropdown.MenuSeparator key={item.key} />;
          } else {
            return (
              <Dropdown.MenuItem
                key={subItemKey}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Item key={subItemKey} item={subItem} />
              </Dropdown.MenuItem>
            );
          }
        })}
      </Dropdown.MenuContent>
    </Dropdown.Menu>
  );
};

const ItemList = ({
  items,
  isMobile,
}: NavConfig & { isMobile: boolean }): ReactElement => {
  const renderedItems = items.map((item) => {
    if (item.items) {
      return <DropdownMenu item={item} isMobile={isMobile} key={item.key} />;
    } else {
      if (isMobile) {
        return (
          <div key={item.key}>
            <Item item={item} />
          </div>
        );
      }
      return <Item key={item.key} item={item} />;
    }
  });

  return <>{renderedItems}</>; // Wrap the array of JSX elements in a fragment and return
};

export const Nav = ({ nav, setLeftSidebarIsOpen }: NavProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const items = useMemo(() => {
    const left: NavbarItem[] = [];
    const right: NavbarItem[] = [];

    nav.items.forEach((item) => {
      if (item.position === "right") {
        right.push(item);
      } else {
        left.push(item);
      }
    });

    return { left, right };
  }, [nav]);

  const mobileView = useMemo(() => {
    return (
      <>
        <style jsx>
          {`
            .docs-mobile-nav-list {
              top: calc(var(--docs-nav-height) + var(--docs-sub-nav-height));
            }
          `}
        </style>
        <div className="flex md:hidden">
          <button
            className="my-auto flex h-[36px] w-[36px] rounded-[3px] bg-instillGrey05 hover:bg-instillGrey20 dark:bg-instillGrey90 dark:hover:bg-instillGrey80"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {mobileNavOpen ? (
              <CrossIcon
                width="w-6"
                height="h-6"
                color="fill-instillGrey90 dark:fill-instillGrey15"
                position="m-auto"
              />
            ) : (
              <MenuIcon
                width="w-6"
                height="h-6"
                color="fill-instillGrey90 dark:fill-instillGrey15"
                position="m-auto"
              />
            )}
          </button>
          {mobileNavOpen && (
            <div className="docs-mobile-nav-list fixed left-0 z-40 flex h-screen w-full flex-col gap-y-4 bg-white px-4 py-10 dark:bg-instillGrey90">
              <ItemList items={items.left} isMobile={true} />
              <ItemList items={items.right} isMobile={true} />
              {/* <ThemeToggle /> */}
            </div>
          )}
        </div>
      </>
    );
  }, [mobileNavOpen, items.left, items.right]);

  const desktopView = useMemo(() => {
    return (
      <>
        <div className="hidden flex-grow flex-row md:flex">
          <div
            className={cn(
              "flex flex-row gap-x-5",
              items.left.length === 0 ? "flex-shrink" : "grow"
            )}
          >
            <ItemList items={items.left} isMobile={false} />
          </div>
          <div
            className={cn(
              "flex flex-row justify-end gap-x-5",
              items.right.length === 0 ? "flex-shrink" : "grow"
            )}
          >
            <ItemList items={items.right} isMobile={false} />
          </div>
          {/* <div className="my-auto ml-4">
            <ThemeToggle />
          </div> */}
        </div>
      </>
    );
  }, [items]);

  return (
    <>
      <style jsx>
        {`
          .nav {
            min-height: var(--docs-nav-height);
          }
        `}
      </style>

      <nav
        className={cn(
          "nav fixed top-0 z-10 w-screen border-b border-b-instillGrey30 bg-white bg-opacity-80 px-8 py-2 backdrop-blur-sm dark:border-b-instillGrey80 dark:bg-instillGrey90"
        )}
      >
        <div className="container mx-auto flex flex-row">
          {!nav.logo && !nav.title ? null : (
            <div className="logo mr-4 flex">
              <Link
                href={nav.logo ? nav.logo?.href : ""}
                className="flex flex-row gap-x-3"
              >
                {nav.logo ? nav.logo.element : null}
              </Link>
            </div>
          )}

          <div className="mx-5 my-auto">
            <DocSearch
              appId={process.env.NEXT_PUBLIC_ALGOLIA_DOCSEARCH_APP_ID || ""}
              apiKey={process.env.NEXT_PUBLIC_ALGOLIA_DOCSEARCH_APP_KEY || ""}
              indexName="instill"
            />
          </div>

          <div className="flex flex-1 flex-row">
            <div className="flex flex-grow flex-row justify-end">
              {desktopView}
              {mobileView}

              <div className="mx-5 my-auto">
                <ThemeToggle />
              </div>
              <div className="mx-1 my-auto">
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SubNav
        marginBottom={"my-4"}
        setLeftSidebarIsOpen={setLeftSidebarIsOpen}
      />
    </>
  );
};
