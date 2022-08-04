import Link from "next/link";

const NewsletterArchiveLink = () => {
  return (
    <Link href="/newsletter">
      <a className="flex instill-text-body text-instillGrey30 hover:text-instillGrey05">
        <p className="my-auto">Newsletter</p>
      </a>
    </Link>
  );
};

export default NewsletterArchiveLink;
