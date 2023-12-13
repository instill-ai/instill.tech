import { LoadingSpin } from "@/components/ui";
import seoArticle from "@/lib/jumbotron/seoArticle";
import { Button, Icons, Input } from "@instill-ai/design-system";
import React, { useState } from "react";

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
  const [spinner, setSpinner] = useState(false);
  const [article, setArticle] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [sectionNumber, setSectionNumber] = useState<string>("");

  const handleGenrate = async () => {
    setSpinner(true);
    const apiResponse = await seoArticle({
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

      setArticle(articleString);
    } else {
      console.error("API Error:", apiResponse.error);
    }

    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  return (
    <div className="h-[660px] w-[500px] rounded-sm border-md border-semantic-accent-default bg-white p-6">
      <h3 className="mb-3 font-semibold leading-none">SEO article writer</h3>
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
              placeholder="Tell me a short story"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Input.Root>
          <Input.Root className="w-full">
            <Input.Core
              disabled={false}
              type="text"
              placeholder="Section number"
              value={sectionNumber}
              onChange={(e) => setSectionNumber(e.target.value)}
            />
          </Input.Root>
        </div>
        <div className="w-1/3">
          <Button
            variant="primary"
            size="md"
            className="my-auto w-full gap-x-2"
            onClick={() => handleGenrate()}
            disabled={input && sectionNumber ? false : true}
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

      <div className="flex min-h-[400px] items-center justify-center">
        {spinner ? (
          <div>Generating...</div>
        ) : (
          <div className="h-[400px] w-full overflow-y-auto">
            <pre className="flex w-full flex-1 items-center whitespace-pre-line break-all px-1.5 py-1 text-semantic-fg-primary product-body-text-4-regular">
              {article ? article : defaultArticle}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
