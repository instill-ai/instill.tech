import axios from "axios"
import { AirtableCareer } from "../../types/airtable";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_CAREER_BASE_ID = process.env.AIRTABLE_CAREER_BASE_ID;
const AIRTABLE_CRREER_TABLE_TITLE = process.env.AIRTABLE_CRREER_TABLE_TITLE;

export const getAirtableData = async (): Promise<AirtableCareer> => {
  const url = `https://api.airtable.com/v0/${AIRTABLE_CAREER_BASE_ID}/${AIRTABLE_CRREER_TABLE_TITLE}?api_key=${AIRTABLE_API_KEY}`;
  try {
    const res = await axios.get(url);
  } catch(err){
    return Promise.reject(err)
  }
};
