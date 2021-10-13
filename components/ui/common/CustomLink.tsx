import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
}

export const CustomLink: FC<Props> = ({ href, children, ...props }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};
