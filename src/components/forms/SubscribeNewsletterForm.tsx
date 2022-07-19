import { FC, FormEvent, useRef, useState } from "react";
import { SubscribeEmailButton } from "../ui/buttons/SubscribeEmailButton";
import * as classNames from "classnames";
import * as ga from "../../lib/google-analytic";

interface Props {
  styleName?: string;
}

export const SubscribeNewsletterForm: FC<Props> = ({ styleName }) => {
  const email = useRef<HTMLInputElement | null>(null);
  const [success, setSuccess] = useState(false);
  const [warn, setWarn] = useState(false);
  const [message, setMessage] = useState<string>();

  const subscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(false);

    if (email.current.value === "") {
      setWarn(true);
      setMessage("Please fill in your email address.");
      return;
    }

    // Fetch api endpoint for subscribing, Mailchimp's API doesn't have CORS enabled,
    // So it can't receive request from browser.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      if (error === "MemberExists") {
        setWarn(true);
        setMessage("You already subscribed to Instill AI newsletter.");
      } else {
        console.log(error);
        setWarn(true);
        setMessage("Something went wrong, please contact us");
      }
      return;
    }

    setSuccess(true);
    ga.eventHelpers.engagement("join_newsletter");
    setMessage("Cheers! Welcome aboard.");
  };

  return (
    <form onSubmit={subscribe} className={styleName}>
      <div className="my-auto flex w-full flex-col gap-y-1 sm:ml-auto">
        <div className="flex flex-col gap-y-2 sm:gap-y-0">
          <div className="mb-1.5 flex flex-row justify-end gap-x-2.5 border border-instillGray05">
            <input
              aria-label="Email for newsletter"
              placeholder="Your email..."
              type="email"
              ref={email}
              className="instill-text-small my-auto flex h-12 w-full flex-grow rounded-[1px] bg-instillGray95 px-5 text-instillGray15"
            />
            <SubscribeEmailButton styleName="instill-text-body" />
          </div>
          <div className="flex">
            <p
              className={classNames.default(
                "instill-text-small",
                warn ? "text-instill_red" : "text-instillGray05"
              )}
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
