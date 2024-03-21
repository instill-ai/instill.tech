import Link from "next/link";
import { LATEST_VERSIONS } from "../../../../version.mjs";

export const DocsPageLink = () => {
  return (
    <div className="relative my-auto">
      <Link
        href={`/docs/welcome`}
        className="instill-text-body underline-animation flex text-instillGrey80 hover:text-instillBlue50"
      >
        <p className="my-auto">Documentation</p>
      </Link>
    </div>
  );
};
