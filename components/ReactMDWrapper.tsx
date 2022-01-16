import ReactMarkdown from "react-markdown";
import * as classNames from "classnames";

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
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};
