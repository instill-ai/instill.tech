import { FC } from 'react';
import { AirtablePositionRecord } from '../../types/airtable';
import ReactMarkdown from 'react-markdown';
import ReactMarkdownWrapper from '../ReactMarkdownWrapper';

interface Props {
  position: AirtablePositionRecord;
}

const PositionDetailLayout: FC<Props> = ({ position }) => {
  return (
    <div className="flex flex-col font-sans">
      <h2 className="text-3xl font-semibold mb-2">{position.fields.title}</h2>
      <div className="flex flex-row gap-x-2 text-lg font-light mb-8">
        <div>{position.fields.working_time}</div>
        <div>|</div>
        <div>{position.fields.location}</div>
      </div>
      <div className="text-base mb-8">{position.fields.intro}</div>
      <h3 className="text-2xl font-semibold mb-2">What you'll be doing</h3>
      <div className="text-base mb-8">
        <ReactMarkdownWrapper content={position.fields.your_responsibility} />
      </div>
      <h3 className="text-2xl font-semibold mb-2">Things we'd love to see</h3>
      <div className="text-base mb-8">
        <ReactMarkdownWrapper content={position.fields.our_criteria} />
      </div>
      <h3 className="text-2xl font-semibold mb-2">Package</h3>
      <ul className="list-disc list-inside">
        <li>{position.fields.salary}</li>
        <li>{position.fields.stock_options}</li>
      </ul>
    </div>
  );
};

export default PositionDetailLayout;
