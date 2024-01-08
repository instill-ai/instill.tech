import * as React from "react";
import { LoadingSpin } from "@/components/ui";
import { JumbotronSDK } from "@/lib/jumbotron-sdk";
import {
  Icons,
  Input,
  Nullable,
  SolidButton,
  toast,
} from "@instill-ai/design-system";

export const ResponderWithSpeech = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [summaryList, setSummaryList] = React.useState<Nullable<string>>("");
  const [input, setInput] = React.useState<string>("");

  const handleGenrate = async () => {
    setSpinner(true);
    const apiResponse = await JumbotronSDK.responderWithSpeech({
      inputs: [
        {
          prompt: input,
        },
      ],
    });

    if (apiResponse.status === "success") {
      const summaryString: string = apiResponse.data.outputs[0].audio;

      setSummaryList(summaryString);
    } else {
      console.error("API Error:", apiResponse.error);
      toast({
        title: "Error!",
        description: apiResponse.error,
        size: "large",
        variant: "alert-error",
      });
      setSummaryList("");
    }

    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  return (
    <div className="jumbotron-card border bg-white xl:!border-none">
      <div className="bg-[#F8F9FC] p-3">
        <h3 className="my-auto product-body-text-1-semibold">
          Likelife Speech
        </h3>
      </div>
      <div className="px-6">
        <div className="flex flex-row pt-4">
          <div className="my-auto w-3/5 pr-1 xl:w-4/5">
            <p className="text-sm font-medium text-black">
              Provide a prompt and listen for a response in speech
            </p>
          </div>

          <div className="w-2/5 xl:w-1/5">
            <SolidButton
              color="primary"
              position="my-auto w-full gap-x-2 flex justify-center py-[9px]"
              onClickHandler={() => {
                if (input) {
                  handleGenrate();
                }
              }}
              type="button"
            >
              Run
              {spinner ? (
                <LoadingSpin className="!h-4 !w-4" />
              ) : (
                <Icons.PlayCircle className="my-auto h-4 w-4 stroke-semantic-bg-primary" />
              )}
            </SolidButton>
          </div>
        </div>

        <div className="my-[18px] flex flex-row gap-x-2">
          <div className="w-full space-y-2">
            <Input.Root className="w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="Where will GenAI lead mankind?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="summary-box flex items-center justify-center">
          {spinner ? (
            <div>Generating...</div>
          ) : (
            <div className="summary-box flex h-full w-full items-center justify-center overflow-y-auto border p-2">
              {summaryList ? (
                <audio
                  src={summaryList || ""}
                  className="w-full"
                  controls
                >
                </audio>
              ) : (
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 19L1.5 29M12.75 21.5V26.5M24 9V39M35.25 1.5V46.5M46.5 19V29"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-end">
          <a
            href="https://console.instill.tech/instill-wombat/pipelines/jumbotron-lifelike-speech"
            target="_blank"
            className="absolute bottom-3 right-6 z-30 inline-flex items-center gap-x-2 divide-x divide-zinc-100/10 rounded bg-zinc-800/80 p-0 px-2 text-sm text-white drop-shadow-2xl backdrop-blur hover:text-blue-500 xl:bottom-4"
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
