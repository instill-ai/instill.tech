import Link from "next/link";

const PrivacyPolicyLink = () => {
  return (
    <Link href="/privacy">
      <a className="instill-text-body text-instillGrey30 hover:text-instillGrey05">
        Privacy policy
      </a>
    </Link>
  );
};

export default PrivacyPolicyLink;
