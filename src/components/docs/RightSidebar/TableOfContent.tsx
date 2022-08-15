import cn from "clsx";
import { useEffect, useState } from "react";
import { Nullable } from "@/types/instill";
import { useRouter } from "next/router";

export type TableOfContentProps = {
  headers: {
    slug: string;
    text: string;
    depth: number;
  }[];
};

const TableOfContent = ({ headers }: TableOfContentProps) => {
  const router = useRouter();
  const [currentHash, setCurrentHash] = useState<Nullable<string>>(null);

  useEffect(() => {
    const handleHashChange = (event: HashChangeEvent) => {
      setCurrentHash(event.newURL.split("#")[1]);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (!router.isReady) return;

    setCurrentHash(router.asPath.split("#")[1]);
  }, [router]);

  return (
    <div className="flex flex-col mb-10">
      <h2 className="mb-4 text-instillGrey95 font-semibold">On this page</h2>
      <ul>
        {headers.map((header) => (
          <li
            key={header.slug}
            className={cn(
              "group border-l-2 my-1.5 py-0.5 pl-[15px] text-sm hover:border-instillBlue50",
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

export default TableOfContent;
