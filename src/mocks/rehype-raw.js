/**
 * Because react-markdown is now a ESM package, Jest still need some config to test ESM packages.
 * This is just a workaround, if you want to test react-markdown you may need something else, you
 * could find more information here https://github.com/remarkjs/react-markdown/issues/635
 */

const rehypeRaw = () => {};

export default rehypeRaw;
