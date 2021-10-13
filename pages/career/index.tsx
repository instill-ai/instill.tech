import { FC } from "react";
import { CareerMainPageContext } from "../../components/ui/texts/CareerMainPageContext";
import { CareerPositionList } from "../../components/lists/CareerPositionList";
import { getInstillOpenPositions } from "../../lib/airtable";
import { AirtablePositionRecord } from "../../types/airtable";
import { BaseContainer } from "../../components/layouts/BaseContainer";
import { SectionContainer } from "../../components/layouts/SectionContainer";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/ui/common/Footer";

interface Props {
  positions: AirtablePositionRecord[];
}

const CareerPage: FC<Props> = ({ positions }) => {
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

export default CareerPage;

export const getStaticProps = async () => {
  const positions = await getInstillOpenPositions();
  return {
    props: {
      positions,
    },
  };
};
