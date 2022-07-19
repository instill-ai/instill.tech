export interface InstillPosition {
  slug: string;
  title: string;
  working_time: string;
  status: string;
  location: string;
  salary: string;
  stock_options: string;
  intro: string;
  your_responsibility: string;
  our_criteria: string;
}

export interface AirtablePositionRecord {
  id: string;
  fields: InstillPosition;
  createdTime: string;
}
