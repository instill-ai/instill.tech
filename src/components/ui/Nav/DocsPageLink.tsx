import Link from "next/link";

export const DocsPageLink = () => {
  return (
    <Link href="/docs/start-here/getting-started">
      <a className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50">
        <p className="my-auto">Documentation</p>
      </a>
    </Link>
  );
};
