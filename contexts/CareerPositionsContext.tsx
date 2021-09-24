import { createContext, ComponentType, useContext, useState } from 'react';
import { AirtablePositionRecord } from '../types/airtable';

interface CareerPositionsContextInterface {
  positions: AirtablePositionRecord[] | any[];
  setPositions?: Function;
}

interface Props {}

const defaultValue = {
  positions: [],
};

export const CareerPositionsContext = createContext<CareerPositionsContextInterface>(defaultValue);

const CareerPositionsProvider: ComponentType<Props> = ({ children }) => {
  const [positions, setPositions] = useState<AirtablePositionRecord[]>([]);
  return (
    <CareerPositionsContext.Provider value={{ positions, setPositions }}>
      {children}
    </CareerPositionsContext.Provider>
  );
};

// export const useCareerPositionsContext = () => {
//   return useContext(ctx)
// }

export default CareerPositionsProvider;
