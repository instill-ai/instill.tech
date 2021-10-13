import { FC } from "react";
import { AirtablePositionRecord } from "../../types/airtable";
import { CustomLink } from "../ui/common/CustomLink";

interface Props {
  positions: AirtablePositionRecord[];
}

export const CareerPositionList: FC<Props> = ({ positions }) => {
  return (
    <div className="flex flex-col gap-y-4">
      {positions.map((position) => (
        <CustomLink key={position.fields.slug} href={`/career/${position.fields.slug}`}>
          <div className="flex flex-row border border-gray-700 p-6 rounded-lg cursor-pointer hover:bg-gray-200">
            <div className="font-semibold text-xl my-auto">{position.fields.title}</div>
            <div className="flex flex-row ml-auto my-auto gap-x-6 ">
              <div className="py-1 px-3 border border-gray-700">{position.fields.working_time}</div>
              <div className="py-1 px-3 border border-gray-700">{position.fields.location}</div>
            </div>
          </div>
        </CustomLink>
      ))}
    </div>
  );
};
