import { FC } from 'react';
import CustomLink from '../../components/CustomLink';
import CareerMainPageLayout from '../../components/CareerMainPageContext';
import CareerPositionList from '../../components/lists/CareerPositionList';
import { getInstillOpenPositions } from '../../lib/airtable';
import { AirtablePositionRecord } from '../../types/airtable';

interface Props {
  positions: AirtablePositionRecord[];
}

const CareerPage: FC<Props> = ({ positions }) => {
  return (
    <div className="flex flex-col">
      <CareerMainPageLayout />
      <CareerPositionList positions={positions} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const positions = await getInstillOpenPositions();
  return {
    props: {
      positions,
    },
  };
};

export default CareerPage;
