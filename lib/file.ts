import fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export const getMDFileContent = (filePath: string): string => {
  const fullPath = path.resolve(process.cwd(), "markdown", filePath);

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { content, data } = matter(fileContents.trim());

  return content;
};
