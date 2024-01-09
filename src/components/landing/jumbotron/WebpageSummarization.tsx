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

const defaultSummary: Summary = {
  summary: "Detailed guide on hiking the Seven Sisters Cliffs Walk in the UK",
  previews: [
    {
      keyword: "Trail Overview",
      content:
        "20 km walk, Seaford to Eastbourne, great views, no maps needed.",
      emoji: "🚶",
    },
    {
      keyword: "Directions & Tips",
      content:
        "Accessible by train, check tides, avoid bad weather, bring good shoes.",
      emoji: "🚉",
    },
    {
      keyword: "Trail Highlights",
      content:
        "Scenic cliffs, iconic Cuckmere Haven beach, perfect for photography.",
      emoji: "📷",
    },
    {
      keyword: "Personal Experience",
      content:
        "Great for soul searching and bonding with friends during tough times.",
      emoji: "❤️",
    },
    {
      keyword: "End of Trail",
      content:
        "Ends in Eastbourne with amenities, food, and opportunities to relax.",
      emoji: "🍦",
    },
  ],
};

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

export const WebpageSummarization = () => {
  const swiper = useSwiper();
  const [spinner, setSpinner] = React.useState(false);
  const [summaryList, setSummaryList] = React.useState<Nullable<Summary>>(null);
  const [summaryImage, setSummaryImage] = React.useState<string>("");
  const [input, setInput] = React.useState<string>("");

  const handleGenrate = async () => {
    setSpinner(true);
    swiper.autoplay.stop();
    const apiResponse = await JumbotronSDK.webpageSummarization({
      inputs: [
        {
          webpage: input,
        },
      ],
    });

    if (apiResponse.status === "success") {
      const summaryString: Summary = JSON.parse(
        apiResponse.data.outputs[0].summary[0]
      );
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
      setSummaryList(null);
    }

    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  return (
    <div className="jumbotron-card border bg-white xl:!border-none">
      <div className="bg-[#F8F9FC] p-3">
        <h3 className="my-auto product-body-text-1-semibold">
          Webpage Summary
        </h3>
      </div>
      <div className="px-6">
        <div className="flex flex-row pt-4">
          <div className="w-full pr-2">
            <p className="block text-sm font-medium text-black sm:hidden xl:text-[16px]">
              Enter a webpage, summarize like Arc ...
            </p>
            <p className="hidden text-sm font-medium text-black sm:block xl:text-[16px]">
              Enter a webpage, summarize like Arc Max&apos;s &quot;5 Second
              Previews&quot;.
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
                placeholder="https://www.letstrekit.com/seven-sisters-cliffs-walk"
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
            <div className="space-y-4">
              <div className="summary-box w-auto overflow-y-auto border">
                <div className="px-2 py-3">
                  <p className="text-sm text-black xl:text-[16px]">
                    {summaryList?.summary ||
                      "Detailed guide on hiking the Seven Sisters Cliffs Walk in the UK"}
                  </p>

                  {summaryList
                    ? summaryList.previews.map((summary) => (
                        <SummaryCard summary={summary} key={summary.keyword} />
                      ))
                    : defaultSummary.previews.map((summary) => (
                        <SummaryCard summary={summary} key={summary.keyword} />
                      ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-end">
          <a
            href="https://console.instill.tech/instill-wombat/pipelines/jumbotron-webpage-5-sec-previews"
            target="_blank"
            className="absolute bottom-3 right-6 z-30 inline-flex items-center gap-x-2 divide-x divide-zinc-100/10 rounded bg-zinc-800/80 p-0 px-2 text-sm text-white drop-shadow-2xl backdrop-blur hover:text-blue-500 "
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
