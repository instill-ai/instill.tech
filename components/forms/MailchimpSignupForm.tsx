import { FC, useEffect } from "react";
import * as classNames from "classnames";

interface Props {}

export const MailchimpSignupForm: FC<Props> = () => {
  const inputStyle =
    "flex-grow text-instillGray95 border border-instillGray50 py-1 px-2 max-h-[36px]";
  const fieldTitleStyle = "instill-text-body text-instillGray95";

  useEffect(() => {
    const mailchimpScript = document.createElement("script");

    mailchimpScript.src =
      "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    mailchimpScript.async = true;
    mailchimpScript.defer = true;

    // const script = document.createElement("script");
    // script.type = "text/javascript";
    // script.innerHTML = `(function ($) {window.fnames = new Array();window.ftypes = new Array();fnames[0] = 'EMAIL';ftypes[0] = 'email';fnames[1] = 'FNAME';ftypes[1] = 'text';fnames[2] = 'LNAME';ftypes[2] = 'text';fnames[3] = 'COMPANY';ftypes[3] = 'text';fnames[5] = 'ORG_URL';ftypes[5] = 'url';fnames[4] = 'ORG_SIZE';ftypes[4] = 'dropdown';fnames[7] = 'AI_SIZE';ftypes[7] = 'dropdown';fnames[6] = 'WHY_JOIN';ftypes[6] = 'text';}(jQuery));var $mcj = jQuery.noConflict(true)`;

    const style = document.createElement("style");
    style.innerHTML =
      "#mc_embed_signup div.mce_inline_error{ background-color: #FFFFFF !important; font-size: 12px !imporrtant; color: #FF5353 !important; font-weight: 400 !important; padding: 0 !important; }";

    document.head.appendChild(mailchimpScript);
    document.head.appendChild(style);
    // document.head.appendChild(script);

    return () => {
      document.head.removeChild(mailchimpScript);
      //document.head.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    // Begin Mailchimp Signup Form
    <div id="mc_embed_signup" className="bg-white p-10">
      <form
        id="mc-embedded-subscribe-form"
        action="https://tech.us2.list-manage.com/subscribe/post?u=01e7d5733aaa59d21ac12a1c8&amp;id=40bfc06254"
        method="post"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate={true}
      >
        <div id="mc_embed_signup_scroll" className="flex flex-col gap-y-5">
          <div className="mc-field-group flex flex-col gap-y-2">
            <label className={fieldTitleStyle} htmlFor="mce-EMAIL">
              Email Address <span>*</span>
            </label>
            <input
              id="mce-EMAIL"
              type="email"
              name="EMAIL"
              className={classNames.default(inputStyle, "required")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            <div className="mc-field-group flex flex-col gap-y-2">
              <label htmlFor="mce-FNAME" className={fieldTitleStyle}>
                First Name<span>*</span>
              </label>
              <input
                id="mce-FNAME"
                type="text"
                name="FNAME"
                className={classNames.default(inputStyle, "required")}
              />
            </div>
            <div className="mc-field-group flex flex-col gap-y-2">
              <label htmlFor="mce-LNAME" className={fieldTitleStyle}>
                Last Name<span>*</span>
              </label>
              <input
                id="mce-LNAME"
                type="text"
                name="LNAME"
                className={classNames.default(inputStyle, "required")}
              />
            </div>
          </div>

          <div className="mc-field-group flex flex-col gap-y-2">
            <label htmlFor="mce-COMPANY" className={fieldTitleStyle}>
              Company<span>*</span>
            </label>
            <input
              id="mce-COMPANY"
              type="text"
              name="COMPANY"
              className={classNames.default(inputStyle, "required")}
            />
          </div>
          <div className="mc-field-group flex flex-col gap-y-2">
            <label htmlFor="mce-ORG_URL" className={fieldTitleStyle}>
              Company website
            </label>
            <input
              id="mce-ORG_URL"
              type="url"
              name="ORG_URL"
              className={classNames.default(inputStyle)}
            />
          </div>
          <div className="mc-field-group flex flex-col gap-y-2">
            <label htmlFor="mce-ORG_SIZE" className={fieldTitleStyle}>
              Size of your company<span>*</span>
            </label>
            <select
              id="mce-ORG_SIZE"
              name="ORG_SIZE"
              className={classNames.default(inputStyle, "required")}
            >
              <option value="" />
              <option value="&lt; 5">&lt; 5</option>
              <option value="5 - 10">5 - 10</option>
              <option value="10 - 50">10 - 50</option>
              <option value="&gt; 50">&gt; 50</option>
            </select>
          </div>
          <div className="mc-field-group flex flex-col gap-y-2">
            <label htmlFor="mce-AI_SIZE" className={fieldTitleStyle}>
              Size of your AI team<span>*</span>
            </label>
            <select
              id="mce-AI_SIZE"
              name="AI_SIZE"
              className={classNames.default(inputStyle, "required")}
            >
              <option value="" />
              <option value="None">None</option>
              <option value="&lt; 5">&lt; 5</option>
              <option value="5 - 10">5 - 10</option>
              <option value="10 - 20">10 - 20</option>
              <option value="&gt; 20">&gt; 20</option>
            </select>
          </div>
          <div className="mc-field-group flex flex-col gap-y-2">
            <label htmlFor="mce-WHY_JOIN" className={fieldTitleStyle}>
              Why are you interested in Instill AI?
              <span>*</span>
            </label>
            <input
              id="mce-WHY_JOIN"
              type="text"
              name="WHY_JOIN"
              className={classNames.default(inputStyle, "required")}
            />
          </div>
          <div className="mc-field-group hidden">
            <label htmlFor="mce-group[87613]">Form source </label>
            <select
              name="group[87613]"
              className="REQ_CSS"
              id="mce-group[87613]"
              defaultValue={16}
            >
              <option value="" />
              <option value="8">Newsletter</option>
              <option value="16">Early access</option>
            </select>
          </div>
          <div id="mce-responses" className="clear">
            <div
              id="mce-error-response"
              className="response"
              style={{ display: "none" }}
            />
            <div
              id="mce-success-response"
              className="response"
              style={{ display: "none" }}
            />
          </div>

          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_01e7d5733aaa59d21ac12a1c8_40bfc06254"
              tabIndex={-1}
            />
          </div>
          <div className="clear flex w-full">
            <input
              id="mc-embedded-subscribe"
              type="submit"
              value="Submit"
              name="subscribe"
              className="button text-base cursor-pointer flex-grow py-3 text-instillGray05 bg-instillBlue30 hover:bg-[#236698]"
            />
          </div>
        </div>
      </form>
    </div>
    // <!--End mc_embed_signup-->  )
  );
};
