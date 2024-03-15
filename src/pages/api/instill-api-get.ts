import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export type InstillAPIGetRequestBody = {
  path: string;
};

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;

  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      // Authorization: `Bearer ${process.env.NEXT_SERVER_INSTILL_API_TOKEN}`,
      "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID ?? undefined,
      "CF-Access-Client-Secret":
        process.env.CF_ACCESS_CLIENT_SECRET ?? undefined,
    },
  });

  try {
    const response = await client.get(body.path);
    return res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error) && error.response) {
      return res.status(error.response.status).json(error.response.data);
    } else {
      return res.status(500).json({ message: String(error) });
    }
  }
};

export default handler;
