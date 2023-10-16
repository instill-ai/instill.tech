import { InstillAppType } from "@/types/instill";
import { getApplicationVersion } from "./applicationVersion";

export const applicationName = {
  vdp: "Instill VDP",
  core: "Instill Core",
  base: "Instill Base",
  model: "Instill Model",
  cloud: "Instill Cloud",
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
  if (path.includes("sdk")) {
    return "sdk";
  }
  return "vdp";
}

export function isRouterActive(currentPath: string, routerPath: string) {
  if (currentPath === routerPath) {
    return true;
  }
  return false;
}
