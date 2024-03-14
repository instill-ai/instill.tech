import { InstillAppType, InstillAppVersion } from "@/types/instill";
import { LATEST_VERSIONS } from "../../../version.mjs";

export function getApplicationVersion(
  path: string | Array<string>,
  appType: InstillAppType
): InstillAppVersion {
  if (path.includes(LATEST_VERSIONS[appType])) {
    return LATEST_VERSIONS[appType];
  }
  return LATEST_VERSIONS[appType];
}
