import { FormEvent, useRef, useState } from "react";
import { ArrowRightIcon, TextButton } from "@instill-ai/design-system";
import cn from "clsx";

export type SubscribeNewsletterFormProps = {
  position?: string;
  width?: string;
};

const SubscribeNewsletterForm = ({
  position,
  width,
}: SubscribeNewsletterFormProps) => {
  const email = useRef<HTMLInputElement | null>(null);
  const [warn, setWarn] = useState(false);
  const [message, setMessage] = useState<string>();

  const subscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    setMessage("Cheers! Welcome aboard.");
  };

  return (
    <form onSubmit={subscribe} className={cn(position, width)}>
      <div className="my-auto flex w-full flex-col gap-y-1 sm:ml-auto">
        <div className="flex flex-col gap-y-2 sm:gap-y-0">
          <div className="mb-1.5 flex flex-row justify-end gap-x-2.5 border border-instillGrey05">
            <input
              aria-label="Email for newsletter"
              placeholder="Your email..."
              type="email"
              ref={email}
              className="instill-text-small my-auto flex h-12 w-full flex-grow rounded-[1px] bg-instillGrey95 px-5 text-instillGrey15 instill-input-no-highlight"
            />
            <TextButton
              color="primary"
              type="submit"
              itemGapX="gap-x-5"
              endIcon={
                <ArrowRightIcon
                  width="w-4"
                  height="h-4"
                  position="my-auto"
                  color="fill-instillBlue50 group-hover:fill-instillBlue80"
                />
              }
            >
              <p className="my-auto">Subscribe</p>
            </TextButton>
          </div>
          <div className="flex">
            <p
              className={cn(
                "instill-text-small",
                warn ? "text-instill_red" : "text-instillGrey05"
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

export default SubscribeNewsletterForm;
