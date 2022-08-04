import Link from "next/link";

const AboutPageLink = () => {
  return (
    <Link href="/about">
      <a className="flex instill-text-body text-instillGrey30 hover:text-instillGrey05">
        <p className="my-auto">About</p>
      </a>
    </Link>
  );
};

export default AboutPageLink;
