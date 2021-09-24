import { FC } from 'react';
import CareerPositionsProvider from './CareerPositionsContext';

interface Props {}

const ContextWrapper: FC<Props> = ({ children }) => {
  return <CareerPositionsProvider>{children}</CareerPositionsProvider>;
};

export default ContextWrapper;
