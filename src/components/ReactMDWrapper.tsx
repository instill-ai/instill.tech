import ReactMarkdown from "react-markdown";
import * as classNames from "classnames";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { FC } from "react";

interface Props {
  styleName?: string;
  content: string;
}

export const ReactMDWrapper: FC<Props> = ({ content, styleName }) => {
  return (
    <article
      className={classNames.default("prose prose-sm md:prose-lg", styleName)}
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
