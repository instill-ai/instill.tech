import { LoadingSpin } from "@/components/ui";
import stabilityAIOpenAISticker from "@/lib/jumbotron/stabilityAIOpenAISticker";
import { Button, Icons, Input, toast } from "@instill-ai/design-system";
import React, { useState } from "react";

export const StabilityAIOpenAISticker = () => {
  const [spinner, setSpinner] = useState(false);
  const [article, setArticle] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("Cat");

  const handleGenrate = async () => {
    setSpinner(true);

    const apiResponse = await stabilityAIOpenAISticker({
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
          Stability AI + Open AI for Sticker
        </p>

        {/* <ToastWithHook variant="alert-error" /> */}
      </div>
      <div className="px-3 pt-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          Create and inspire using the worlds fastest growing open source AI
          platform
        </p>

        <div className="my-6 flex gap-x-4">
          <div className="w-2/3 space-y-2">
            <Input.Root className="w-full">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="Prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </Input.Root>
          </div>
          <div className="w-1/3">
            <Button
              variant="primary"
              size="md"
              className="my-auto w-full gap-x-2"
              onClick={() => handleGenrate()}
              disabled={prompt ? false : true}
            >
              Generate
              {spinner ? (
                <LoadingSpin />
              ) : (
                <Icons.Play className="h-5 w-5 stroke-semantic-bg-primary" />
              )}
            </Button>
          </div>
        </div>

        <div className="open-ai-stiker flex items-center justify-center">
          {spinner ? (
            <div>Generating...</div>
          ) : (
            <React.Fragment>
              <div className="flex w-full flex-wrap">
                {article ? (
                  <img src={article} className="my-auto object-contain" />
                ) : (
                  <img
                    src="/images/cat.png"
                    className="open-ai-stiker mx-auto my-auto"
                  />
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
