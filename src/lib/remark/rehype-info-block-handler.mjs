import { all } from "mdast-util-to-hast";

export const infoBlockHeader = (h, node) => {
  return h(node, "div", { class: "docs-info-block-header" }, all(h, node));
};

export const infoBlockChildren = (h, node) => {
  return h(node, "div", { class: "docs-info-block-children" }, all(h, node));
};
