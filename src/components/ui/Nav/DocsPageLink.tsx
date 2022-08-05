import Link from "next/link";

const DocsPageLink = () => {
  return (
    <Link href="/docs/start-here/getting-started">
      <a className="flex instill-text-body text-instillGrey30 hover:text-instillGrey05">
        <p className="my-auto">Docs</p>
      </a>
    </Link>
  );
};

export default DocsPageLink;
