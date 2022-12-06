import Gist from "react-gist";

export type MdxGistProps = {
  id: string;
};

export const MdxGist = ({ id }: MdxGistProps) => {
  return <Gist id={id} />;
};
