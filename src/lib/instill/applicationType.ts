import { InstillAppType } from "@/types/instill";

export const applicationName = {
  vdp: "common:navbar.instillVDP",
  core: "common:navbar.instillCore",
  base: "common:navbar.instillBase",
  model: "common:navbar.instillModel",
  cloud: "common:navbar.instillCloud",
};

export function getApplicationType(
  path: string | Array<string>
): InstillAppType {
  if (path.includes("vdp")) {
    return "vdp";
  }
  if (path.includes("cloud")) {
    return "cloud";
  }
  if (path.includes("model")) {
    return "model";
  }
  if (path.includes("core")) {
    return "core";
  }
  if (path.includes("base")) {
    return "base";
  }
  return "vdp";
}

export function isRouterActive(currentPath: string, routerPath: string) {
  const applicattionType = getApplicationType(currentPath);
  if (routerPath.includes(applicattionType)) {
    return true;
  }
  return false;
}
