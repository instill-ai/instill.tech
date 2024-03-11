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
import { useSwiper } from "swiper/react";

export const StabilityAIOpenAISticker = () => {
  const swiper = useSwiper();
  const [spinner, setSpinner] = React.useState(false);
  const [article, setArticle] = React.useState<string>("");
  const [prompt, setPrompt] = React.useState<string>("");

  const handleGenrate = async () => {
    setSpinner(true);
    if (swiper) {
      swiper.autoplay.stop();
    }
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
    <div className="jumbotron-card border bg-white xl:!border-none">
      <div className="bg-[#F8F9FC] p-3">
        <p className="my-auto product-body-text-1-semibold">Sticker Maker</p>
        {/* <ToastWithHook variant="alert-error" /> */}
      </div>
      <div className="px-6">
        <div className="flex flex-row pt-4">
          <div className="my-auto w-full pr-2">
            <p className="text-sm font-medium text-black xl:text-[16px]">
              Create a sticker by entering keywords.
            </p>
          </div>
          <div className="flex items-start justify-end">
            <SolidButton
              position="my-auto w-full gap-x-2 py-[9px] flex justify-center"
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
                <LoadingSpin className="my-auto !h-4 !w-4" />
              ) : (
                <Icons.PlayCircle className="my-auto h-4 w-4 stroke-semantic-bg-primary" />
              )}
            </SolidButton>
          </div>
        </div>

        <div className="my-[18px] flex gap-x-4">
          <div className="w-full space-y-2">
            <Input.Root className="w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="A wombat wearing sun glasses digging a hole"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="open-ai-stiker flex items-center justify-center">
          {spinner ? (
            <div>Generating...</div>
          ) : (
            <React.Fragment>
              <div className="open-ai-stiker flex w-full flex-wrap overflow-auto bg-[#F8F9FC]">
                {article ? (
                  <img src={article} className="my-auto object-contain" />
                ) : (
                  <React.Fragment>
                    <img
                      src="/images/wombat.png"
                      className="open-ai-stiker mx-auto my-auto object-contain"
                    />
                    {/* <img
                      src="/images/wombat-mobile.png"
                      className="open-ai-stiker mx-auto my-auto block object-contain xl:hidden"
                    /> */}
                  </React.Fragment>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="mt-5 flex justify-end">
          <a
            href="https://www.instill.tech/instill-wombat/pipelines/jumbotron-sticker-maker"
            target="_blank"
            className="absolute bottom-3 right-6 z-30 inline-flex items-center gap-x-2 divide-x divide-zinc-100/10 rounded bg-zinc-800/80 p-0 px-2 text-sm font-normal text-white no-underline drop-shadow-2xl backdrop-blur hover:text-blue-500 "
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
