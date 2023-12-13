import { LoadingSpin } from "@/components/ui";
import stabilityAIOpenAISticker from "@/lib/jumbotron/stabilityAIOpenAISticker";
import { Button, Icons, Input, toast } from "@instill-ai/design-system";
import React, { useState } from "react";

export const StabilityAIOpenAISticker = () => {
  const [spinner, setSpinner] = useState(false);
  const [article, setArticle] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("Cat");
  const [shape, setShape] = useState<string>("Square");

  const handleGenrate = async () => {
    setSpinner(true);

    const apiResponse = await stabilityAIOpenAISticker({
      inputs: [
        {
          prompts: [prompt],
          shape: shape,
        },
      ],
    });

    if (apiResponse.status === "success") {
      const sticker: string = apiResponse.data.outputs[0].ai_gen_stickers[0];
      setArticle(sticker);
    } else {
      console.error("API Error:", apiResponse.error);
    }
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  return (
    <div className="h-[700px] w-[500px] rounded-sm border-md border-semantic-accent-default bg-white p-6">
      <h3 className="mb-3 font-semibold leading-none">
        Stability AI + Open AI for Sticker
      </h3>
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
          <Input.Root className="w-full">
            <Input.Core
              disabled={false}
              type="text"
              placeholder="Shape"
              value={shape}
              onChange={(e) => setShape(e.target.value)}
            />
          </Input.Root>
        </div>
        <div className="w-1/3">
          <Button
            variant="primary"
            size="md"
            className="my-auto w-full gap-x-2"
            onClick={() => handleGenrate()}
            disabled={prompt && shape ? false : true}
          >
            Genrate
            {spinner ? (
              <LoadingSpin />
            ) : (
              <Icons.Play className="h-5 w-5 stroke-semantic-bg-primary" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex h-[430px] items-center justify-center">
        {spinner ? (
          <div>Generating...</div>
        ) : (
          <React.Fragment>
            {article ? (
              <img src={article} className="my-auto h-[430px]" />
            ) : (
              <img src="/images/cat.png" className="my-auto h-[430px]" />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
