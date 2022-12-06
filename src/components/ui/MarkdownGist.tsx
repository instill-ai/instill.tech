import Gist from "react-gist";

export type MarkdownGistProps = {
  id: string;
};

export const MarkdownGist = ({ id }: MarkdownGistProps) => {
  return <Gist id={id} />;
};
