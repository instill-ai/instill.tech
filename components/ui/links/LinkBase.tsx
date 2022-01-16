import Link from "next/link";
import { FC } from "react";
import * as classNames from "classnames";

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
      <Link href={href} {...props} passHref={true}>
        <div className={classNames.default("cursor-pointer", styleName)}>
          {children}
        </div>
      </Link>
    );
  }

  return (
    <a
      className={classNames.default("cursor-pointer", styleName)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};
