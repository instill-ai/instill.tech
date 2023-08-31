import { Dropdown } from "@instill-ai/design-system";
import Link from "next/link";
import { useRouter } from "next/router";

export const languages: { [key: string]: string } = {
  en: "English",
  zh_CN: "Chinese(zh_CH)",
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale, locale } = router;

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  return (
    <Dropdown.Menu>
      <Dropdown.MenuTrigger className="flex flex-row gap-x-2 focus:outline-none">
        <p className="my-auto text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50">
          {locale ? languages[locale] : ""}
        </p>
      </Dropdown.MenuTrigger>
      <Dropdown.MenuContent>
        {otherLocales.map((locale, index) => {
          const { pathname, query, asPath } = router;
          return (
            <Dropdown.MenuItem key={`${index}-lang`}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior
              >
                <p className="my-auto text-sm font-normal text-black hover:text-instillBlue50 dark:text-instillGrey15 dark:hover:text-instillBlue50">
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
