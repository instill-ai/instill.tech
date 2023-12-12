import { LoadingSpin } from "@/components/ui";
import { Button, Icons, Input } from "@instill-ai/design-system";
import React, { useState } from "react";

export const Llama2Chat = () => {
  const [spinner, setSpinner] = useState(false);

  const handleGenrate = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  return (
    <div className="h-[660px] w-[500px] rounded-sm border-md border-semantic-accent-default bg-white p-6">
      <h3 className="mb-3 font-semibold leading-none">Llama2-7B-chat</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-600">
        Create and inspire using the worlds fastest growing open source AI
        platform
      </p>

      <div className="my-6 flex gap-x-4">
        <Input.Root className="w-full">
          <Input.Core
            disabled={false}
            type="text"
            placeholder="Send a message"
            value="Tell me a short story"
          />
        </Input.Root>
        <Button
          variant="primary"
          size="lg"
          className="gap-x-2"
          onClick={() => handleGenrate()}
        >
          Genrate
          {spinner ? (
            <LoadingSpin />
          ) : (
            <Icons.Play className="h-5 w-5 stroke-semantic-bg-primary" />
          )}
        </Button>
      </div>

      <div className="flex h-[448px] items-center justify-center">
        {spinner ? (
          <div>Generating...</div>
        ) : (
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        )}
      </div>
    </div>
  );
};
