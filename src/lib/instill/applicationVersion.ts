import { InstillAppVersion, Nullable } from "@/types/instill";

export function getApplicationVersion(
  path: string | Array<string>
): InstillAppVersion {
  if (path.includes("latest")) {
    return "latest";
  }
  return "latest";
}
