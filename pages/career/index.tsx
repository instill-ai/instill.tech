import { FC, useContext, useEffect } from 'react';
import CareerMainPageContext from '../../components/CareerMainPageContext';
import CareerPositionList from '../../components/lists/CareerPositionList';
import { getInstillOpenPositions } from '../../lib/airtable';
import { AirtablePositionRecord } from '../../types/airtable';
import BaseContainer from '../../components/BaseContainer';
import SectionContainer from '../../components/SectionContainer';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { CareerPositionsContext } from '../../contexts/CareerPositionsContext';

interface Props {
  positions: AirtablePositionRecord[];
}

const CareerPage: FC<Props> = ({ positions }) => {
  const { setPositions } = useContext(CareerPositionsContext);
  useEffect(() => {
    if (positions.length === 0) {
      return;
    }

    setPositions(positions);
  }, []);

  return (
    <BaseContainer>
      <SectionContainer>
        <div className="flex flex-col">
          <NavBar />
          <CareerMainPageContext />
          <CareerPositionList positions={positions} />
          <Footer />
        </div>
      </SectionContainer>
    </BaseContainer>
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
