export type TableOfContentProps = {
  headers: any[];
  headerMinDepth: number;
  headerMaxDepth: number;
};

const TableOfContent = ({
  headers,
  headerMinDepth,
  headerMaxDepth,
}: TableOfContentProps) => {
  return (
    <>
      <h2 className="mb-4">On this page</h2>
      <ul>
        {headers
          .filter(
            ({ depth }) => depth >= headerMinDepth && depth <= headerMaxDepth
          )
          .map((header) => (
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
