import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.url) {
    return res.status(500).json({ status: "error", error: "URL is required" });
  }

  try {
    const embedOptions = {
      url: req.body.url,

      // When set to dark, the timeline is displayed with light text over a dark background
      theme: "light",

      // Collection timelines only. Set to grid to display Tweets in a grid layout
      widget_type: "",

      // Do not include a script element in the response
      omit_script: false,

      // When set to true, the timeline and its embedded page on your site are not used for
      // purposes that include personalized suggestions and personalized ads
      dnt: true,

      // Display up to N items where N is a value between 1 and 20 inclusive
      limit: 20,

      // Remove a timeline display component with space-separated tokens
      chrome: "nofooter",
    };

    const params = Object.entries(embedOptions)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const response = await axios.get(
      `https://publish.twitter.com/oembed?${params}`
    );

    return res
      .status(201)
      .json({ status: "success", error: "", html: response.data.html });
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: "error", error: error.message || error.toString() });
  }
};

export default handler;
