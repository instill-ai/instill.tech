import Link from "next/link";

export const BlogPageLink = () => {
  return (
    <div className="relative my-auto">
      <Link
        href="/blog"
        className="instill-text-body underline-animation flex text-instillGrey80 hover:text-instillBlue50"
      >
        <p className="my-auto">Blog</p>
      </Link>
    </div>
  );
};
