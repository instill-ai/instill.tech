import Link from "next/link";

export const PricingPageLink = () => {
  return (
    <Link
      href="/pricing"
      className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50"
    >
      <p className="my-auto">Pricing</p>
    </Link>
  );
};
