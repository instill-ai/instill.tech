import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import cn from "clsx";

export type ReactMarkdownWrapperProps = {
  content: string;
  marginBottom?: string;
  prose?: string;
  additionalClassname?: string;
  width?: string;
};

export const ReactMarkdownWrapper = ({
  content,
  marginBottom,
  prose,
  additionalClassname,
  width,
}: ReactMarkdownWrapperProps) => {
  return (
    <article
      className={cn(
        "prose prose-lg",
        marginBottom,
        prose,
        additionalClassname,
        width
      )}
    >
      <ReactMarkdown
        skipHtml={false}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};
