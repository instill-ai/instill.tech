import * as React from "react";
import { LoadingSpin } from "@/components/ui";
import { Button, Icons, Input } from "@instill-ai/design-system";

export const SEOArticleWriter = () => {
  const [spinner, setSpinner] = React.useState(false);

  const handleGenerate = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  return (
    <div className="h-[660px] w-[500px] rounded-sm border-md border-semantic-accent-default bg-white p-6">
      <h3 className="mb-3 font-semibold leading-none">SEO article writer</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-600">
        Create and inspire using the worlds fastest-growing open-source AI
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
          onClick={() => handleGenerate()}
        >
          Generate
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
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="Nature"
          />
        )}
      </div>
    </div>
  );
};
