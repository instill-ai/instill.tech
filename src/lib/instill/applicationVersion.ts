import { InstillAppType, InstillAppVersion } from "@/types/instill";
import { LATEST_VERSIONS } from "../../../version.mjs";

export function getApplicationVersion(
  path: string | Array<string>,
  appType: InstillAppType
): InstillAppVersion {
  if (path.includes(LATEST_VERSIONS[appType])) {
    return LATEST_VERSIONS[appType];
  }
  if (path.includes("v0.5.0-alpha")) {
    return "v0.5.0-alpha";
  }
  if (path.includes("v0.4.1-alpha")) {
    return "v0.4.1-alpha";
  }
  return LATEST_VERSIONS[appType];
}
