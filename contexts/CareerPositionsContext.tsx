import { useState } from 'react';
import { FC, createContext, ComponentType, useContext } from 'react';
import { AirtablePositionRecord } from '../types/airtable';

interface CareerPositionsContextInterface {
  positions: AirtablePositionRecord[] | any[];
  setPositions?: Function;
}

interface Props {}

const defaultValue = {
  positions: [],
};

const ctx = createContext<CareerPositionsContextInterface>(defaultValue);

const CareerPositionsContext: ComponentType<Props> = ({ children }) => {
  const [positions, setPositions] = useState<AirtablePositionRecord[]>([]);
  return <ctx.Provider value={{ positions, setPositions }}>{children}</ctx.Provider>;
};

export const useCareerPositionsContext = () => {
  return useContext(ctx)
}

export default CareerPositionsContext;
