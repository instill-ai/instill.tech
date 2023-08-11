import Link from "next/link";
import cn from "clsx";

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
  return (
    <Link
      href={link}
      className="flex flex-col gap-y-1.5 rounded-[6px] border p-2.5 transition duration-300 ease-in-out hover:border-instillBlue50"
    >
      <p
        className={cn(
          "text-xs text-black dark:text-instillGrey15",
          type === "prev" ? "mr-auto" : "ml-auto"
        )}
      >
        {type === "next" ? "Next page" : "Previous page"}
      </p>
      <p
        className={cn(
          "text-sm text-instillBlue50",
          type === "prev" ? "mr-auto" : "ml-auto"
        )}
      >
        {text}
      </p>
    </Link>
  );
};
