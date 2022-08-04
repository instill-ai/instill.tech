import Link from "next/link";

const CookiePolicyLink = () => {
  return (
    <Link href="/cookie">
      <a className="instill-text-body text-instillGrey30 hover:text-instillGrey05">
        Cookie policy
      </a>
    </Link>
  );
};

export default CookiePolicyLink;
