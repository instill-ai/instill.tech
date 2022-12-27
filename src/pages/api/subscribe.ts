import mailchimp, { Status } from "@mailchimp/mailchimp_marketing";
import { NextApiRequest, NextApiResponse } from "next";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER, // e.g. us1
});

export const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(500)
      .json({ status: "error", error: "Email is required" });
  }

  if (!process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID) {
    return;
  }

  try {
    await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: "subscribed" as Status,
      }
    );

    return res.status(201).json({ status: "success", error: "" });
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    if (error.response && error.response.body.title === "Member Exists") {
      return res.status(500).json({ status: "error", error: "MemberExists" });
    }
    return res
      .status(500)
      .json({ status: "error", error: error.message || error.toString() });
  }
};

export default subscribe;
