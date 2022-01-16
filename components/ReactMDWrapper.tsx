import ReactMarkdown from "react-markdown";

import { FC } from "react";

interface Props {
  content: string;
}

const ReactMarkdownWrapper: FC<Props> = ({ content }) => {
  return (
    <article className="prose">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default ReactMarkdownWrapper;
