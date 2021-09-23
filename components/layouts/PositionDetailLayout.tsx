import { FC } from 'react';
import { InstillPosition } from '../../types/airtable';

interface Props {
  position: InstillPosition;
}

const PositionDetailLayout: FC<Props> = ({ position }) => {
  return (
    <div className="flex flex-col font-sans">
      <h2 className="text-3xl font-semibold mb-2">{position.title}</h2>
      <div className="flex flex-row gap-x-2 text-lg font-light mb-8">
        <div>{position.working_time}</div>
        <div>|</div>
        <div>{position.location}</div>
      </div>
      <div className="text-base mb-8">{position.intro}</div>
      <h3 className="text-2xl font-semibold mb-2">What you'll be doing</h3>
      <div className="text-base mb-8">{position.your_responsibility}</div>
      <h3 className="text-2xl font-semibold mb-2">Things we'd love to see</h3>
      <div className="text-base mb-8">{position.our_criteria}</div>
      <h3 className="text-2xl font-semibold mb-2">Package</h3>
      <ul className="list-disc list-inside">
        <li>
          {position.salary}
        </li>
        <li>
          {position.stock_options}
        </li>
      </ul>
    </div>
  );
};

export default PositionDetailLayout;
