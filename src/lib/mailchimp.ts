import mailchimp from "@mailchimp/mailchimp_marketing";
import { HTMLElement } from "node-html-parser";

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

export const removeMailchimpStyleAndMeta = (root: HTMLElement): HTMLElement => {
  // Mailchimp has meta, title and style tag, we need to remove it to avoid polluting our
  // website
  root.querySelectorAll("meta").forEach((e) => e.remove());
  root.querySelectorAll("title").forEach((e) => e.remove());
  root.querySelectorAll("link").forEach((e) => e.remove());
  root.querySelectorAll("style").forEach((e) => e.remove());

  // Remove mailchimp Footer
  root.querySelectorAll("#templateFooter").forEach((e) => e.remove());

  // Remove mailchimp h3 inline color style
  root.querySelectorAll("h3").forEach((e) => {
    let styleList = e.attributes.style.split(";");
    styleList = styleList.filter((style) => {
      return !style.includes("color:");
    });
    e.setAttribute("style", styleList.join(";"));
  });

  // Remove mailchimp h4 inline color style
  root.querySelectorAll("h4").forEach((e) => {
    let styleList = e.attributes.style.split(";");
    styleList = styleList.filter((style) => {
      return !style.includes("color:");
    });
    e.setAttribute("style", styleList.join(";"));
  });

  // Remove mailchimp p inline color style
  root.querySelectorAll("p").forEach((e) => {
    let styleList = e.attributes.style.split(";");
    styleList = styleList.filter((style) => {
      return !style.includes("color:");
    });
    e.setAttribute("style", styleList.join(";"));
  });

  // Remove mailchimp content divider
  root.querySelectorAll(".mcnDividerContent").forEach((e) => {
    let styleList = e.attributes.style.split(";");
    styleList = styleList.filter((style) => {
      return !style.includes("border-top:");
    });
    e.setAttribute("style", styleList.join(";"));
  });

  // Remove mailchimp content image fixed width
  root.querySelectorAll(".mcnImage").forEach((e) => {
    e.removeAttribute("width");
    let styleList = e.attributes.style.split(";");
    styleList = styleList.filter((style) => {
      return !style.includes("max-width:");
    });
    e.setAttribute("style", styleList.join(";"));

    e.classList.add("mx-auto");
    e.classList.add("md:max-w-full");
  });

  // Remove mailchimp Header logo image
  root.querySelectorAll("#templateHeader").forEach((e) => e.remove());

  return root;
};
