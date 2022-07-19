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
  } catch (error: any) {
    if (error.response && error.response.body.title === "Member Exists") {
      return Promise.reject("MemberExists");
    }

    return Promise.reject(error.message || error.toString());
  }
};

/**
 *
 * This function will remove following string
 *
 * - `*|FNAME|*`
 * - `*|MC_PREVIEW_TEXT|*`
 * - `** GitHub (https://github.com/instill-ai)`
 * - `** Blog (https://blog.instill.tech/)`
 * - `** Facebook (https://www.facebook.com/instilltech)`
 * - `** Twitter (https://twitter.com/instill_tech)`
 * - `Copyright © *|CURRENT_YEAR\\|* *|LIST:COMPANY|*, All rights reserved.`
 * - `*|IFNOT:ARCHIVE_PAGE|* *|LIST:DESCRIPTION|*`
 * - `Our mailing address is:`
 * - `*|LIST_ADDRESS|* *|END:IF|*`
 * - `Want to change how you receive these emails?`
 * - `You can ** update your preferences (*|UPDATE_PROFILE|*)`
 * - `or ** unsubscribe from this list (*|UNSUB|*)`
 * - `*|IF:REWARDS|* *|REWARDS_TEXT|* *|END:IF|*`
 * - `**`
 *
 * @param content - mailchimp plain-text or html string
 * @returns
 */

export const removePlaceholderAndFooterWords = (content: string): string => {
  // Mailchimp's plain text has lots of template literal, we have to remove that
  let removeWords = [
    "\\*\\|FNAME\\|\\*",
    "\\*\\|MC_PREVIEW_TEXT\\|\\*",
    "============================================================",
    "\\*\\* GitHub \\(https://github.com/instill-ai\\)",
    "\\*\\* Blog \\(https://blog.instill.tech/\\)",
    "\\*\\* Facebook \\(https://www.facebook.com/instilltech\\)",
    "\\*\\* Twitter \\(https://twitter.com/instill_tech\\)",
    "Copyright © \\*\\|CURRENT_YEAR\\|\\* \\*\\|LIST:COMPANY\\|\\*, All rights reserved.",
    "\\*\\|IFNOT:ARCHIVE_PAGE\\|\\* \\*\\|LIST:DESCRIPTION\\|\\*",
    "Our mailing address is:",
    "\\*\\|LIST_ADDRESS\\|\\* \\*\\|END:IF\\|\\*",
    "Want to change how you receive these emails\\?",
    "You can \\*\\* update your preferences \\(\\*\\|UPDATE_PROFILE\\|\\*\\)",
    "or \\*\\* unsubscribe from this list \\(\\*\\|UNSUB\\|\\*\\)",
    "\\*\\|IF:REWARDS\\|\\* \\*\\|REWARDS_TEXT\\|\\* \\*\\|END:IF\\|\\*",
    "\\*\\*",
  ];

  let re = new RegExp(removeWords.join("|"), "gi");
  return content.replace(re, () => {
    return "";
  });
};
