import Link from "next/link";

export const BlogPageLink = () => {
  return (
    <Link href="/blog">
      <a className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50">
        <p className="my-auto">Blog</p>
      </a>
    </Link>
  );
};
