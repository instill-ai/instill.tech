import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import cn from "clsx";
import { ArrowRightIcon, TextButton } from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type FaqProps = {
  mdxSource: MDXRemoteSerializeResult;
  marginBottom?: string;
};

const Faq = ({ mdxSource, marginBottom }: FaqProps) => {
  const router = useRouter();
  return (
    <div className={cn("flex flex-row", marginBottom)}>
      <div className="flex w-5/12 flex-col gap-y-1">
        <div className="text-base font-normal uppercase text-instillBlue50">
          We have the answers
        </div>
        <h2 className="font-mono text-4xl font-medium text-instillGrey90">
          FAQ
        </h2>
      </div>
      <div className="flex w-7/12 flex-col">
        <div className="mb-[60px] flex w-full flex-col">
          <p className="mb-5 font-sans text-lg font-normal text-instillGrey90">
            This section selects a short list of frequently asked questions from
            our users, friends, candidates, investors, random people, etc.
          </p>
          <TextButton
            type="button"
            color="primary"
            itemGapX="gap-x-6"
            padding="px-2.5 py-[5px]"
            onClickHandler={() => router.push("/docs/start-here/faq")}
            endIcon={
              <ArrowRightIcon
                position="my-auto"
                width="w-5"
                height="h-5"
                color="fill-instillBlue50"
              />
            }
          >
            See all FAQ
          </TextButton>
        </div>
        <article id="content" className="prose prose-black max-w-none">
          <MDXRemote {...mdxSource} />
        </article>
      </div>
    </div>
  );
};

export default Faq;
