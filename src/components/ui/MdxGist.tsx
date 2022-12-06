import { MdxComponentPosition } from "@/lib/markdown";
import Gist from "react-gist";
import { MdxComponentBase } from "./MdxComponentBase";

export type MdxGistProps = {
  id: string;
  position?: MdxComponentPosition;
};

export const MdxGist = ({ id, position }: MdxGistProps) => {
  return (
    <MdxComponentBase position={position}>
      <Gist id={id} />
    </MdxComponentBase>
  );
};
