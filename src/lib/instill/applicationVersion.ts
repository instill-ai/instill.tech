import { InstillAppVersion } from "@/types/instill";
import { LATEST_VERSION } from "../../../version.mjs";

export function getApplicationVersion(
  path: string | Array<string>
): InstillAppVersion {
  if (path.includes(LATEST_VERSION)) {
    return LATEST_VERSION;
  }
  return LATEST_VERSION;
}
