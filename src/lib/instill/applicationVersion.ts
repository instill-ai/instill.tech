import { InstillAppType, InstillAppVersion } from "@/types/instill";
import { VERSIONS } from "../../../version.mjs";

export function getApplicationVersion(
  path: string | Array<string>,
  appType: InstillAppType
): InstillAppVersion {
  if (path.includes(VERSIONS[appType])) {
    return VERSIONS[appType];
  }
  return VERSIONS[appType];
}
