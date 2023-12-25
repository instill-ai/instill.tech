import Link from "next/link";
import { LATEST_VERSIONS } from "../../../../version.mjs";

export const DocsPageLink = () => {
  return (
    <Link
      href={`/docs/${LATEST_VERSIONS["core"]}/welcome`}
      className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50"
    >
      <p className="my-auto">Documentation</p>
    </Link>
  );
};
