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

const defaultArticle = `
      # AI: Building a Flourishing Community through Open Source

      ![AI Community](https://example.com/images/ai_community.jpg)

      ## Introduction

      In today's fast-paced technological landscape, Artificial Intelligence (AI) has emerged as a dominant force. AI is transforming industries and revolutionizing the way we live, work, and interact with technology. One of the key elements that is propelling AI forward is the power of an Open Source community. This article explores the significance of open source in building a flourishing AI community.

      ## The Power of Open Source

      Open Source is a collaborative approach where software and code are made freely available and can be modified, enhanced, and distributed by anyone. This philosophy has revolutionized the world of AI. By opening up AI frameworks, libraries, and tools, developers can collectively contribute to the advancement of AI. This fosters innovation, accelerates development, and enables the community to address complex challenges together.

      ## Building a Thriving AI Community

      Open Source has played a pivotal role in building a thriving AI community. Developers, researchers, and enthusiasts from all over the world can collaborate and exchange ideas freely. This promotes knowledge sharing, fosters diversity of perspectives, and encourages continuous learning. The AI community benefits from the collective intelligence, valuable insights, and novel solutions that emerge from this collaboration.

      ## Advantages of an Open Source AI Community

      1. **Accelerated Innovation:** Open Source fuels innovation by allowing collaborative experimentation and iteration, leading to rapid advancements in AI. The community can build on each other's work, improving existing technologies and fostering the creation of new tools.

      2. **Accessibility and Affordability:** Open Source democratizes AI by making state-of-the-art algorithms and models accessible to a wider audience. This promotes inclusivity, enabling individuals and organizations with limited resources to leverage AI capabilities.

      3. **Transparency and Trust:** In an open source community, the transparency of code fosters trust. Users can audit, review, and contribute to the codebase, ensuring that AI systems are built ethically, securely, and responsibly.

      4. **Collaboration with Industry and Academia:** Open Source encourages cross-collaboration between industry and academia. Researchers can share their findings, validate their work, and bridge the gap between theoretical advancements and real-world applications. This synergy accelerates the adoption of AI technologies.

      ## Conclusion

      Open Source has revolutionized the AI landscape, empowering a global community to collectively advance the field. By fostering collaboration, innovation, and accessibility, open source has become an essential driving force behind AI's success. As AI continues to evolve, the power of open source remains instrumental in building a flourishing AI community. Let us embrace the spirit of collaboration, contribute to open source projects, and continue pushing the boundaries of AI together.

      *Keywords: AI, community, open source*
`;
export const SEOArticleWriter = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [article, setArticle] = React.useState<string>("");
  const [articleImage, setArticleImage] = React.useState<string>("");
  const [input, setInput] = React.useState<string>("");
  const [sectionNumber, setSectionNumber] = React.useState<string>("");

  const handleGenrate = async () => {
    setSpinner(true);
    const apiResponse = await JumbotronSDK.seoArticle({
      inputs: [
        {
          keywords: input,
          section_number: Number(sectionNumber),
        },
      ],
    });

    if (apiResponse.status === "success") {
      const articleString: string =
        apiResponse.data.outputs[0].article.join("\n");

      const articleImage: string = apiResponse.data.outputs[0].article_img[0];

      setArticleImage(articleImage);
      setArticle(articleString);
    } else {
      console.error("API Error:", apiResponse.error);
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
        <h3 className="my-auto product-body-text-1-semibold">
          SEO Article Writer
        </h3>
      </div>
      <div className="px-6">
        <p className="pt-4 text-sm text-zinc-500 dark:text-zinc-600">
          Generate an article and cover image by providing SEO keywords.
        </p>

        <div className="my-[18px] flex flex-row gap-x-2">
          <div className="w-3/5 space-y-2 xl:w-4/5">
            <Input.Root className="w-full !rounded-none">
              <Input.Core
                disabled={false}
                type="text"
                placeholder="training, dogs, jokes"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Input.Root>
          </div>
          <div className="w-2/5 xl:w-1/5">
            <SolidButton
              color="primary"
              position="my-auto w-full gap-x-2 justify-center py-[9px]"
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

        <div className="open-ai-stiker flex items-center justify-center">
          {spinner ? (
            <div>Generating...</div>
          ) : (
            <div className="space-y-4">
              <div className="seo-box w-full overflow-y-auto border">
                <pre className="flex w-full flex-1 items-center whitespace-pre-line break-all px-1.5 py-1 text-semantic-fg-primary product-body-text-4-regular">
                  {article ? article : defaultArticle}
                </pre>
              </div>
              <div className="seo-image-box flex w-full flex-wrap overflow-auto border">
                {articleImage ? (
                  <img src={articleImage} className="my-auto object-contain" />
                ) : (
                  <img
                    src={"/images/seo.png"}
                    className="my-auto object-contain"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-end">
          <a
            href="https://console.instill.tech/admin/pipelines/jumbotron-seo-article-writer"
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
