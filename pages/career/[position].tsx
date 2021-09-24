import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { getInstillOpenPositions } from '../../lib/airtable';
import { AirtablePositionRecord } from '../../types/airtable';
import { GetServerSideProps } from 'next';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import PositionDetailLayout from '../../components/layouts/PositionDetailLayout';
import BaseContainer from '../../components/BaseContainer';
import SectionContainer from '../../components/SectionContainer';

interface Props {
  position: AirtablePositionRecord;
}

const Career: FC<Props> = ({ position }) => {
  return (
    <BaseContainer>
      <SectionContainer>
        <div className="flex flex-col">
          <NavBar />
          <div className="flex flex-row">
            <PositionDetailLayout position={position} />
          </div>
          <Footer />
        </div>
      </SectionContainer>
    </BaseContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const positions: AirtablePositionRecord[] = await getInstillOpenPositions();
  const positionSlug = context.params.position;
  const index = positions.findIndex((e) => e.fields.slug === positionSlug);
  const position = positions[index];
  return {
    props: {
      position,
    },
  };
};

export default Career;
