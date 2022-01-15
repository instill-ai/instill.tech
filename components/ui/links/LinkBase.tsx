import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
  styleName?: string;
}

export const LinkBase: FC<Props> = ({
  href,
  children,
  styleName,
  ...props
}) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        <div className={styleName}>{children}</div>
      </Link>
    );
  }

  return (
    <a
      className={styleName}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};
