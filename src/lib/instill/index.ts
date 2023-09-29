export { getAiTaskIconAndLabel } from "./getAiTaskIconAndLabel";
export type { getAiTaskIconAndLabelProps } from "./getAiTaskIconAndLabel";
export { validateTutorialMeta } from "./validateTutorialMeta";
export { getApplicationType, isRouterActive } from "./applicationType";
export { getApplicationVersion } from "./applicationVersion";

// Do not re-export prepareTutorials to the lib/instill, it will make
// the nextjs webpack panic.
