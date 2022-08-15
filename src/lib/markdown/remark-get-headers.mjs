import { visit } from "unist-util-visit";
import BananaSlug from "github-slugger";
import { toString } from "mdast-util-to-string";

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function remarkGetHeaders(options) {
  if (!options) {
    throw Error("Options is not provided");
  }

  if (!options.headers) {
    throw Error("options.headers prop is not provided");
  }

  const slugs = new BananaSlug();

  return (tree) => {
    visit(tree, async (node) => {
      if (node.type !== "heading") return;
      if (node.children.length === 0) return;

      let headingText = slugs.slug(toString(node));

      options.headers.push({
        depth: node.depth,
        text: toString(node),
        slug: headingText,
      });
    });
  };
}
