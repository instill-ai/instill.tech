import Link from "next/link";

export const AboutPageLink = () => {
  return (
    <div className="relative my-auto">
      <Link
        href="/about"
        className="instill-text-body underline-animation flex text-instillGrey80 hover:text-instillBlue50"
      >
        <p className="my-auto">About</p>
      </Link>
    </div>
  );
};
