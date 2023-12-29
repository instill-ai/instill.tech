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
      # SEO: Boost Your Website's Ranking with These Top Strategies

      ## Introduction
      In today's digital world, having a strong online presence is crucial for businesses to succeed. One of the key ways to ensure your website gets noticed by search engines is by implementing effective SEO strategies. SEO, or Search Engine Optimization, is the practice of optimizing your website so that it ranks higher in search engine results pages (SERPs). This article will explore some of the top SEO strategies that can help boost your website's ranking and drive more organic traffic to your site.

      ## 1. Keyword Research
      One of the fundamental aspects of SEO is keyword research. By identifying the keywords and phrases that your target audience is searching for, you can optimize your website's content to match their search intent. Use keyword research tools, such as Google Keyword Planner or SEMrush, to find relevant keywords with a high search volume and relatively low competition.

      Once you have a list of keywords, strategically incorporate them into your website's meta titles, meta descriptions, headers, and content. However, remember to use keywords naturally and avoid keyword stuffing, as search engines increasingly prioritize user experience and quality content.

      ## 2. High-Quality Content
      Content is king in the world of SEO. Search engines prioritize websites with valuable, well-written, and engaging content. To enhance your website's ranking, focus on creating high-quality, informative, and unique content that provides value to your audience. Use relevant keywords throughout your content, but do so in a way that feels organic and natural.

      Additionally, consider using various content formats, such as blog posts, videos, infographics, and podcasts, to diversify your content strategy. This will not only attract different types of viewers but also help improve your website's visibility in different search engine result formats.

      ## 3. On-Page Optimization
      On-page optimization refers to optimizing various elements within your website to improve its visibility and ranking. Some key on-page optimization techniques include:

      - **Title Tags and Meta Descriptions:** Craft compelling and keyword-rich title tags and meta descriptions for each page of your website. These snippets are often displayed in search results, so make them enticing and relevant to increase click-through rates.
      - **URL Structure:** Implement descriptive and keyword-rich URLs for your webpages. Use hyphens to separate words and keep them concise and reader-friendly.
      - **Image Optimization:** Optimize your images by reducing file sizes, using descriptive filenames, and utilizing alt tags. This enables search engines to understand what your images are about and helps improve overall SEO.
      - **Internal Linking:** Link relevant pages within your website to create a cohesive and easy-to-navigate structure. This not only improves user experience but also helps search engines crawl and index your webpages more effectively.

      By implementing these on-page optimization techniques, you can enhance your website's visibility, user experience, and ultimately its search engine ranking.

      ## Conclusion
      SEO is a long-term investment that requires ongoing effort and strategies to reap its benefits. By conducting thorough keyword research, creating high-quality content, and optimizing your website's on-page elements, you can significantly improve your website's search engine ranking. Remember, SEO is ever-evolving, so stay up-to-date with the latest trends and algorithms to ensure your website remains competitive and visible in the vast digital landscape." 
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
          SEO article writer
        </h3>
      </div>
      <div className="px-6 pt-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          Provide a few SEO keywords that you’d like to generate an article and
          related cover image will be generated using OpenAI and Stability AI.
        </p>

        <div className="my-6 flex flex-row gap-x-2">
          <div className="w-2/5 space-y-2">
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
          <div className="w-3/5">
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
              Generate Article and Image
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
              <div className="seo-box w-full overflow-y-auto">
                <pre className="flex w-full flex-1 items-center whitespace-pre-line break-all px-1.5 py-1 text-semantic-fg-primary product-body-text-4-regular">
                  {article ? article : defaultArticle}
                </pre>
              </div>
              <div className="seo-image-box flex w-full flex-wrap overflow-auto">
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
            href="https://console.instill.tech/admin/pipelines/jumbotron-seo-article-writer/builder"
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
