import { ReactElement } from "react";

export type MdxInfoBlockProps = {
  type: string;
  title: string;
  children: ReactElement;
};

export const MdxInfoBlock = ({ type, title, children }: MdxInfoBlockProps) => {
  return (
    <div className={`docs-info-block ${type}`}>
      <div className="docs-info-block-header">{title.toUpperCase()}</div>
      <div className="docs-info-block-children">{children}</div>
    </div>
  );
};
