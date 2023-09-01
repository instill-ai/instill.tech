import cn from "clsx";
import { useEffect, useState } from "react";
import { Nullable } from "@/types/instill";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export type TableOfContentProps = {
  headers: {
    slug: string;
    text: string;
    depth: number;
  }[];
};

export const TableOfContent = ({ headers }: TableOfContentProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const onThisPageID = "on-this-page-heading";
  const [currentHash, setCurrentHash] = useState<Nullable<string>>(null);

  useEffect(() => {
    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          if (id === onThisPageID) continue;
          setCurrentHash(entry.target.id);
          break;
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: "-140px 0% -66%",
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions
    );

    // Observe all the headings in the main page content.
    document
      .querySelectorAll("article :is(h1,h2,h3,h4,h5)")
      .forEach((h) => headingsObserver.observe(h));

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect();
  }, [router]);

  return (
    <div className="mb-10 flex flex-col">
      <h2
        className="mb-4 font-semibold text-instillGrey95 dark:text-instillGrey15"
        id={onThisPageID}
      >
        {t("common:onThisPage")}
      </h2>
      <ul>
        {headers.map((header) => (
          <li
            key={header.slug}
            className={cn(
              "group my-1.5 border-l-2 py-0.5 pl-[15px] text-sm hover:border-instillBlue50",
              currentHash === header.slug
                ? "border-instillBlue50"
                : "border-instillGrey50"
            )}
          >
            <a
              className={cn(
                "block truncate group-hover:text-instillBlue50",
                currentHash === header.slug
                  ? "text-instillBlue50"
                  : "text-instillGrey50"
              )}
              href={`#${header.slug}`}
              style={{ paddingLeft: `${(header.depth - 2) * 12}px` }}
              onClick={() => setCurrentHash(header.slug)}
            >
              {header.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
