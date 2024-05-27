import { ReactElement } from "react";
import { LATEST_VERSIONS } from "../../../version.mjs";

export type MdxVersionCoreProps = {
  children: ReactElement;
};

function replaceValue(obj: any, oldValue: string, newValue: string) {
  obj.forEach((item: any) => {
    item.code.lines.forEach((line: any) => {
      line.tokens.forEach((token: any) => {
        if (token.content === oldValue) {
          token.content = newValue;
        }
      });
    });
  });
  return obj;
}

export const MdxVersionCore = ({ children }: MdxVersionCoreProps) => {
  const version = LATEST_VERSIONS.core; // Extract the version from the imported data
  replaceValue(children.props.files, "-version-", version);
  return children;
};
