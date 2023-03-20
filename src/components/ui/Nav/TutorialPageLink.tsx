import Link from "next/link";

export const TutorialPageLink = () => {
  return (
    <Link
      href="/tutorials"
      className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50"
    >
      <p className="my-auto">Tutorials</p>
    </Link>
  );
};
