import { InstillAppVersion, Nullable } from "@/types/instill";
import { VERSIONS } from "../../../content.config";

export function getApplicationVersion(
  path: string | Array<string>
): InstillAppVersion {
  if (path.includes("1.0.0")) {
    return VERSIONS["latest"];
  }
  return VERSIONS["latest"];
}
