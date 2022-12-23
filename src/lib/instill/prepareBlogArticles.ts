import { join } from "path";
import glob from "fast-glob";
import fs from "fs";
import { BlogArticleMeta } from "@/types/instill";
import { getCommitMeta } from "../github";
import { validateTutorialMeta } from "./validateTutorialMeta";
import matter from "gray-matter";
import { validateBlogArticleMeta } from "./validateBlogArticleMeta";

export const prepareBlogArticles = async (): Promise<BlogArticleMeta[]> => {
  try {
    // Glob all articles of blog and construct full absolute paths
    const blogArticleDir = join(process.cwd(), "blog");
    const blogArticleRelativePaths = glob.sync("**/*.mdx", {
      cwd: blogArticleDir,
    });

    const blogArticlePaths: { absolute: string; relative: string }[] = [];
    const articles: BlogArticleMeta[] = [];

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
        path: "blog/" + path.relative,
      });

      const validatedMeta = validateBlogArticleMeta(path.absolute, data);

      articles.push({
        ...validatedMeta,
        commit: commitMeta,
        slug: path.relative.split(".")[0],
      });
    }

    return articles;
  } catch (err) {
    return Promise.reject(err);
  }
};
