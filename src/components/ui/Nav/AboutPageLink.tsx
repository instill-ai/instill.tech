import Link from "next/link";

export const AboutPageLink = () => {
  return (
    <Link
      href="/about"
      className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50"
    >
      <p className="my-auto">About</p>
    </Link>
  );
};
