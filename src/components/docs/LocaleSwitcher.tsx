import { Dropdown } from "@instill-ai/design-system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const languages: { [key: string]: string } = {
  en: "English",
  zh_CN: "Chinese",
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale, locale } = router;

  const [isOpen, setIsOpen] = useState(false);

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  return (
    <Dropdown.Menu open={isOpen}>
      <Dropdown.MenuTrigger className="flex flex-row gap-x-2 focus:outline-none">
        <p
          className="my-auto cursor-pointer text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {locale ? languages[locale] : ""}
        </p>
      </Dropdown.MenuTrigger>
      <Dropdown.MenuContent
        className="dark:bg-instillGrey90"
        onPointerDownOutside={() => setIsOpen(!isOpen)}
      >
        {otherLocales.map((locale, index) => {
          const { pathname, query, asPath } = router;
          return (
            <Dropdown.MenuItem key={`${index}-lang`}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior
                className=""
              >
                <p
                  className="my-auto cursor-pointer text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {languages[locale]}
                </p>
              </Link>
            </Dropdown.MenuItem>
          );
        })}
      </Dropdown.MenuContent>
    </Dropdown.Menu>
  );
}
