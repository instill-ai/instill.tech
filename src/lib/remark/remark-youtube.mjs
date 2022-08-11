import { visit } from "unist-util-visit";
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function remarkYoutube(options) {
  if (!options) {
    throw Error("Options is not provided");
  }

  if (typeof options.validateYoutubeLink === "undefined") {
    throw Error("validateYoutubeLink option is requried");
  }

  return (tree, file) => {
    visit(tree, async (node) => {
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        if (node.name !== "youtube") return;

        const data = node.data || (node.data = {});
        const attributes = node.attributes || {};
        const id = attributes.id;
        if (node.type === "textDirective") {
          file.fail("Text directives for `youtube` not supported", node);
        }
        if (!id) {
          file.fail("Missing video id", node);
        }
        let youtubeLinkIsValid = true;

        if (options.validateYoutubeLink) {
          const youtube = await fetch(
            `https://youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}`
          );
          if (youtube.status === 200) {
            youtubeLinkIsValid = true;
          }
        } else {
          youtubeLinkIsValid = true;
        }

        if (youtubeLinkIsValid) {
          data.hName = "iframe";
          data.hProperties = {
            src: "https://www.youtube.com/embed/" + id,
            frameBorder: 0,
            allow: "picture-in-picture",
            allowFullScreen: true,
            className: "embed-youtube",
          };
        } else {
          file.fail(`Provided youtube link id is not found - ${id}`);
        }
      }
    });
  };
}
