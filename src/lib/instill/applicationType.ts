export function getApplicationType(path: string | Array<string>): string {
  if (path.includes("vdp")) {
    return "vdp";
  }
  if (path.includes("instill-cloud")) {
    return "instill-cloud";
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
