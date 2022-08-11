import { visit } from "unist-util-visit";
import { h } from "hastscript";

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function remarkInfoBlock() {
  return (tree, file) => {
    visit(tree, (node) => {
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        if (node.name !== "info") return;
        const data = node.data || (node.data = {});
        const type = node.attributes.type || null;
        node.attributes.type = undefined;

        if (!type) {
          file.fail("Missing info block type", node);
        }

        if (
          type === "warning" ||
          type === "info" ||
          type === "tip" ||
          type === "danger"
        ) {
          const tagName = node.type === "containerDirective" ? "div" : "span";

          // We introduce two new handler for rehype to parse.
          // In order to make this work, we need to pass handlers option when init remark-rehype

          node.children = [
            {
              type: "infoBlockHeader",
              children: [{ type: "text", value: type.toUpperCase() }],
            },
            {
              type: "infoBlockChildren",
              children: node.children,
            },
          ];

          data.hName = tagName;
          data.hProperties = {
            ...h(tagName, node.attributes).properties,
            className: `docs-info-block ${type}`,
          };
        } else {
          file.fail(`Target info block's type is not supported ${type}`, node);
        }
      }
    });
  };
}
