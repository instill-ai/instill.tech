import axios from "axios";
import { InstillPosition, AirtablePositionRecord } from "../../types/airtable";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_CAREER_BASE_ID = process.env.AIRTABLE_CAREER_BASE_ID;
const AIRTABLE_CRREER_TABLE_TITLE = process.env.AIRTABLE_CRREER_TABLE_TITLE;
export const airtableCareerTableUrl = `https://api.airtable.com/v0/${AIRTABLE_CAREER_BASE_ID}/${AIRTABLE_CRREER_TABLE_TITLE}?api_key=${AIRTABLE_API_KEY}`;

interface AirtableRecords {
  records: AirtablePositionRecord[]
}

export const getInstillOpenPositions = async (): Promise<AirtablePositionRecord[]> => {
  try {
    const res = await axios.get<AirtableRecords>(airtableCareerTableUrl)
    return Promise.resolve(res.data.records)
  } catch(err){
    return Promise.reject(err)
  }
};