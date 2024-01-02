import { InstillAppType } from "@/types/instill";
import { getApplicationVersion } from "./applicationVersion";

export const applicationName = {
  vdp: "Instill VDP",
  core: "Instill Core",
  model: "Instill Model",
  cloud: "Instill Cloud",
};

export function getApplicationType(
  path: string | Array<string>
): InstillAppType {
  if (path.includes("core")) {
    return "core";
  }
  return "core";
}

export function isRouterActive(currentPath: string, routerPath: string) {
  if (currentPath.includes(routerPath.replace("/welcome", ""))) {
    return true;
  }
  return false;
}
