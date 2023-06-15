export function getApplicationType(router: string | Array<string>): string {
  if (router.includes("vdp")) {
    return "vdp";
  }
  if (router.includes("instill-cloud")) {
    return "instill-cloud";
  }
  return "vdp";
}
