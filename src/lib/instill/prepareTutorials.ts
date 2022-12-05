import { join } from "path";
import glob from "fast-glob";
import fs from "fs";
import { TutorialMeta } from "@/types/instill";
import { getCommitMeta } from "../github";
import { validateTutorialMeta } from "./validateTutorialMeta";
import matter from "gray-matter";

export const prepareTutorials = async (): Promise<TutorialMeta[]> => {
  try {
    // Glob all tutorials and construct full absolute paths
    const tutorialDir = join(process.cwd(), "tutorials");
    const tutorialRelativePaths = glob.sync("**/*.mdx", { cwd: tutorialDir });

    let turtoialPaths: { absolute: string; relative: string }[] = [];
    let tutorials: TutorialMeta[] = [];

    for (const path of tutorialRelativePaths) {
      turtoialPaths.push({
        relative: path,
        absolute: join(process.cwd(), "tutorials", path),
      });
    }

    // Read the tutorial file's frontmatter and prepare tutorial meta
    for (const path of turtoialPaths) {
      const source = fs.readFileSync(path.absolute, "utf8");
      const { data } = matter(source);

      const commitMeta = await getCommitMeta({
        org: "instill-ai",
        repo: "instill.tech",
        path: "tutorials/" + path.relative,
      });

      const validatedMeta = validateTutorialMeta(path.absolute, data);

      tutorials.push({
        ...validatedMeta,
        commit: commitMeta,
        slug: path.relative.split(".")[0],
      });
    }

    return tutorials;
  } catch (err) {
    return Promise.reject(err);
  }
};
