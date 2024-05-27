import { join } from "path";
import glob from "fast-glob";
import fs from "fs";
import { ArticleMeta } from "@/types/instill";
import { getCommitMeta } from "../github";
import { validateTutorialMeta } from "./validateTutorialMeta";
import matter from "gray-matter";
import { validateBlogArticleMeta } from "./validateBlogArticleMeta";

export const prepareArticles = async (): Promise<ArticleMeta[]> => {
  try {
    // Glob all tutorials and construct full absolute paths
    const tutorialDir = join(process.cwd(), "tutorials");
    const tutorialRelativePaths = glob.sync("**/*.mdx", { cwd: tutorialDir });

    const turtoialPaths: { absolute: string; relative: string }[] = [];
    const tutorials: ArticleMeta[] = [];

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
        path: "./" + path.relative,
      });

      const validatedMeta = validateTutorialMeta(path.absolute, data);

      tutorials.push({
        ...validatedMeta,
        commit: commitMeta,
        slug: "/tutorials/" + path.relative.split(".")[0],
        type: "Tutorial",
      });
    }

    // Glob all articles of blog and construct full absolute paths
    const blogArticleDir = join(process.cwd(), "blog");
    const blogArticleRelativePaths = glob.sync("**/*.mdx", {
      cwd: blogArticleDir,
    });

    const blogArticlePaths: { absolute: string; relative: string }[] = [];

    for (const path of blogArticleRelativePaths) {
      blogArticlePaths.push({
        relative: path,
        absolute: join(process.cwd(), "blog", path),
      });
    }

    // Read the blog file's frontmatter and prepare blog article meta
    for (const path of blogArticlePaths) {
      const source = fs.readFileSync(path.absolute, "utf8");
      const { data } = matter(source);

      const commitMeta = await getCommitMeta({
        org: "instill-ai",
        repo: "instill.tech",
        path: "/blog/" + path.relative,
      });

      const validatedMeta = validateBlogArticleMeta(path.absolute, data);

      tutorials.push({
        ...validatedMeta,
        commit: commitMeta,
        slug: "/blog/" + path.relative.split(".")[0],
        type: "Blog",
      });
    }

    return tutorials;
  } catch (err) {
    return Promise.reject(err);
  }
};
