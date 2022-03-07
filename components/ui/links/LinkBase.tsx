import Link from "next/link";
import { FC } from "react";
import * as classNames from "classnames";

interface Props {
  href: string;
  styleName?: string;
  onClick?: () => void;

  /** Scroll to the top of the page after a navigation. Defaults to true */
  scroll?: boolean;
}

export const LinkBase: FC<Props> = ({
  href,
  children,
  styleName,
  onClick,
  scroll,
  ...props
}) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props} passHref={true} scroll={scroll}>
        <div
          onClick={onClick && onClick}
          className={classNames.default("cursor-pointer", styleName)}
        >
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
      onClick={onClick && onClick}
    >
      {children}
    </a>
  );
};
