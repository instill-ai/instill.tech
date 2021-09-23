import { FC } from 'react';
import { AirtablePositionRecord } from '../../types/airtable';
import CustomLink from '../CustomLink';

interface Props {
  positions: AirtablePositionRecord[];
}

const CareerPositionList: FC<Props> = ({ positions }) => {
  return (
    <div className="flex flex-col">
      {positions.map((position) => (
        <div>
          <CustomLink href={`/career/${position.fields.slug}`}>{position.fields.title}</CustomLink>
        </div>
      ))}
    </div>
  );
};

export default CareerPositionList;
