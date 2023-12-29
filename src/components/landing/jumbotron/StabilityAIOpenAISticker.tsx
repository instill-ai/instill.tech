import * as React from "react";

import { LoadingSpin } from "@/components/ui";
import { JumbotronSDK } from "@/lib/jumbotron-sdk";
import {
  Button,
  Icons,
  Input,
  SolidButton,
  toast,
} from "@instill-ai/design-system";

export const StabilityAIOpenAISticker = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [article, setArticle] = React.useState<string>("");
  const [prompt, setPrompt] = React.useState<string>("");

  const handleGenrate = async () => {
    setSpinner(true);

    const apiResponse = await JumbotronSDK.stabilityAIOpenAISticker({
      inputs: [
        {
          sticker_prompt: prompt,
        },
      ],
    });

    if (apiResponse.status === "success") {
      const sticker: string = apiResponse.data.outputs[0].ai_gen_stickers[0];
      setArticle(sticker);
    } else {
      toast({
        title: "Error!",
        description: apiResponse.error,
        size: "large",
        variant: "alert-error",
      });
      setArticle("");
    }
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  return (
    <div className="jumbotron-card border bg-white">
      <div className="bg-[#F8F9FC] p-3">
        <p className="my-auto product-body-text-1-semibold">
          Make digital stickers using keywords
        </p>

        {/* <ToastWithHook variant="alert-error" /> */}
      </div>
      <div className="px-6 pt-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          Enter simple keyword(s) describing the sticker, OpenAI will then make
          the prompt more descriptive and StabilityAI will generate the sticker.
        </p>

        <div className="my-6 flex gap-x-4">
          <div className="w-3/5 space-y-2 xl:w-4/5">
            <Input.Root className="w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="Wombat coding"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </Input.Root>
          </div>
          <div className="w-2/5 xl:w-1/5">
            <SolidButton
              position="my-auto w-full gap-x-2 py-[9px]"
              color="primary"
              onClickHandler={() => {
                if (prompt) {
                  handleGenrate();
                }
              }}
              type="button"
            >
              Run
              {spinner ? (
                <LoadingSpin />
              ) : (
                <Icons.PlayCircle className="my-auto h-4 w-4 stroke-semantic-bg-primary" />
              )}
            </SolidButton>
          </div>
        </div>

        <div className="open-ai-stiker flex items-center justify-center">
          {spinner ? (
            <div>Generating...</div>
          ) : (
            <React.Fragment>
              <div className="flex w-full flex-wrap overflow-auto">
                {article ? (
                  <img src={article} className="my-auto object-contain" />
                ) : (
                  <img
                    src="/images/wombat.png"
                    className="open-ai-stiker mx-auto my-auto object-contain"
                  />
                )}
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="mt-5 flex justify-end">
          <a
            href="https://console.instill.tech/admin/pipelines/jumbotron-sticker-maker/builder"
            target="_blank"
            className="absolute bottom-8 right-8 z-30 inline-flex items-center gap-x-2 divide-x divide-zinc-100/10 rounded bg-zinc-800/80 p-0 px-2 text-sm text-white drop-shadow-2xl backdrop-blur hover:text-blue-500"
          >
            <svg
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"></path>
              <path d="M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"></path>
            </svg>
            Build Your Own
          </a>
        </div>
      </div>
    </div>
  );
};
