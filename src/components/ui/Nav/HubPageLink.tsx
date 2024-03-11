import Link from "next/link";

export const HubPageLink = () => {
  return (
    <div className="relative my-auto">
      <Link
        href="https://instill.tech/hub"
        className="instill-text-body underline-animation flex text-instillGrey80 hover:text-instillBlue50"
      >
        <p className="my-auto">Hub</p>
      </Link>
    </div>
  );
};
