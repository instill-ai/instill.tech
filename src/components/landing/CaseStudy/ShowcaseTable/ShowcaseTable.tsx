/* eslint-disable react/no-array-index-key*/

import cn from "clsx";

export type ShowCaseTableProps = {
  head: string[];
  rows: string[][];
  position?: string;
};

const ShowCaseTable = ({ head, rows, position }: ShowCaseTableProps) => {
  return (
    <table
      className={cn(
        "min-h-[355px] w-full max-w-[336px] table-auto border-collapse border border-instillGrey20",
        position
      )}
    >
      <thead>
        <tr>
          <th className="border border-instillGrey20 bg-instillGrey80 bg-opacity-60" />
          {head.map((e, i) => (
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
        {rows.map((row, i) => (
          <tr key={`case-study-showcase-table-row-${row}-${i}`}>
            <td className="border border-instillGrey20 bg-instillGrey80 bg-opacity-60 px-4 font-mono text-xs font-normal text-instillGrey20">
              {i + 1}
            </td>
            {row.map((item, i) => (
              <td
                key={`case-study-showcase-table-cell-${item}-${i}`}
                className="border border-instillGrey20 bg-instillGrey90 bg-opacity-40 p-2 text-right text-xs font-normal text-instillNeonBlue"
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShowCaseTable;
