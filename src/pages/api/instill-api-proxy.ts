import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export type InstillAPIProxyRequestBody = {
  path: string;
  data: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  console.log(method, body);

  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  // console.log(process.env.NEXT_SERVER_INSTILL_API_TOKEN);

  if (!body) {
    return res.status(500).end("Body not provided");
  }

  if (!body.path) {
    return res.status(500).end("Path not provided");
  }

  if (!body.data) {
    return res.status(500).end("Data not provided");
  }

  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_SERVER_INSTILL_API_TOKEN}`,
      "Content-Type": "application/json",
      "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID ?? undefined,
      "CF-Access-Client-Secret":
        process.env.CF_ACCESS_CLIENT_SECRET ?? undefined,
    },
  });

  try {
    const response = await client.post(body.path, body.data);
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
