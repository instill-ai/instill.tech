import Link from "next/link";
import cn from "clsx";
import { useTranslation } from "next-i18next";

export type ArticleNavigationButtonProps = {
  text: string;
  link: string;
  type: "prev" | "next";
};

export const ArticleNavigationButton = ({
  text,
  link,
  type,
}: ArticleNavigationButtonProps) => {
  const { t } = useTranslation();
  return (
    <Link
      href={link}
      className="flex flex-col gap-y-1.5 rounded-[6px] border p-2.5 transition duration-300 ease-in-out hover:border-semantic-accent-on-bg"
    >
      <p
        className={cn(
          "text-xs text-black dark:text-instillGrey15",
          type === "prev" ? "mr-auto" : "ml-auto"
        )}
      >
        {type === "next" ? t("common:nextPage") : t("common:previousPage")}
      </p>
      <p
        className={cn(
          "text-sm text-semantic-accent-on-bg",
          type === "prev" ? "mr-auto" : "ml-auto"
        )}
      >
        {t(text)}
      </p>
    </Link>
  );
};
