export type TableOfContentProps = {
  headers: {
    slug: string;
    text: string;
  }[];
};

const TableOfContent = ({ headers }: TableOfContentProps) => {
  return (
    <>
      <h2 className="mb-4">On this page</h2>
      <ul>
        {headers.map((header) => (
          <li
            key={header.slug}
            className="group my-2.5 border-l-2 border-slate-300 py-0.5 pl-4 text-sm hover:border-slate-700"
          >
            <a
              className="block truncate text-slate-600 group-hover:text-slate-900"
              href={`#${header.slug}`}
            >
              {header.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TableOfContent;
