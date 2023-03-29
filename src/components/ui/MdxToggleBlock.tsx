import { ReactElement } from "react";
import * as classNames from "classnames";

export type MdxToggleBlockProps = {
  children: ReactElement;
  styles: string;
};

export const MdxToggleBlock = ({ children, styles }: MdxToggleBlockProps) => {
  return (
    <div className={classNames.default("instill-scoped-info-block", styles)}>
      {children}
    </div>
  );
};
