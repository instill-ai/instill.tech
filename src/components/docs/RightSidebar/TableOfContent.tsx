import { MouseEvent, useCallback } from "react";

export type TableOfContentProps = {
  headers: {
    slug: string;
    text: string;
  }[];
};

const TableOfContent = ({ headers }: TableOfContentProps) => {
  // const handleClick = useCallback(
  //   (e: MouseEvent<HTMLAnchorElement>, slug: string) => {
  //     //e.preventDefault();
  //     document.querySelector(`#${slug}`).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   },
  //   []
  // );

  return (
    <div className="flex flex-col mb-10">
      <h2 className="mb-4 text-instillGrey95 font-semibold">On this page</h2>
      <ul>
        {headers.map((header) => (
          <li
            key={header.slug}
            className="group my-2.5 border-l-2 border-slate-300 py-0.5 pl-4 text-sm hover:border-instillBlue50"
          >
            <a
              className="block truncate text-instillGrey50 group-hover:text-instillBlue50"
              href={`#${header.slug}`}
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
