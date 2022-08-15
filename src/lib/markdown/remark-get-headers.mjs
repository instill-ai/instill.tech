import { visit } from "unist-util-visit";

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function remarkGetHeaders(options) {
  if (!options) {
    throw Error("Options is not provided");
  }

  if (!options.headers) {
    throw Error("options.headers prop is not provided");
  }

  return (tree) => {
    visit(tree, async (node) => {
      if (node.type !== "heading") return;
      if (node.children.length === 0) return;

      let headingText = "";

      node.children.forEach((child) => {
        headingText = headingText + child.value;
      });

      options.headers.push({
        depth: node.depth,
        text: headingText,
        slug: headingText.toLowerCase().split(" ").join("-"),
      });
    });
  };
}
