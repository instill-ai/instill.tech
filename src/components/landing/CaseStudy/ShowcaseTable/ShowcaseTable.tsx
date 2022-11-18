/* eslint-disable react/no-array-index-key*/
import cn from "clsx";

export type ShowcaseTableProps = {
  tables: { name: string; head: string[]; rows: string[][] }[];
  position?: string;
};

export const ShowcaseTable = ({ tables, position }: ShowcaseTableProps) => {
  return (
    <div
      className={cn(
        "flex h-[254px] w-[240px] flex-col overflow-hidden sm:h-[355px] sm:w-[336px]"
      )}
    >
      {tables.map((table, i) => (
        <table
          key={`case-study-showcase-table-${table.name}`}
          className={cn(
            "h-full w-full table-auto border-collapse border border-instillGrey20",
            position
          )}
        >
          <thead>
            <tr>
              <th className="border border-instillGrey20 bg-instillGrey80 bg-opacity-60" />
              {table.head.map((e, i) => (
                <th
                  key={`case-study-showcase-table-head-${e}-${i}`}
                  className="border border-instillGrey20 bg-instillGrey80 bg-opacity-60 p-2 font-mono text-xs font-normal text-instillGrey20"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={`case-study-showcase-table-row-${row}-${i}`}>
                <td className="w-[1%] border border-instillGrey20 bg-instillGrey80 bg-opacity-60 px-4 font-mono text-xs font-normal text-instillGrey20">
                  {i + 1}
                </td>
                {row.map((item, i) => (
                  <td
                    key={`case-study-showcase-table-cell-${item}-${i}`}
                    className="max-w-[100px] break-all border border-instillGrey20 bg-instillGrey90 bg-opacity-40 p-2 text-right text-xs font-normal text-instillNeonBlue"
                  >
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
};
