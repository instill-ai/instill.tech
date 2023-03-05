import { serialize } from "next-mdx-remote/serialize";
import remarkDirective from "remark-directive";
import { remarkCodeHike } from "@code-hike/mdx";
import remarkGfm from "remark-gfm";
import { h } from "hastscript";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import { remarkInfoBlock } from "@/lib/markdown/remark-info-block.mjs";
import { remarkYoutube } from "@/lib/markdown/remark-youtube.mjs";
import {
  infoBlockHeader,
  infoBlockChildren,
} from "@/lib/markdown/rehype-info-block-handler.mjs";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export const serializeMdxRemote = async (
  source: string,
  parseFrontmatter: boolean,

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  theme: any
): Promise<MDXRemoteSerializeResult> => {
  try {
    const mdxSource = await serialize(source, {
      parseFrontmatter: parseFrontmatter,
      mdxOptions: {
        useDynamicImport: true,
        remarkRehypeOptions: {
          handlers: { infoBlockHeader, infoBlockChildren },
        },
        remarkPlugins: [
          [
            remarkCodeHike,
            {
              theme,
              lineNumbers: false,
              showCopyButton: true,
              autoImport: false,
            },
          ],
          remarkDirective,
          // remarkInfoBlock,
          [remarkYoutube, { validateYoutubeLink: true }],
          remarkGfm,
        ],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "prepend",
              properties: { class: "heading-anchor" },
              content() {
                return h("span", { class: "heading-anchor-hash" }, ["#"]);
              },
            },
          ],
        ],
      },
    });

    return Promise.resolve(mdxSource);
  } catch (err) {
    return Promise.reject(err);
  }
};
