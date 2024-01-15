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
import { useSwiper } from "swiper/react";

const defaultSummary =
  'The product is Instill Cloud, a no-code/low-code AI platform.\n\nReference on page → "Meet Instill Cloud, a no-code/low-code platform that accelerates AI application development by 10x."';

type Preview = {
  keyword: string;
  content: string;
  emoji: string;
};

type Summary = {
  summary: string;
  previews: Preview[];
};

export const SummaryCard = ({ summary }: { summary: Preview }) => {
  return (
    <p className="my-2 text-sm text-zinc-500 xl:text-[16px]">
      {summary.emoji}{" "}
      <span className="text-sm font-medium text-black xl:text-[16px]">
        {summary.keyword}:
      </span>{" "}
      {summary.content}{" "}
    </p>
  );
};

export const AskOnPage = () => {
  const swiper = useSwiper();
  const [spinner, setSpinner] = React.useState(false);
  const [summaryList, setSummaryList] = React.useState<string>("");
  const [summaryImage, setSummaryImage] = React.useState<string>("");
  const [input, setInput] = React.useState<string>("");
  const [question, setQuestion] = React.useState<string>("");

  const handleGenrate = async () => {
    setSpinner(true);
    swiper.autoplay.stop();
    const apiResponse = await JumbotronSDK.askOnPage({
      inputs: [
        {
          webpage: input,
          question: question,
        },
      ],
    });

    if (apiResponse.status === "success") {
      const summaryString: string = apiResponse.data.outputs[0].answer[0];
      setSummaryImage(summaryImage);
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
        <h3 className="my-auto product-body-text-1-semibold">Ask on Page</h3>
      </div>
      <div className="px-6">
        <div className="flex flex-row pt-4">
          <div className="my-auto w-full pr-1">
            <p className="text-sm font-medium text-black xl:text-[16px]">
              Answer questions related to a webpage.
            </p>
          </div>
          <div className="flex items-start justify-end">
            <SolidButton
              color="primary"
              position="w-full gap-x-2 flex justify-center py-[9px]"
              onClickHandler={() => {
                if (input) {
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

        <div className="my-[18px] flex flex-row gap-x-2">
          <div className="w-full space-y-2">
            <Input.Root className="w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="https://www.instill.tech"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Input.Root>
            <Input.Root className="w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="What’s the product?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <div className="ask-on-page-box flex items-center justify-center">
          {spinner ? (
            <div>Generating...</div>
          ) : (
            <div className="ask-on-page-box w-full overflow-y-auto border">
              <div className="px-2 py-3">
                <pre className="xl:product-body-text-2-regula flex w-full flex-1 items-center whitespace-pre-line text-semantic-fg-primary product-body-text-3-regular xl:product-body-text-2-regular">
                  {summaryList ? summaryList : defaultSummary}
                </pre>
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-end">
          <a
            href="https://console.instill.tech/instill-wombat/pipelines/jumbotron-ask-on-page"
            target="_blank"
            className="absolute bottom-3 right-6 z-30 inline-flex items-center gap-x-2 divide-x divide-zinc-100/10 rounded bg-zinc-800/80 p-0 px-2 text-sm text-white drop-shadow-2xl backdrop-blur hover:text-blue-500"
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
