import { FC } from "react";
import { IconBase } from "./IconBase";

interface Props {
  /** <Tailwind config> - width, height, color, viewBox="0 0 25 25" */
  styleName: string;
}

export const WorkTypeIcon: FC<Props> = ({ styleName }) => {
  return (
    <IconBase styleName={styleName} viewBox="0 0 25 25">
      <path d="M20.5 8.5h-3v-2c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2h-3c-1.1 0-2 .9-2 2v10h20v-10c0-1.1-.9-2-2-2zm-11-2h6v2h-6v-2zm11 12h-16v-3h2v1h2v-1h8v1h2v-1h2v3zm-2-5v-1h-2v1h-8v-1h-2v1h-2v-3h16v3h-2z" />
    </IconBase>
  );
};
