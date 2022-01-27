import { FC, FormEvent, useRef, useState } from "react";
import { SubscribeEmailButton } from "../ui/buttons/SubscribeEmailButton";
import * as classNames from "classnames";
import * as ga from "../../lib/google-analytic";

interface Props {
  styleName?: string;
}

export const SubscriptionEmailForm: FC<Props> = ({ styleName }) => {
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
        setMessage("You already subscribed to Instill Ai newsletter.");
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
    <form onSubmit={subscribe}>
      <div className="flex flex-col w-full gap-y-1 my-auto sm:ml-auto">
        <div className="flex flex-col gap-y-2 sm:gap-y-0">
          <div className="flex flex-row gap-x-2.5 justify-end">
            <input
              aria-label="Email for newsletter"
              placeholder="Your email..."
              type="email"
              ref={email}
              className="w-full flex flex-grow my-auto h-12 px-5 bg-instillBlue85 instill-text-small text-instillGray15"
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
