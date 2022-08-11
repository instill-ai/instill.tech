import { all } from "mdast-util-to-hast";

export const infoBlock = (h, node) => {
  return h(node, "div", { class: "docs-info-block" }, all(h, node));
};

export const infoBlockChildren = (h, node) => {
  return h(node, "div", { class: "docs-info-block-children" }, all(h, node));
};
