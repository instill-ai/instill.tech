import { LoadingSpin } from "@/components/ui";
import { JumbotronSDK } from "@/lib/jumbotron-sdk";
import {
  Icons,
  Input,
  Nullable,
  SolidButton,
  toast,
} from "@instill-ai/design-system";
import * as React from "react";
import { useSwiper } from "swiper/react";

const defaultAnswer = `Oh no, sorry to hear that you're not feeling good today! 😔 Can you tell me more about how you're feeling? Sometimes talking about it can help. 🤗 Is there anything in particular that's bothering you, or do you just feel generally unwell?`;

export const Llama27bChat = () => {
  const swiper = useSwiper();
  const [spinner, setSpinner] = React.useState(false);
  const [llama2_7b_chat, setLlama2_7b_chat] =
    React.useState<Nullable<string>>("");
  // const [llama2_7b, setLlama2_7b] = React.useState<Nullable<string>>("");
  const [question, setQuestion] = React.useState<string>("");

  const handleGenrate = async () => {
    setSpinner(true);
    if (swiper) {
      swiper.autoplay.stop();
    }

    const apiResponse = await JumbotronSDK.llama27bChat({
      inputs: [
        {
          prompt: question,
        },
      ],
    });

    if (apiResponse.status === "success") {
      const llama2_7b_chat: string = apiResponse.data.outputs[0].llama2_7b_chat;
      // const llama2_7b: string = apiResponse.data.outputs[0].llama2_7b_output;
      setLlama2_7b_chat(llama2_7b_chat);
      // setLlama2_7b(llama2_7b);
    } else {
      toast({
        title: "Error!",
        description: apiResponse.error,
        size: "large",
        variant: "alert-error",
      });
      setLlama2_7b_chat("");
    }
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  return (
    <div className="jumbotron-card bg-white xl:border-none">
      <div className="bg-[#F8F9FC] p-3">
        <h3 className="my-auto product-body-text-1-semibold">AI compananion</h3>
      </div>
      <div className="px-6">
        <div className="flex flex-row pt-4">
          <div className="my-auto w-full pr-2">
            <p className="text-sm font-medium text-black xl:text-[16px]">
              Start a conversation with AI model
            </p>
          </div>

          <div className="flex items-start justify-end">
            <SolidButton
              color="primary"
              type="button"
              position="w-full gap-x-2 py-[9px] flex justify-center"
              onClickHandler={() => {
                handleGenrate();
              }}
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
            <Input.Root className="my-auto w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="I don't feel good today"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="h-[500px] w-full overflow-y-auto border px-2 py-3 xl:h-[500px]">
            <pre className="flex w-full whitespace-pre-line text-semantic-fg-primary product-body-text-3-regular xl:product-body-text-2-regular">
              {llama2_7b_chat ? llama2_7b_chat : defaultAnswer}
            </pre>
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <a
            href="https://instill.tech/instill-wombat/pipelines/llama2-7b-chat"
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
