import { InstillAppVersion } from "@/types/instill";

export function getApplicationVersion(
  path: string | Array<string>
): InstillAppVersion {
  if (path.includes("1.37.0")) {
    return "1.37.0";
  }
  if (path.includes("1.35.0")) {
    return "1.35.0";
  }
  if (path.includes("1.0.0")) {
    return "1.0.0";
  }
  return "1.37.0";
}
