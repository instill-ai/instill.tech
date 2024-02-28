import Link from "next/link";

export const HubPageLink = () => {
  return (
    <Link
      href="https://instill.tech/hub"
      className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50"
    >
      <p className="my-auto">Hub</p>
    </Link>
  );
};
