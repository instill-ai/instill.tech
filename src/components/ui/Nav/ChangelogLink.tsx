import Link from "next/link";

export const ChangelogLink = () => {
  return (
    <div className="relative my-auto">
      <Link
        href="/changelog"
        className="instill-text-body underline-animation flex text-instillGrey80 hover:text-instillBlue50"
      >
        <p className="my-auto">Changelog</p>
      </Link>
    </div>
  );
};
