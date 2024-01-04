import Link from "next/link";

export const ChangelogLink = () => {
  return (
    <Link
      href="/changelog"
      className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50"
    >
      <p className="my-auto">Changelog</p>
    </Link>
  );
};
