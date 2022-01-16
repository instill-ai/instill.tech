import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER, // e.g. us1
});

export const addMemberIntoMailchimpList = async (email: string) => {
  if (!email) {
    return Promise.reject("EmailIsRequired");
  }

  try {
    await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
      {
        email_address: email,
      }
    );

    return Promise.resolve("Success");
  } catch (error) {
    console.log(error);
    if (error.response && error.response.body.title === "Member Exists") {
      return Promise.reject("MemberExists");
    }
    return Promise.reject(error.message || error.toString());
  }
};
