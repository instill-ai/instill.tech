import Link from "next/link";
import cn from "clsx";

export type ArticleNavigationButtonProps = {
  text: string;
  link: string;
  type: "prev" | "next";
};

const ArticleNavigationButton = ({
  text,
  link,
  type,
}: ArticleNavigationButtonProps) => {
  return (
    <Link href={link}>
      <a className="flex flex-col gap-y-1.5 p-2.5 border rounded-md hover:border-instillBlue50 transition ease-in-out duration-300">
        <p className={cn("text-xs", type === "prev" ? "mr-auto" : "ml-auto")}>
          {type === "next" ? "Next page" : "Previous page"}
        </p>
        <p
          className={cn(
            "text-instillBlue50 text-sm",
            type === "prev" ? "mr-auto" : "ml-auto"
          )}
        >
          {text}
        </p>
      </a>
    </Link>
  );
};

export default ArticleNavigationButton;
